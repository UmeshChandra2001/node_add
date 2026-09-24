FROM node:22-alpine AS dependencies

MAINTAINER Umesh
LABEL description="Multi-stage Dockerfile"

WORKDIR /umeshapp

COPY package*.json ./

RUN npm ci

FROM node:22-alpine AS build

WORKDIR /umeshapp

COPY . .

RUN npm run build

FROM node:22-alpine AS prod

WORKDIR /umeshapp

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=build /umeshapp/dist ./dist

EXPOSE 80

USER node

CMD ["node", "dist/server.js"]
