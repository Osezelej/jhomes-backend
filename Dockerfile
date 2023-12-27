FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install --force

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]
