# Quiz Builder

Full-stack app for building, listing, and viewing quizzes.

## Run with Docker

```bash
docker compose up -d --build                 # standard start
SEED_DB=true docker compose up -d --build    # same, with 4 sample quizzes seeded
```

Frontend: [http://localhost:3001](http://localhost:3001) · API: [http://localhost:3000](http://localhost:3000) · Postgres: `localhost:5432`. Migrations apply automatically.

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
- **Via the seed script**: `cd backend && npm run seed` (no-op if the database already has data).
