import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding border-y border-black/10 bg-white/55">
      <div className="container-width grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
        <div>
          <p className="eyebrow mb-5">Engineering across the full system</p>
          <h2 className="text-4xl md:text-5xl font-semibold">Models are one<br />part of the work.</h2>
          <Link href="/about" className="inline-flex gap-2 items-center mt-7 text-primary font-semibold">My background <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">I work from the dataset through the application: creating labels, building training and evaluation pipelines, and connecting model outputs to usable software.</p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">My background in full-stack systems, cloud infrastructure, and fintech shapes how I approach AI. I care about repeatable experiments, reliable data, and knowing when a model is ready to use.</p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-7">
            <div><p className="text-3xl font-semibold">7+ years</p><p className="text-sm text-muted-foreground mt-2">Building production systems</p></div>
            <div><p className="text-3xl font-semibold">Data → product</p><p className="text-sm text-muted-foreground mt-2">Computer vision & full-stack delivery</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
