FROM nginx:1.22

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

WORKDIR /usr/src/app

RUN apt update
RUN apt upgrade -y
RUN apt install iputils-ping procps mc lynx telnet net-tools -y
