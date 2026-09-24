FROM node
MAINTAINER Umesh
LABEL Bulid node JS application
EXPOSE 80
WORKDIR /Aplication
COPY package*.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
