import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { aiProjects, engineeringProjects } from '@/lib/portfolio';

export const metadata = { title: 'AI / ML & Software Work', description: 'Computer vision, DINOv2 image representations, VideoMAE and V-JEPA2 research, cross-view retrieval, and production software by John Kenny.' };

export default function Portfolio() {
  return (
    <><Navbar /><main id="main-content" className="pt-16">
      <section className="section-padding pb-12 md:pb-16">
        <div className="container-width">
          <p className="eyebrow mb-5">Portfolio / Engineering notes</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-7 max-w-3xl">Building with image<br />and video models.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">A closer look at my computer vision work: the data, the modeling decisions, and what the evaluations actually establish.</p>
          <nav aria-label="Project index" className="flex flex-wrap gap-3 mt-8">{aiProjects.map((project) => <a key={project.id} href={`#${project.id}`} className="rounded-full border border-black/15 bg-white/75 px-4 py-2 text-sm hover:border-primary hover:text-primary">{project.number} · {project.category.split(' · ').pop()}</a>)}<a href="#software" className="rounded-full border border-black/15 bg-white/75 px-4 py-2 text-sm hover:text-primary">Software work</a></nav>
        </div>
      </section>
      <section aria-label="AI and machine learning projects" className="pb-20">
        <div className="container-width space-y-8">
          {aiProjects.map((project) => (
            <article id={project.id} key={project.id} className="surface rounded-3xl p-7 sm:p-10 scroll-mt-28">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5"><p className="eyebrow">{project.number} / {project.category}</p><p className="text-xs font-semibold text-blue-800 rounded-full px-3 py-1.5 bg-blue-50 border border-blue-100">{project.status}</p></div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">{project.title}</h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{project.description}</p>
              <div className="grid md:grid-cols-2 gap-7 md:gap-10 mt-8">
                <div><h3 className="text-lg font-semibold mb-3">Approach</h3><p className="text-muted-foreground leading-relaxed">{project.approach}</p></div>
                <div><h3 className="text-lg font-semibold mb-3">Result & decision</h3><p className="text-muted-foreground leading-relaxed">{project.result}</p></div>
              </div>
              <div className="mt-7 border-l-2 border-blue-300 pl-5"><h3 className="text-sm font-semibold mb-2">Evaluation scope</h3><p className="text-sm text-muted-foreground leading-relaxed">{project.scope}</p></div>
              <div className="flex flex-wrap gap-2 mt-7">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/80 border border-black/10 text-xs px-3 py-1.5">{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
      <section id="software" className="section-padding bg-white/55 border-t border-black/10 scroll-mt-20">
        <div className="container-width">
          <p className="eyebrow mb-5">Production software</p><h2 className="text-3xl md:text-4xl font-semibold mb-5">The engineering foundation.</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">Selected work across cloud systems, user-facing applications, and financial infrastructure.</p>
          <div className="grid md:grid-cols-2 gap-6">{engineeringProjects.map((project) => <article key={project.title} className="rounded-2xl border border-black/10 bg-white/75 p-7"><p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{project.company}</p><h3 className="text-2xl font-semibold mb-4">{project.title}</h3><p className="text-muted-foreground leading-relaxed">{project.description}</p><p className="text-xs text-muted-foreground mt-6">{project.tags.join(' / ')}</p></article>)}</div>
          <div className="mt-10 border-t border-black/10 pt-8"><h3 className="text-2xl font-semibold mb-4">Open-source & interface work</h3><div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
            <a href="https://github.com/dobbobalina2/Google_OAuth_Zk_AA_Demo" className="inline-flex gap-2 items-center hover:text-primary">Google OAuth ZK wallet demo <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="https://github.com/dobbobalina2/useropV07.js" className="inline-flex gap-2 items-center hover:text-primary">useropV07.js <ArrowUpRight size={16} aria-hidden="true" /></a>
            <Link href="/portfolio/project" className="inline-flex gap-2 items-center hover:text-primary">NFT marketplace UI demo <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div></div>
          <Link href="/about" className="btn btn-outline mt-10">Full career history</Link>
        </div>
      </section>
    </main><Footer /></>
  );
}
