FROM node:14 AS production

ENV NODE_ENV=production

WORKDIR /Biketrip_Backend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run start"]

