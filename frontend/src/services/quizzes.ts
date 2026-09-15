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

export interface QuizSummary {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  questionCount: number;
}

// Server-side code  runs inside the Next.js container/process, so it needs a URL reachable from there
const API_URL =
  typeof window === 'undefined'
    ? (process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000')
    : (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000');

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

export async function listQuizzes(): Promise<QuizSummary[]> {
  const res = await fetch(`${API_URL}/quizzes`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to load quizzes');
  }

  return res.json();
}

export async function getQuiz(id: string): Promise<Quiz | null> {
  const res = await fetch(`${API_URL}/quizzes/${id}`, { cache: 'no-store' });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to load quiz');
  }

  return res.json();
}

export async function deleteQuiz(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/quizzes/${id}`, { method: 'DELETE' });

  if (!res.ok && res.status !== 404) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? 'Failed to delete quiz');
  }
}
