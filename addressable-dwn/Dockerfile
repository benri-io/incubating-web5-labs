FROM node:19-alpine3.16
MAINTAINER Andor Kesselman <andor@benri.io>
RUN apk update && apk add --no-cache --update build-base  python3 g++

COPY ./message-store-level-v2 /message-store-level-v2
WORKDIR /message-store-level-v2
RUN npm install && node bundle.js # install messag store

# TODO: Multistage build
COPY ./addressable-dwn /app
WORKDIR /app
RUN npm install --install-links
RUN node src/index.js
EXPOSE 5000
