# Quiz Builder

A full-stack app for building and viewing quizzes.

## Option A: Run everything with Docker (recommended)

This starts the database, backend, and frontend together with one command.

```bash
docker compose up -d --build          # standard start
SEED_DB=true docker compose up -d --build   # same, but also seeds sample quizzes
```

- Frontend: [http://localhost:3001](http://localhost:3001)
- Backend API: [http://localhost:3000](http://localhost:3000)
- Postgres: `localhost:5432`

Database migrations are applied automatically when the backend container starts. Seeding (`SEED_DB=true`) is skipped automatically if the database already has any quizzes.

Stop everything with:

```bash
docker compose down
```

(add `-v` to also delete the database volume and start fresh).

## Option B: Run frontend and backend locally

### 1. Set up the database

Start a Postgres instance. The easiest way is to use the Postgres service from `docker-compose.yaml` without the app containers:

```bash
docker compose up -d postgres
```

Alternatively, point `DATABASE_URL` at any Postgres instance you already have running.

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env   # adjust DATABASE_URL if needed
npx prisma migrate deploy   # applies database schema
npm run dev
```

The API will be available at [http://localhost:3000](http://localhost:3000).

### 3. Frontend

In a separate terminal:

```bash
cd frontend
npm install
cp .env.example .env.local   # NEXT_PUBLIC_API_URL should point to the backend, e.g. http://localhost:3000
npm run dev
```

The app will be available at [http://localhost:3001](http://localhost:3001).

## Creating a sample quiz

You can create a quiz in two ways:

### Via the UI

1. Open [http://localhost:3001/create](http://localhost:3001/create).
2. Fill in a title and add one or more questions (boolean, text input, or checkbox type).
3. Submit the form — you'll be redirected to the quiz list where the new quiz appears.

### Via the seed script

The backend includes a seed script that creates 4 sample quizzes (General Knowledge, Science Basics, Web Development, World Geography — each with a boolean, an input, and a checkbox question) if the database is empty.

Locally:

```bash
cd backend
npm run seed
```

With Docker, pass `SEED_DB=true` when starting the stack instead of running the script separately (see [Option A](#option-a-run-everything-with-docker-recommended)).

Running it against a database that already has quizzes is a no-op.

## Useful commands

| Command (run inside `backend/`) | Description                 |
| ------------------------------- | --------------------------- |
| `npm run dev`                   | Start the API in watch mode |
| `npx prisma migrate deploy`     | Apply database migrations   |
| `npm run seed`                  | Seed sample quizzes         |

`SEED_DB=true` env var (Docker only) seeds sample quizzes automatically on container startup.

| Command (run inside `frontend/`) | Description                       |
| -------------------------------- | --------------------------------- |
| `npm run dev`                    | Start the frontend dev server     |
| `npm run build`                  | Build the frontend for production |
