import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import { displayFont, bodyFont } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quiz Builder',
  description: 'Create, browse, and view quizzes',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
