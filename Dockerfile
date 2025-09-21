FROM node:20.12.2-alpine

# Set the working directory
WORKDIR /app

# Install bash
RUN apk update && apk upgrade && apk add --no-cache bash

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host"]
