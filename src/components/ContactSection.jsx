import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export default function ContactSection({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2';
  return (
    <section id="contact" className="contact-section">
      <div className="container-width contact-grid">
        <div><p className="eyebrow">A project, a role, or a good question</p><Heading className="contact-title">Let’s talk.</Heading></div>
        <div>
          <p className="text-sm leading-relaxed mb-7 max-w-sm">Working on something in computer vision or AI? I’d like to hear what you’re building.</p>
          <a href={`mailto:${profile.email}`} className="contact-address"><span>{profile.email}</span><ArrowUpRight size={22} aria-hidden="true" /></a>
          <div className="flex items-center justify-between mt-7 gap-4"><span className="eyebrow">Global / Remote</span><a href={profile.github} className="text-link">Find me on GitHub <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </div>
    </section>
  );
}
