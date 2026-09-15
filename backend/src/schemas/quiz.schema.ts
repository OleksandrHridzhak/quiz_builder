import { z } from 'zod';
import { QuestionType } from '../generated/prisma/enums';

const optionSchema = z.object({
  text: z.string().trim().min(1, 'text is required'),
  isCorrect: z.boolean(),
});

const booleanQuestionSchema = z.object({
  type: z.literal(QuestionType.BOOLEAN),
  text: z.string().trim().min(1, 'text is required'),
  correctBoolean: z.boolean(),
});

const inputQuestionSchema = z.object({
  type: z.literal(QuestionType.INPUT),
  text: z.string().trim().min(1, 'text is required'),
  correctText: z.string().trim().min(1, 'correctText is required'),
});

const checkboxQuestionSchema = z.object({
  type: z.literal(QuestionType.CHECKBOX),
  text: z.string().trim().min(1, 'text is required'),
  options: z
    .array(optionSchema)
    .min(1, 'options must be a non-empty array')
    .refine((options) => options.some((option) => option.isCorrect), {
      message: 'options must include at least one correct option',
    }),
});

const questionSchema = z.discriminatedUnion('type', [
  booleanQuestionSchema,
  inputQuestionSchema,
  checkboxQuestionSchema,
]);

export const createQuizSchema = z.object({
  title: z.string().trim().min(1, 'title is required'),
  questions: z.array(questionSchema).min(1, 'questions must be a non-empty array'),
});

export type CreateQuizInput = z.infer<typeof createQuizSchema>;
