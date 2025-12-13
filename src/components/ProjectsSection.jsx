'use client';

import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Web3 Minting Platform',
    description:
      'High-volume minting flow with analytics, generating $100k+ revenue and orchestrated smart-contract releases.',
    tags: ['TypeScript', 'React', 'Web3.js', 'Vercel'],
    company: 'Consortium 9',
  },
  {
    title: 'Single Sign-in Wallet',
    description:
      'Account abstraction wallet for gamers with zk-proof verification, improving retention by 15%.',
    tags: ['Nest.js', 'MongoDB', 'Solidity', 'React'],
    company: 'Consortium 9',
  },
  {
    title: 'High-Performance Leaderboard',
    description:
      'Event-driven leaderboard on AWS with Redis caching, achieving 35% faster read/write throughput.',
    tags: ['AWS', 'Redis', 'MongoDB', 'Lambda'],
    company: 'Consortium 9',
  },
  {
    title: 'Frontend Rebuild',
    description: 'Design-accurate rebuild with smart contract integrations to accelerate delivery by 21%.',
    tags: ['Next.js', 'Nest.js', 'GraphQL', 'Web3.js'],
    company: 'Soundverse',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Selected work</p>
            <h2 className="text-4xl font-bold">Projects that blend craft with outcomes.</h2>
            <p className="text-white/70 max-w-2xl">
              A sample of builds across fintech, gaming, and blockchain — engineered for scalability, velocity, and delightful UX.
            </p>
          </div>
          <a href="/portfolio" className="btn btn-secondary text-dark">
            View full portfolio
            <ArrowUpRightIcon className="ml-2 h-5 w-5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-white/60">{project.company}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">{index + 1}</div>
              </div>

              <p className="text-white/70 mb-5 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Impact-focused delivery</span>
                <ArrowUpRightIcon className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="panel p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Availability</p>
            <h3 className="text-2xl font-semibold">Building your next flagship experience</h3>
            <p className="text-white/70">Let’s design systems that are fast, intuitive, and ready for scale.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="btn btn-primary">
              Start a project
            </a>
            <a href="/about" className="btn btn-outline border-white/20">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
