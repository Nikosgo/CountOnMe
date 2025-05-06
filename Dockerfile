# Build React APP
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Copy the rest of the React app
COPY . .

# Install dependencies
RUN npm install -g serve
RUN npm install

# Build the app
RUN npm run build --silent

# Change Tomcat's internal port
RUN sed -i 's/port="8080"/port="3000"/' /usr/local/tomcat/conf/server.xml

# Expose port 3000 for nginx
EXPOSE 3000

# Serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]