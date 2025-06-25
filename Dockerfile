FROM node:20.19.3

WORKDIR /app

COPY index.html .
COPY package.json .
COPY package-lock.json .
COPY server.js .

RUN npm install

EXPOSE 3001

CMD [ "node","server.js" ]