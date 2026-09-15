import { Request, Response } from 'express';
import { createQuiz, deleteQuiz, getQuizById, listQuizzes } from './quiz.service';
import { CreateQuizInput } from './schemas/quiz.schema';

export async function createQuizHandler(req: Request, res: Response) {
  const quiz = await createQuiz(req.body as CreateQuizInput);
  res.status(201).json(quiz);
}

export async function listQuizzesHandler(_req: Request, res: Response) {
  const quizzes = await listQuizzes();
  res.json(quizzes);
}

export async function getQuizHandler(req: Request<{ id: string }>, res: Response) {
  const quiz = await getQuizById(req.params.id);
  if (!quiz) {
    res.status(404).json({ error: 'Quiz not found' });
    return;
  }
  res.json(quiz);
}

export async function deleteQuizHandler(req: Request<{ id: string }>, res: Response) {
  const deleted = await deleteQuiz(req.params.id);
  if (!deleted) {
    res.status(404).json({ error: 'Quiz not found' });
    return;
  }
  res.status(204).send();
}
