FROM node:22.16.0 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Development stage
FROM base AS dev
WORKDIR /app
COPY . .
COPY package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
ENV NODE_ENV=development
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build stage for production
FROM base AS build
WORKDIR /app
COPY . .
COPY package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
# Copy only the necessary files
COPY --from=build /app/dist ./dist
# Use a minimal image to serve static files (e.g., nginx or http-server)
RUN npm install -g http-server
EXPOSE 8080
CMD ["http-server", "./dist", "-p", "8080"]