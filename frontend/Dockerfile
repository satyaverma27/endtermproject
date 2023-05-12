# Dockerfile for React client

# Build react client
FROM node:14.21-alpine

# Working directory be app

ENV NODE_ENV=development
ENV MONGO_URI=mongodb+srv://satyaverma27:Satya22%40@ecom.yziv46w.mongodb.net/buy_a_swag?retryWrites=true&w=majority
WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN npm install 

# copy local files to app folder
COPY . .


EXPOSE 3000


CMD ["npm","start"]