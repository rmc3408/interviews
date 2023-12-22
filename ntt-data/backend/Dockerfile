FROM node:16-alpine

WORKDIR /backend

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "run", "start:dev"]

