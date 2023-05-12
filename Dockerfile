FROM node:14.21-alpine

# Working directory is /usr/src/app
ENV NODE_ENV=production
ENV JWT_SECRET=abc123
ENV PORT=5000
ENV MONGO_URI=mongodb+srv://satyaverma27:Satya22%40@ecom.yziv46w.mongodb.net/buy_a_swag?retryWrites=true&w=majority

WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy remaining app files
COPY . .
EXPOSE 5000
CMD ["npm", "run","dockerbuildwebapp"]