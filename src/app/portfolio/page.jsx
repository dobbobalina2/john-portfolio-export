import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { aiProjects, engineeringProjects } from '@/lib/portfolio';

export const metadata = { title: 'AI / ML & Software Work', description: 'Computer vision, DINOv2 image representations, VideoMAE and V-JEPA2 research, cross-view retrieval, and production software by John Kenny.' };

export default function Portfolio() {
  return (
    <><Navbar /><main id="main-content">
      <section className="page-header">
        <div className="container-width">
          <p className="eyebrow">Selected work / Engineering notes</p>
          <h1 className="page-title">A closer look<br />at the work<span className="text-primary">.</span></h1>
          <p className="page-deck">The data, the modeling decisions, and what the evaluations actually establish.</p>
          <nav aria-label="Project index" className="project-index">{aiProjects.map((project) => <a key={project.id} href={`#${project.id}`}>{project.number} / {project.category.split(' · ').pop()}</a>)}<a href="#software">05 / Software</a></nav>
        </div>
      </section>
      <section aria-label="AI and machine learning projects" className="pb-12">
        <div className="container-width">
          {aiProjects.map((project) => (
            <article id={project.id} key={project.id} className="project-detail">
              <span className="project-detail-number" aria-hidden="true">{project.number}</span>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3"><p className="eyebrow">{project.category}</p><p className="project-status">{project.status}</p></div>
                <h2 className="project-detail-title">{project.title}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mt-5">{project.description}</p>
                <div className="project-prose"><div><h3>Approach</h3><p>{project.approach}</p></div><div><h3>Result & decision</h3><p>{project.result}</p></div></div>
                <div className="project-scope"><h3 className="eyebrow mb-2">Evaluation scope</h3><p>{project.scope}</p></div>
                <p className="project-tags">{project.tags.join(' / ')}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="software" className="software-section">
        <div className="container-width">
          <p className="eyebrow mb-5">05 / Production software</p><h2 className="section-title">Before & beyond AI.</h2>
          <p className="page-deck mt-6">Cloud systems, user-facing applications, and financial infrastructure.</p>
          <div className="software-grid">{engineeringProjects.map((project) => <article key={project.title} className="software-item"><p className="eyebrow">{project.company}</p><h3>{project.title}</h3><p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{project.description}</p><p className="project-tags">{project.tags.join(' / ')}</p></article>)}</div>
          <div className="mt-16 border-t border-black/20 pt-8"><h3 className="eyebrow mb-4">Open-source & interface work</h3><div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="https://github.com/dobbobalina2/Google_OAuth_Zk_AA_Demo" className="text-link">Google OAuth ZK wallet demo <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://github.com/dobbobalina2/useropV07.js" className="text-link">useropV07.js <ArrowUpRight aria-hidden="true" /></a>
            <Link href="/portfolio/project" className="text-link">NFT marketplace UI demo <ArrowUpRight aria-hidden="true" /></Link>
          </div></div>
        </div>
      </section>
      <ContactSection />
    </main><Footer /></>
  );
}
