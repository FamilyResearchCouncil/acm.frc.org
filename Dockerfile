FROM node:lts AS base

WORKDIR /var/www/html

COPY package.json /var/www/html
RUN npm install

COPY . /var/www/html


FROM base AS prod

RUN npm install --only=production \
    && npm run build

