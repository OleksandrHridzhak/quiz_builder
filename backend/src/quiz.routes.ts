import { Router } from 'express';
import {
  createQuizHandler,
  deleteQuizHandler,
  getQuizHandler,
  listQuizzesHandler,
} from './quiz.controller';
import { validateBody } from './middleware/validateBody';
import { createQuizSchema } from './schemas/quiz.schema';

const router = Router();

router.post('/', validateBody(createQuizSchema), createQuizHandler);
router.get('/', listQuizzesHandler);
router.get('/:id', getQuizHandler);
router.delete('/:id', deleteQuizHandler);

export default router;
