import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { aiProjects } from '@/lib/portfolio';

export default function ProjectsSection() {
  return (
    <section id="projects" className="work-section">
      <div className="container-width">
        <div className="section-heading">
          <div><p className="eyebrow mb-5">A few things I’ve been working on</p><h2 className="section-title">Selected work<span className="text-[#ed8969]">.</span></h2></div>
          <Link href="/portfolio" className="text-link">Full project notes <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div>
          {aiProjects.map((project) => (
            <article key={project.id} className="work-row">
              <Link href={`/portfolio#${project.id}`} className="work-row-link">
                <span className="work-number">{project.number}</span>
                <div><h3 className="work-title">{project.title}</h3><p className="work-status">{project.status}</p></div>
                <p className="work-detail">{project.description}</p>
                <ArrowUpRight className="work-arrow" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
