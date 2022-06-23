#!/usr/local/bin/python3

import psycopg2
import httplib2
import google.auth
import apiclient.discovery
import datetime
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from oauth2client.service_account import ServiceAccountCredentials


con = psycopg2.connect(
    database="gtest",
    user="gtest",
    password="ghbdtn1",
    host="postgres",
    port="5432"
)
curpg = con.cursor()

CREDENTIALS_FILE = 'coral-mariner-353515-a65ba3bfd1e6.json'
credentials = ServiceAccountCredentials.from_json_keyfile_name(CREDENTIALS_FILE, ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'])
try:
    service = build('sheets', 'v4', credentials=credentials)
    result = service.spreadsheets().values().get(spreadsheetId="12tI3ryEeU2EjOhQ511hOmZmxT79CkV34btW4ZD1IN9I", range="A:E").execute()
    rows = result.get('values', [])
    array_of_tuples = tuple(rows[1:])
    for data in array_of_tuples:
        curpg.execute("SELECT * FROM testgoogle_googlesheet WHERE nomer=%s and zakaz=%s",(int(data[0]), int(data[1]),))
        if not curpg.fetchall():
            data_obj = datetime.datetime.strptime(data[3], '%d.%m.%Y')
            insert_query = """ INSERT INTO testgoogle_googlesheet (nomer, zakaz, price_d, price_r, data) VALUES (%s, %s, %s, 0,  %s)"""
            item_tuple = (data[0], data[1], data[2], data_obj)
            curpg.execute(insert_query, item_tuple)
            con.commit()
except HttpError as error:
    print(f"An error occurred: {error}")
