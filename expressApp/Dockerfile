ARG NODE_VERSION=24.11.1
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["node", "server.js"]
