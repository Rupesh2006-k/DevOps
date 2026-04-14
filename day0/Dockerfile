FROM node

# working directory set karo
WORKDIR /

# package files copy karo
COPY package*.json ./

# dependencies install karo
RUN npm install

# baaki code copy karo
COPY . .

# port expose karo
EXPOSE 5050

# app run karo
CMD ["node", "server.js"]