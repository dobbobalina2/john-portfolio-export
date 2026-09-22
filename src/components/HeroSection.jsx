import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Download } from 'lucide-react';
import { profile } from '@/lib/portfolio';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-width">
        <p className="eyebrow mb-7">{profile.title}</p>
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.06]">
              From pixels to<br /><span className="text-primary">working AI systems.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn btn-primary gap-2">Explore my work <ArrowRight size={17} aria-hidden="true" /></Link>
              <a href={profile.resume} download className="btn btn-outline gap-2"><Download size={17} aria-hidden="true" /> Resume <span className="text-xs text-muted-foreground">DOCX</span></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span>Python & PyTorch</span><span>Image & video models</span><span>Production software</span>
            </div>
          </div>
          <aside className="surface-strong rounded-3xl p-7 sm:p-9" aria-label="Current research focus">
            <div className="flex items-center justify-between gap-4 mb-7">
              <span className="eyebrow">Current focus</span>
              <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs text-blue-800">Prospex</span>
            </div>
            <h2 className="text-3xl font-semibold mb-3">Learning from<br />football film.</h2>
            <p className="text-muted-foreground leading-relaxed">Image representations, video encoders, and evaluation grounded in reviewed data.</p>
            <ol className="mt-8 divide-y divide-black/10">
              {[
                ['01', 'Build the evidence', 'Reviewed labels · paired camera views'],
                ['02', 'Compare representations', 'DINOv2 · VideoMAE · V-JEPA2'],
                ['03', 'Test generalization', 'Held-out games · temporal controls'],
              ].map(([number, title, detail]) => (
                <li key={number} className="flex gap-4 py-5">
                  <span className="text-xs font-mono text-primary pt-1">{number}</span>
                  <div><p className="font-semibold">{title}</p><p className="text-sm text-muted-foreground mt-1">{detail}</p></div>
                </li>
              ))}
            </ol>
            <Link href="/portfolio#image-representations" className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-3">Read the engineering notes <ArrowDownRight size={17} aria-hidden="true" /></Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
