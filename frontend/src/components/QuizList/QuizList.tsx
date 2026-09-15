'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { deleteQuiz, listQuizzes, QuizSummary } from '@/services/quizzes';
import styles from './QuizList.module.css';

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<QuizSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    listQuizzes()
      .then(setQuizzes)
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load quizzes'));
  }, []);

  async function handleDelete(id: string, title: string) {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;

    setDeletingId(id);
    try {
      await deleteQuiz(id);
      setQuizzes((prev) => (prev ? prev.filter((quiz) => quiz.id !== id) : prev));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete quiz');
    } finally {
      setDeletingId(null);
    }
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (quizzes === null) {
    return <p className={styles.status}>Loading quizzes…</p>;
  }

  if (quizzes.length === 0) {
    return (
      <p className={styles.status}>
        No quizzes yet. <Link href="/create">Create one</Link>.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {quizzes.map((quiz) => (
        <li key={quiz.id} className={styles.item}>
          <Link href={`/quizzes/${quiz.id}`} className={styles.link}>
            <span className={styles.title}>{quiz.title}</span>
            <span className={styles.count}>
              {quiz.questionCount} question{quiz.questionCount === 1 ? '' : 's'}
            </span>
          </Link>
          <button
            type="button"
            aria-label={`Delete ${quiz.title}`}
            className={styles.deleteButton}
            disabled={deletingId === quiz.id}
            onClick={() => handleDelete(quiz.id, quiz.title)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}
