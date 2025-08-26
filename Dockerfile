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
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
