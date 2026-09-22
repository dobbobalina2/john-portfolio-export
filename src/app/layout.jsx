import { Space_Grotesk, Fraunces } from 'next/font/google';
import './globals.css';
import Background from '@/components/Background';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  metadataBase: new URL('https://portfolio-lilac-ten-34.vercel.app'),
  title: { default: 'John Kenny | Senior AI / Machine Learning Engineer', template: '%s | John Kenny' },
  description: 'John Kenny builds computer vision and AI systems: detection, segmentation, tracking, image and video representations, and production software.',
  openGraph: {
    title: 'John Kenny | AI / ML Engineer',
    description: 'Computer vision, image and video models, and the software that makes them useful.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Background />
        {children}
      </body>
    </html>
  );
}
