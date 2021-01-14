FROM node:lts-alpine

WORKDIR /usr/src/app

RUN apk update && apk add --no-cache bash yarn

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]