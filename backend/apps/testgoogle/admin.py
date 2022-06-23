from django.contrib import admin
from .models import Googlesheet

@admin.register(Googlesheet)
class GooglesheetAdmin(admin.ModelAdmin):
    list_display = ('nomer', 'zakaz', 'price_d', 'price_r', 'data')


