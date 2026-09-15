import QuizForm from '@/components/QuizForm/QuizForm';
import { displayFont, bodyFont } from '@/styles/fonts';
import tokens from '@/styles/tokens.module.css';
import styles from './page.module.css';

export default function CreateQuizPage() {
  return (
    <main
      className={`${tokens.tokens} ${tokens.page} ${displayFont.variable} ${bodyFont.variable}`}
    >
      <h1 className={styles.heading}>Create Quiz</h1>
      <QuizForm />
    </main>
  );
}
