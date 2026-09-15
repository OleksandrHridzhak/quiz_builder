import { prisma } from './lib/prisma';
import { QuestionType } from './generated/prisma/enums';
import { CreateQuizInput } from './schemas/quiz.schema';

export async function listQuizzes() {
  const quizzes = await prisma.quiz.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { questions: true } } },
  });

  return quizzes.map(({ _count, ...quiz }) => ({
    ...quiz,
    questionCount: _count.questions,
  }));
}

export async function getQuizById(id: string) {
  return prisma.quiz.findUnique({
    where: { id },
    include: {
      questions: {
        include: { options: true },
        orderBy: { order: 'asc' },
      },
    },
  });
}

export async function deleteQuiz(id: string) {
  const { count } = await prisma.quiz.deleteMany({ where: { id } });
  return count > 0;
}

export async function createQuiz(input: CreateQuizInput) {
  const { title, questions } = input;

  return prisma.quiz.create({
    data: {
      title,
      questions: {
        create: questions.map((question, index) => ({
          type: question.type,
          text: question.text,
          order: index,
          correctBoolean:
            question.type === QuestionType.BOOLEAN ? question.correctBoolean : undefined,
          correctText: question.type === QuestionType.INPUT ? question.correctText : undefined,
          options:
            question.type === QuestionType.CHECKBOX
              ? {
                  create: question.options.map((option, optionIndex) => ({
                    text: option.text,
                    isCorrect: option.isCorrect,
                    order: optionIndex,
                  })),
                }
              : undefined,
        })),
      },
    },
    include: {
      questions: {
        include: { options: true },
        orderBy: { order: 'asc' },
      },
    },
  });
}
