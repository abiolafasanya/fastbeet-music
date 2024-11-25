FROM node:lts-alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy app files
COPY . .

EXPOSE 3000

RUN npm run build


CMD ["npm", "start"]
