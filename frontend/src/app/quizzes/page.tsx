import QuizList from '@/components/QuizList/QuizList';
import { displayFont, bodyFont } from '@/styles/fonts';
import tokens from '@/styles/tokens.module.css';
import styles from './page.module.css';

export default function QuizzesPage() {
  return (
    <main
      className={`${tokens.tokens} ${tokens.page} ${displayFont.variable} ${bodyFont.variable}`}
    >
      <h1 className={styles.heading}>Quizzes</h1>
      <QuizList />
    </main>
  );
}
