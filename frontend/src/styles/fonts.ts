import { Inter, Manrope } from 'next/font/google';

// design.md specifies Mark Pro (display) + Eina01 (body), both proprietary.
// These are the doc's own documented free substitutes.
export const displayFont = Inter({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-display',
});
export const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});
