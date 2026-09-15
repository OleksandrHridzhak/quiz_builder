'use client';

import { useId, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuestionEditor, { EditableQuestion } from '../QuestionEditor/QuestionEditor';
import { createQuiz, QuestionPayload } from '@/services/quizzes';
import styles from './QuizForm.module.css';

function emptyQuestion(id: string): EditableQuestion {
  return {
    id,
    type: 'BOOLEAN',
    text: '',
    correctBoolean: true,
    correctText: '',
    options: [],
  };
}

function toPayload(question: EditableQuestion): QuestionPayload {
  if (question.type === 'BOOLEAN') {
    return { type: 'BOOLEAN', text: question.text, correctBoolean: question.correctBoolean };
  }
  if (question.type === 'INPUT') {
    return { type: 'INPUT', text: question.text, correctText: question.correctText };
  }
  return {
    type: 'CHECKBOX',
    text: question.text,
    options: question.options.map(({ text, isCorrect }) => ({ text, isCorrect })),
  };
}

function validate(title: string, questions: EditableQuestion[]): string | null {
  if (!title.trim()) return 'Quiz title is required';
  if (questions.length === 0) return 'Add at least one question';

  for (const [index, question] of questions.entries()) {
    if (!question.text.trim()) return `Question ${index + 1}: text is required`;
    if (question.type === 'INPUT' && !question.correctText.trim()) {
      return `Question ${index + 1}: correct answer is required`;
    }
    if (question.type === 'CHECKBOX') {
      if (question.options.some((option) => !option.text.trim())) {
        return `Question ${index + 1}: all options need text`;
      }
      if (!question.options.some((option) => option.isCorrect)) {
        return `Question ${index + 1}: mark at least one option as correct`;
      }
    }
  }

  return null;
}

export default function QuizForm() {
  const router = useRouter();
  const baseId = useId();
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<EditableQuestion[]>(() => [
    emptyQuestion(`${baseId}-0`),
  ]);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function updateQuestion(id: string, updated: EditableQuestion) {
    setQuestions((prev) => prev.map((q) => (q.id === id ? updated : q)));
  }

  function removeQuestion(id: string) {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationError = validate(title, questions);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      await createQuiz({ title, questions: questions.map(toPayload) });
      router.push('/quizzes');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create quiz');
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.titleField}>
        <span>Quiz title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. General Knowledge"
          required
        />
      </label>

      <div className={styles.questions}>
        {questions.map((question, index) => (
          <QuestionEditor
            key={question.id}
            index={index}
            question={question}
            onChange={(updated) => updateQuestion(question.id, updated)}
            onRemove={() => removeQuestion(question.id)}
            canRemove={questions.length > 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setQuestions((prev) => [...prev, emptyQuestion(crypto.randomUUID())])}
        className={styles.addQuestionButton}
      >
        + Add question
      </button>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" disabled={submitting} className={styles.submitButton}>
        {submitting ? 'Creating…' : 'Create quiz'}
      </button>
    </form>
  );
}
