# Official Node.js runtime
FROM node:16.15-alpine
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1231
CMD ["npm","start"]
