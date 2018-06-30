FROM node:latest

RUN mkdir /api
WORKDIR /api

COPY package.json /api
RUN npm install

COPY . /api

EXPOSE 3002

CMD [ "npm", "start"]