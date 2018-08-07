FROM node:8.11.3-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /usr/src/app

USER node

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD NODE_ENV=$NODE_ENV npm run start-no-build
