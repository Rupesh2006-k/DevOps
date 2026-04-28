
ARG NODE_VERSION=24.11.1

FROM node:${NODE_VERSION}-alpine
WORKDIR /app

# package files pehle copy karo (cache optimization)
COPY package*.json ./

RUN npm install

# baaki code copy karo
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]