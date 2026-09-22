import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container-width">
        <div className="hero-topline eyebrow"><span>Independent engineer / AI & ML</span><span>Global · Remote</span></div>
        <h1 className="hero-name"><span>JOHN</span><span>KENNY</span></h1>
        <div className="hero-rule" aria-hidden="true" />
        <div className="hero-intro">
          <h2 className="hero-description">Computer vision.<br />Image & video models.<br />Production software.</h2>
          <div>
            <p className="hero-note">I build systems that work with images and video, from the first labeled frame to the application people use.</p>
            <div className="hero-now">
              <p className="eyebrow text-primary mb-2">Currently exploring / Prospex</p>
              <p className="text-sm leading-relaxed">What can image and video models learn from football film?</p>
              <Link href="/portfolio#image-representations" className="text-link mt-2">Inside the work <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <a href="#projects" className="hero-bottom eyebrow"><span>Selected work / 01—04</span><span className="flex items-center gap-3">Keep scrolling <ArrowDown size={17} aria-hidden="true" /></span></a>
      </div>
    </section>
  );
}
