FROM node:12

# create work dir
WORKDIR /usr/src/app

# ensure package.json and package-lock.json copied
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7777

CMD ["npm", "start"]

