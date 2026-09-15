import { notFound } from 'next/navigation';
import { getQuiz } from '@/services/quizzes';
import QuestionView from '@/components/QuestionView/QuestionView';
import { displayFont, bodyFont } from '@/styles/fonts';
import tokens from '@/styles/tokens.module.css';
import styles from './page.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function QuizDetailPage({ params }: Props) {
  const { id } = await params;
  const quiz = await getQuiz(id);

  if (!quiz) {
    notFound();
  }

  return (
    <main
      className={`${tokens.tokens} ${tokens.page} ${displayFont.variable} ${bodyFont.variable}`}
    >
      <h1 className={styles.heading}>{quiz.title}</h1>
      <ul className={styles.questions}>
        {quiz.questions.map((question, index) => (
          <QuestionView key={question.id} index={index} question={question} />
        ))}
      </ul>
    </main>
  );
}
