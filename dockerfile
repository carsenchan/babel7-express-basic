FROM node:latest

RUN mkdir /node-server
WORKDIR /node-server

COPY package.json /node-server
RUN yarn install

COPY . /node-server

EXPOSE 3030

CMD [ "yarn", "start"]