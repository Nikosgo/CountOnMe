# Build React APP
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app
COPY . .

# Build the app
RUN npm run build

# Production Stage
FROM nginx:stable-alpine

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
