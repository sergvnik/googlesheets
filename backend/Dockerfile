# pull official base image
FROM python:3.10.5

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY ./requirements.txt .
RUN pip install --no-cache --upgrade pip
RUN pip install --no-cache -r requirements.txt
RUN pip install --no-cache gunicorn
# copy django project
COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

RUN apt update
RUN apt upgrade -y
RUN apt install iputils-ping procps mc lynx telnet net-tools cron -y
RUN mkfifo --mode 0666 /var/log/cron.log
COPY  ./root /var/spool/cron/crontabs
RUN service cron restart

