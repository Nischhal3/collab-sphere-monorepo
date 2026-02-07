# Stage 1: build frontend
FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/build /dist

# Keep container alive so podman exec works
CMD ["sh", "-c", "tail -f /dev/null"]
