import Link from 'next/link';
import { displayFont, bodyFont } from '@/styles/fonts';
import tokens from '@/styles/tokens.module.css';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header
      className={`${tokens.tokens} ${displayFont.variable} ${bodyFont.variable} ${styles.header}`}
    >
      <Link href="/quizzes" className={styles.brand}>
        Quiz Builder
      </Link>
      <nav className={styles.nav}>
        <Link href="/quizzes" className={styles.navLink}>
          Quizzes
        </Link>
        <Link href="/create" className={styles.createLink}>
          + Create Quiz
        </Link>
      </nav>
    </header>
  );
}
