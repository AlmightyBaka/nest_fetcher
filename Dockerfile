FROM node:22-alpine

# using pnpm for faster dependency install
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# installing openssl as it is required by prisma but is missing in container
# RUN apk update
# RUN apk add openssl libressl-dev
# RUN apt-get update -y
# RUN apt-get install -y openssl

ENV NODE_ENV production
EXPOSE 3000

WORKDIR /app

COPY package*.json .
RUN pnpm install

COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npx prisma generate

COPY . .

CMD ["npm", "start"]
