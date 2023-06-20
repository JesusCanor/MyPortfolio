FROM node:18-alpine as builder-portfolio
WORKDIR /app
RUN npm i -g pnpm
COPY package.json .
COPY package-lock.json .
RUN pnpm install
COPY . .
RUN pnpm build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off"]