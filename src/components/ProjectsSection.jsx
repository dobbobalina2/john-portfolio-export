import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { aiProjects } from '@/lib/portfolio';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <p className="eyebrow mb-5">Selected AI / ML work</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-5">Image, video & evaluation.</h2>
            <p className="text-lg text-muted-foreground">Recent computer vision work, with the approach, result, and current status of each project.</p>
          </div>
          <Link href="/portfolio" className="inline-flex gap-2 items-center font-semibold text-primary shrink-0">All work <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {aiProjects.map((project) => (
            <article key={project.id} className="surface rounded-3xl p-7 sm:p-8 flex flex-col">
              <div className="flex justify-between gap-4 text-xs text-muted-foreground mb-6"><span className="uppercase tracking-widest">{project.category}</span><span className="font-mono">{project.number}</span></div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4"><Link href={`/portfolio#${project.id}`} className="hover:text-primary transition-colors">{project.title}</Link></h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              <p className="text-xs font-semibold text-blue-800 mb-5">{project.status}</p>
              <div className="flex flex-wrap gap-2 mb-7">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/75 border border-black/10 text-xs px-3 py-1.5">{tag}</span>)}</div>
              <Link href={`/portfolio#${project.id}`} className="mt-auto pt-5 border-t border-black/10 inline-flex items-center justify-between font-semibold text-sm">Read project notes <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only">: {project.title}</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
