import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export default function ContactSection({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2';
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="surface-strong rounded-3xl p-7 sm:p-12 grid md:grid-cols-[1.25fr_1fr] gap-10 items-center">
          <div>
            <p className="eyebrow mb-5">Get in touch</p>
            <Heading className="text-4xl md:text-5xl font-semibold mb-5">Let’s put your<br />data to work.</Heading>
            <p className="text-lg text-muted-foreground leading-relaxed">Have a computer vision problem, an AI product to build, or a role to discuss? Tell me about the data, the use case, and what success looks like.</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-3">Global / Remote</p>
            <a href={`mailto:${profile.email}`} className="text-base sm:text-lg font-semibold break-words hover:text-primary">{profile.email}</a>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary gap-2"><Mail size={17} aria-hidden="true" /> Email John</a>
              <a href={profile.github} className="btn btn-outline gap-2">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Email opens in your mail app.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
