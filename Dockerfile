# Stage 1: Build the bundled app
FROM node:16 as builder
WORKDIR /app
COPY package*.json ./
COPY webpack.config.js ./
COPY src ./src
RUN npm install && npm run build

# Stage 2: Serve the bundled app
FROM node:16
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/app.js"]
