import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

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
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="bg-background text-foreground">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
