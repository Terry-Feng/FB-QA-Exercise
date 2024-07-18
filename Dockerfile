# Use the official PW runtime as a parent image
FROM mcr.microsoft.com/playwright:focal

# Set the working directory to /app
WORKDIR /app

# Copy the contents of the root directory into the container at /app
COPY . /app

# Install dependencies
RUN npm install

RUN npx playwright install webkit
