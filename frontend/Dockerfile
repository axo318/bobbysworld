FROM node:latest

WORKDIR /app
COPY package*.json ./
RUN npm i

COPY *.js ./
COPY *.html ./
ADD src ./src/

EXPOSE 3000
CMD ["node", "app.js"]
