import { Router } from 'express';
import { createQuizHandler } from './quiz.controller';
import { validateBody } from './middleware/validateBody';
import { createQuizSchema } from './schemas/quiz.schema';

const router = Router();

router.post('/', validateBody(createQuizSchema), createQuizHandler);

export default router;
