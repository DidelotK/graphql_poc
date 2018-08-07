FROM node:8.11.3-slim as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15

COPY --from=node /usr/src/app/dist /usr/share/nginx/html
