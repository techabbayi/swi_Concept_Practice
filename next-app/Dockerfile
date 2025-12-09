# Step 1: Choose base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy remaining project files
COPY . .

# Step 6: Build your Next.js app
RUN npm run build

# Step 7: Start the app
CMD ["npm", "start"]
