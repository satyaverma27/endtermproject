# FROM node:14.21-alpine

# # Create app directory

# WORKDIR /usr/src/app
# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --omit=dev

# # Bundle app source
# COPY backend/server.js ./backend/
# COPY . .


# EXPOSE 5000

# CMD ["sh","-c","npm start"]


# Dockerfile for Node.js backend

FROM node:14.21-alpine

# Working directory is /usr/src/app
ENV NODE_ENV=development
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

# Expose port 5000
EXPOSE 5000

# Start the app
CMD ["node", "server.js"]

