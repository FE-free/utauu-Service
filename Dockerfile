FROM node:10.13-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

COPY ./package.json /usr/src/app/package.json

RUN  yarn install --production --registry https://registry.npm.taobao.org

RUN  yarn ets

CMD ["yarn","run", "start-docker"]