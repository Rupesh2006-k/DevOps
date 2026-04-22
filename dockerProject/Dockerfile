# FROM node:20-alpine
# COPY ./backend/ .
# RUN npm install
# CMD ["node", "server.js"]


# for the frontend 
FROM node:20-alpine as frontend-builder

COPY ./frontend /app

WORKDIR /app    

RUN npm install

RUN npm run build


# for the backend
FROM node:20-alpine as backend-builder

COPY ./backend /app

WORKDIR /app

RUN npm install

COPY --from=frontend-builder /app/dist /app/public