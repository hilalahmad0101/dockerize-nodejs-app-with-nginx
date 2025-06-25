FROM node:20.19.3

WORKDIR /app

COPY /views/index.ejs .
COPY package.json .
COPY package-lock.json .
COPY server.js .

RUN npm install

CMD ["mdkir" ,"views"]

CMD ["mv", "index.ejs", "views/index.ejs"]

EXPOSE 3001

CMD [ "node","server.js" ]