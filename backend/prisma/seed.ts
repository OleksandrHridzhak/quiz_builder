import 'dotenv/config';
import { Prisma } from '../src/generated/prisma/client';
import { prisma } from '../src/lib/prisma';

const quizzes: Prisma.QuizCreateInput[] = [
  {
    title: 'General Knowledge',
    questions: {
      create: [
        {
          type: 'BOOLEAN',
          text: 'The Earth is flat.',
          order: 0,
          correctBoolean: false,
        },
        {
          type: 'INPUT',
          text: 'What is the capital of France?',
          order: 1,
          correctText: 'Paris',
        },
        {
          type: 'CHECKBOX',
          text: 'Which of the following are primary colors?',
          order: 2,
          options: {
            create: [
              { text: 'Red', isCorrect: true, order: 0 },
              { text: 'Green', isCorrect: false, order: 1 },
              { text: 'Blue', isCorrect: true, order: 2 },
              { text: 'Orange', isCorrect: false, order: 3 },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'Science Basics',
    questions: {
      create: [
        {
          type: 'BOOLEAN',
          text: 'Water boils at 100°C at sea level.',
          order: 0,
          correctBoolean: true,
        },
        {
          type: 'INPUT',
          text: 'What planet is known as the Red Planet?',
          order: 1,
          correctText: 'Mars',
        },
        {
          type: 'CHECKBOX',
          text: 'Which of the following are noble gases?',
          order: 2,
          options: {
            create: [
              { text: 'Helium', isCorrect: true, order: 0 },
              { text: 'Neon', isCorrect: true, order: 1 },
              { text: 'Oxygen', isCorrect: false, order: 2 },
              { text: 'Nitrogen', isCorrect: false, order: 3 },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'Web Development',
    questions: {
      create: [
        {
          type: 'BOOLEAN',
          text: 'HTML is a programming language.',
          order: 0,
          correctBoolean: false,
        },
        {
          type: 'INPUT',
          text: 'What does CSS stand for?',
          order: 1,
          correctText: 'Cascading Style Sheets',
        },
        {
          type: 'CHECKBOX',
          text: 'Which of the following are JavaScript frameworks/libraries?',
          order: 2,
          options: {
            create: [
              { text: 'React', isCorrect: true, order: 0 },
              { text: 'Vue', isCorrect: true, order: 1 },
              { text: 'Django', isCorrect: false, order: 2 },
              { text: 'Angular', isCorrect: true, order: 3 },
            ],
          },
        },
      ],
    },
  },
  {
    title: 'World Geography',
    questions: {
      create: [
        {
          type: 'BOOLEAN',
          text: 'Australia is both a country and a continent.',
          order: 0,
          correctBoolean: true,
        },
        {
          type: 'INPUT',
          text: 'What is the longest river in the world?',
          order: 1,
          correctText: 'Nile',
        },
        {
          type: 'CHECKBOX',
          text: 'Which of the following countries are in South America?',
          order: 2,
          options: {
            create: [
              { text: 'Brazil', isCorrect: true, order: 0 },
              { text: 'Argentina', isCorrect: true, order: 1 },
              { text: 'Mexico', isCorrect: false, order: 2 },
              { text: 'Canada', isCorrect: false, order: 3 },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  const existing = await prisma.quiz.count();
  if (existing > 0) {
    console.log(`Skipping seed: ${existing} quiz(zes) already exist.`);
    return;
  }

  for (const quiz of quizzes) {
    await prisma.quiz.create({ data: quiz });
  }

  console.log(`Seeded ${quizzes.length} sample quizzes.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
