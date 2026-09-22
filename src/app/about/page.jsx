import Link from 'next/link';
import { Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { experiences, profile, skills } from '@/lib/portfolio';

export const metadata = { title: 'Experience', description: 'John Kenny’s experience across computer vision, AI/ML, full-stack engineering, fintech, and blockchain.' };

export default function About() {
  return (
    <><Navbar /><main id="main-content" className="pt-16">
      <section className="section-padding">
        <div className="container-width">
          <p className="eyebrow mb-5">About / Experience</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold max-w-3xl mb-7">AI engineering, built on a software foundation.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{profile.summary}</p>
          <div className="flex flex-wrap gap-4 mt-8"><a href={profile.resume} download className="btn btn-primary gap-2"><Download size={17} aria-hidden="true" /> Download resume (DOCX)</a><Link href="/portfolio" className="btn btn-outline">Explore projects</Link></div>
        </div>
      </section>
      <section className="pb-20" aria-labelledby="experience-heading">
        <div className="container-width">
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-semibold mb-10">Professional experience</h2>
          <div className="divide-y divide-black/10">
            {experiences.map((experience) => (
              <article key={experience.company} className="py-9 grid md:grid-cols-[1fr_2fr] gap-5 md:gap-12">
                <div><p className="text-sm text-muted-foreground">{experience.period}</p><h3 className="text-2xl font-semibold mt-2">{experience.company}</h3><p className="text-sm text-muted-foreground mt-2">{experience.location}</p></div>
                <div><p className="text-lg font-semibold mb-4">{experience.role}</p><ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-black/10 bg-white/55" aria-labelledby="skills-heading">
        <div className="container-width">
          <p className="eyebrow mb-5">Tools & methods</p><h2 id="skills-heading" className="text-3xl md:text-4xl font-semibold mb-10">Across the stack</h2>
          <div className="grid md:grid-cols-2 gap-9">{skills.map((group) => <div key={group.title}><h3 className="text-xl font-semibold mb-4">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="border border-black/10 bg-white/75 rounded-full px-3 py-2 text-sm">{skill}</span>)}</div></div>)}</div>
        </div>
      </section>
    </main><Footer /></>
  );
}
