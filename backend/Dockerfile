FROM node:24-alpine

WORKDIR /app

# openssl is required by the Prisma query engine on Alpine (musl)
RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm install

COPY . .
ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"
RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && if [ \"$SEED_DB\" = \"true\" ]; then npx prisma db seed; fi && npm run start"]
