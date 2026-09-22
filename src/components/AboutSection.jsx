import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width about-grid">
        <div><p className="eyebrow mb-5">A bit of background</p><h2 className="section-title">Engineer first.<br />Always curious.</h2><Link href="/about" className="text-link mt-7">The longer story <ArrowUpRight aria-hidden="true" /></Link></div>
        <div>
          <p className="about-body">I’m as interested in the data behind a model as the product around it. My work moves between computer vision, experiments, backend systems, and interfaces.</p>
          <p className="mt-5 text-muted-foreground leading-relaxed">Before image and video models, I built cloud systems, financial infrastructure, and full-stack applications. That background still shapes how I build: understand the problem, test the assumptions, and make the whole thing work.</p>
          <div className="about-facts"><div><strong>7+ years</strong><p className="eyebrow">Production engineering</p></div><div><strong>Data → product</strong><p className="eyebrow">Across the stack</p></div></div>
        </div>
      </div>
    </section>
  );
}
