'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Experience architecture',
    detail: 'Translate complex requirements into elegant user journeys with resilient design systems.',
  },
  {
    title: 'Engineering rigor',
    detail: 'TypeScript-first workflows, accessibility, and measurable performance baselines.',
  },
  {
    title: 'Delivery at speed',
    detail: 'Lean iterations with observability baked in to keep products reliable and ship-ready.',
  },
];

const stacks = [
  'Next.js',
  'TypeScript',
  'React',
  'Nest.js',
  'Node.js',
  'AWS',
  'GraphQL',
  'Solidity',
  'Web3.js',
  'Redis',
  'MongoDB',
  'Tailwind',
  'Rust',
];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">About</p>
          <h2 className="text-4xl md:text-5xl font-bold">Engineering for people and performance.</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            I build thoughtful products that balance beautiful interfaces with production-grade reliability. From web3 ecosystems
            to SaaS platforms, I focus on outcomes that move the needle.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="panel p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/50 text-sm">0{index + 1}</span>
                <span className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{principle.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 panel p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Toolbox</p>
              <h3 className="text-2xl font-semibold">The stack I rely on to ship fast</h3>
              <p className="text-white/70">
                From rapid prototyping to cloud-native deployments, I lean on a proven toolkit to deliver maintainable software.
                These technologies help me iterate quickly while keeping quality high.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-[420px]">
              {stacks.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
