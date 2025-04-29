import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'John Kenny | Senior Software Engineer',
  description: 'Portfolio website of John Kenny, Senior Software Engineer with expertise in React, TypeScript, Web3, and modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  );
}
