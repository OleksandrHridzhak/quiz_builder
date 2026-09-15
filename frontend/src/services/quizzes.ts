export type QuestionType = 'BOOLEAN' | 'INPUT' | 'CHECKBOX';

export interface OptionPayload {
  text: string;
  isCorrect: boolean;
}

export interface QuestionPayload {
  type: QuestionType;
  text: string;
  correctBoolean?: boolean;
  correctText?: string;
  options?: OptionPayload[];
}

export interface CreateQuizPayload {
  title: string;
  questions: QuestionPayload[];
}

export interface Quiz {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  questions: Array<{
    id: string;
    type: QuestionType;
    text: string;
    order: number;
    correctBoolean: boolean | null;
    correctText: string | null;
    options: Array<{ id: string; text: string; isCorrect: boolean; order: number }>;
  }>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export async function createQuiz(payload: CreateQuizPayload): Promise<Quiz> {
  const res = await fetch(`${API_URL}/quizzes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? 'Failed to create quiz');
  }

  return res.json();
}
