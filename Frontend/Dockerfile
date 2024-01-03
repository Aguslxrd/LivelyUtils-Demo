# Stage 1: Install development dependencies (optional)
FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Build the Angular application
COPY . .
RUN npm run build

# Stage 3: Configure the production environment
FROM nginx:1.23.3 as prod
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/lively-utils/browser/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

