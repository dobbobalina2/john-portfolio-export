import Link from 'next/link';
import { profile } from '@/lib/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-width footer-inner">
        <p className="eyebrow">John Kenny / Engineering & research</p>
        <nav className="footer-links" aria-label="Footer"><Link href="/portfolio">Work</Link><Link href="/about">Experience</Link><a href={profile.resume} download>Resume (DOCX)</a><a href={profile.github}>GitHub</a><Link href="/contact">Contact</Link></nav>
      </div>
    </footer>
  );
}
