import { Request, Response } from 'express';
import { createQuiz } from './quiz.service';
import { CreateQuizInput } from './schemas/quiz.schema';

export async function createQuizHandler(req: Request, res: Response) {
  const quiz = await createQuiz(req.body as CreateQuizInput);
  res.status(201).json(quiz);
}
