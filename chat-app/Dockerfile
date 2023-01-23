FROM node:19-alpine3.16
MAINTAINER Andor Kesselman <andor@benri.io>
RUN apk update && apk add --no-cache --update build-base  python3 g++

COPY ./chat-app /app
WORKDIR /app
RUN npm install && npm run dev
EXPOSE 5275
