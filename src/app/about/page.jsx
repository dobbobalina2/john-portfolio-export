import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { experiences, profile, skills } from '@/lib/portfolio';

export const metadata = { title: 'Experience', description: 'John Kenny’s experience across computer vision, AI/ML, full-stack engineering, fintech, and blockchain.' };

export default function About() {
  return (
    <><Navbar /><main id="main-content">
      <section className="page-header">
        <div className="container-width">
          <p className="eyebrow">Background / 2019—Present</p>
          <h1 className="page-title">A little<br />about me<span className="text-primary">.</span></h1>
          <div className="about-grid mt-12"><p className="about-body">An AI/ML engineer with a software engineer’s instincts.</p><div><p className="text-muted-foreground leading-relaxed">{profile.summary}</p><div className="flex flex-wrap gap-7 mt-6"><a href={profile.resume} download className="text-link">Resume (DOCX) <Download size={17} aria-hidden="true" /></a><Link href="/portfolio" className="text-link">Explore the work <ArrowUpRight aria-hidden="true" /></Link></div></div></div>
        </div>
      </section>
      <section className="pb-20" aria-labelledby="experience-heading">
        <div className="container-width">
          <h2 id="experience-heading" className="eyebrow mb-8">Where I’ve worked</h2>
          <div>{experiences.map((experience) => <article key={experience.company} className="experience-row"><div><p className="eyebrow text-muted-foreground">{experience.period}</p><h3>{experience.company}</h3><p className="text-xs text-muted-foreground">{experience.location}</p></div><div><p className="text-lg font-medium mb-4">{experience.role}</p><ul className="list-disc pl-5 space-y-3 text-sm text-muted-foreground leading-relaxed">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </div>
      </section>
      <section className="software-section" aria-labelledby="skills-heading"><div className="container-width"><p className="eyebrow mb-5">Tools & methods</p><h2 id="skills-heading" className="section-title mb-12">What I work with.</h2>{skills.map((group) => <div key={group.title} className="skill-group"><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></div>)}</div></section>
      <ContactSection />
    </main><Footer /></>
  );
}
