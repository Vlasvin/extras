FROM node:23.3.0-bookworm-slim

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build

EXPOSE 3000

# Set the command to run the server
#CMD ["serve", "-s", "build"]
CMD ["npm", "start"]