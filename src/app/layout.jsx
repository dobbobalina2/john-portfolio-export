import { Space_Grotesk, Fraunces } from 'next/font/google';
import './globals.css';
import Background from '@/components/Background';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'John Kenny | Senior Software Engineer',
  description: 'Portfolio website of John Kenny, Senior Software Engineer with expertise in React, TypeScript, Web3, and modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Background />
        {children}
      </body>
    </html>
  );
}
