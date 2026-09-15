# Quiz Builder

Full-stack app for building, listing, and viewing quizzes.

## Clone the repository

```bash
git clone https://github.com/OleksandrHridzhak/quiz_builder
cd ./quiz_builder
```

## Run with Docker

```bash
docker compose up -d --build
```

Frontend: [http://localhost:3001](http://localhost:3001) · API: [http://localhost:3000](http://localhost:3000) · Postgres: `localhost:5432`. Migrations apply automatically.

Want sample data instead of starting empty? Seed 4 sample quizzes into the running containers:

```bash
docker compose exec backend npx prisma db seed
```

## Run manually (optional)

```bash
docker compose up -d postgres

cd backend
npm install
cp .env.example .env   # adjust DATABASE_URL if needed
npx prisma migrate deploy
npm run dev
```

In a separate terminal:

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## Create a sample quiz

- **Via the UI**: open [http://localhost:3001/create](http://localhost:3001/create), fill in a title and questions, submit.
- **Via the seed script**: `cd backend && npm run seed` (no-op if the database already has data). Running in Docker? See the seed command in [Run with Docker](#run-with-docker).
