
FROM node:alpine

WORKDIR /usr/src/app

COPY . ./

RUN  apk add postgresql-client && npm install && chmod +x init.sh

EXPOSE 3000

CMD [ "./init.sh" ]
