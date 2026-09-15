import { Quiz } from '@/services/quizzes';
import styles from './QuestionView.module.css';

const TYPE_LABEL = {
  BOOLEAN: 'True / False',
  INPUT: 'Short answer',
  CHECKBOX: 'Multiple choice',
} as const;

interface QuestionViewProps {
  index: number;
  question: Quiz['questions'][number];
}

export default function QuestionView({ index, question }: QuestionViewProps) {
  return (
    <li className={styles.question}>
      <div className={styles.header}>
        <span className={styles.badge}>Question {index + 1}</span>
        <span className={styles.typeTag}>{TYPE_LABEL[question.type]}</span>
      </div>

      <p className={styles.text}>{question.text}</p>

      {question.type === 'BOOLEAN' && (
        <div className={styles.pillRow}>
          <span className={question.correctBoolean ? styles.pillCorrect : styles.pill}>True</span>
          <span className={question.correctBoolean === false ? styles.pillCorrect : styles.pill}>
            False
          </span>
        </div>
      )}

      {question.type === 'INPUT' && <div className={styles.answerBox}>{question.correctText}</div>}

      {question.type === 'CHECKBOX' && (
        <ul className={styles.options}>
          {question.options.map((option) => (
            <li key={option.id} className={option.isCorrect ? styles.optionCorrect : styles.option}>
              <span className={styles.optionMark}>{option.isCorrect ? '✓' : ''}</span>
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
