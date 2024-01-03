FROM node:21

WORKDIR /ReactionerDiscordBot

COPY package*.json ./

RUN npm install

COPY package*.json ./

CMD ["node", "index.js"]
