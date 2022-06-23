# pull official base image
FROM node:16

# set work directory
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./package-lock.json .

RUN find . -type f -name '*.js' -exec sed -i -r 's/\r$//g' {} \;
RUN npm install -g serve
RUN npm install

# copy react project
COPY . .

# build react project
RUN npm run build
RUN apt update
RUN apt upgrade -y
RUN apt install iputils-ping procps mc lynx telnet net-tools -y
