import Link from 'next/link';
import { profile } from '@/lib/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/60">
      <div className="container-width py-10 flex flex-col md:flex-row md:items-center justify-between gap-7">
        <div><p className="font-heading text-xl font-semibold">{profile.name}</p><p className="text-sm text-muted-foreground mt-2">AI / ML engineering · Computer vision · Production software</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/portfolio" className="hover:text-primary">Work</Link>
          <Link href="/about" className="hover:text-primary">Experience</Link>
          <a href={profile.resume} download className="hover:text-primary">Resume (DOCX)</a>
          <a href={profile.github} className="hover:text-primary">GitHub</a>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
