'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const education = {
  university: 'University of Maryland College Park',
  location: 'College Park, MD',
  degree: 'Bachelor of Engineering, Computer Science',
  year: '2021',
};

const skills = {
  technical: ['React', 'TypeScript', 'Next.js', 'Web3.js', 'Solidity', 'Nest.js', 'AWS', 'Redis', 'MongoDB', 'GraphQL', 'Rust'],
  leadership: ['Delivery leadership', 'Resource planning', 'Jira', 'Mentorship'],
  finance: ['Tokenomics', 'Derivatives design', 'Hedging', 'Financial modeling'],
  languages: ['English', 'German', 'Spanish'],
};

const timeline = [
  {
    year: '2024',
    events: [
      {
        title: 'Executed token sale plan',
        description: 'Raised $2.5M from investors through coordinated go-to-market and stakeholder alignment.',
      },
      {
        title: 'Partnership strategy',
        description: 'Forged five partnerships with top RWA companies to unlock new liquidity opportunities.',
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        title: 'Joined Mattereum',
        description: 'Business consultant driving tokenization plans for $100M+ in assets.',
      },
      {
        title: 'Engineered single sign-in wallet',
        description: 'Improved gamer retention with zk-proof backed authentication.',
      },
      {
        title: 'High-performance leaderboard',
        description: 'Reduced read/write latency by 35% with event-driven AWS architecture.',
      },
    ],
  },
  {
    year: '2022',
    events: [
      {
        title: 'Web3 minting platform',
        description: 'Launched revenue-generating minting experience in two weeks.',
      },
      {
        title: 'Joined Consortium 9',
        description: 'Senior Software Engineer delivering production web3 products.',
      },
    ],
  },
  {
    year: '2021',
    events: [
      {
        title: 'Graduated UMD',
        description: 'B.S. in Computer Science focused on distributed systems.',
      },
      {
        title: 'Head of Technology, DLTX',
        description: 'Led hedging products, bridges, and explorers for the Factom blockchain.',
      },
    ],
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gradient min-h-screen">
        <section className="relative overflow-hidden py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">About</p>
              <h1 className="text-4xl md:text-5xl font-bold">Systems-minded engineer & product partner.</h1>
              <p className="text-white/70 max-w-3xl mx-auto">
                I bridge product vision with technical execution, leading teams through clarity, measurable outcomes, and a calm delivery rhythm.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="panel p-8 space-y-4"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Story</p>
              <h2 className="text-3xl font-semibold">Balancing UX finesse with backend strength</h2>
              <p className="text-white/70">
                I'm John Kenny, a Senior Software Engineer with experience across fintech, gaming, and blockchain ecosystems. I design composable architectures, mentor teams, and ship secure experiences that people love to use.
              </p>
              <p className="text-white/70">
                My approach prioritizes accessibility, performance, and observability from day one. Whether crafting new products or modernizing legacy systems, I focus on resilient foundations with clean, intentional interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="panel p-8 space-y-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">Education</p>
                  <h3 className="text-2xl font-semibold">{education.university}</h3>
                  <p className="text-white/60">{education.location}</p>
                </div>
                <span className="rounded-lg bg-primary/20 px-4 py-2 text-primary font-semibold">{education.year}</span>
              </div>
              <p className="text-white/70">{education.degree}</p>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Leadership</p>
                  <p className="text-white/60">Mentorship, delivery, growth plans</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Domains</p>
                  <p className="text-white/60">Fintech, gaming, RWA, SaaS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="panel p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Toolkit</h3>
              <div className="space-y-4 text-white/70">
                <div>
                  <p className="text-sm text-white/60">Technical</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skills.technical.map((skill) => (
                      <span key={skill} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-white/60">Leadership</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skills.leadership.map((skill) => (
                        <span key={skill} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Finance</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skills.finance.map((skill) => (
                        <span key={skill} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/60">Languages</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {skills.languages.map((language) => (
                      <span key={language} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="panel p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Professional journey</h3>
              <div className="relative space-y-10">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
                {timeline.map((period) => (
                  <div key={period.year} className="relative pl-10">
                    <span className="absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center">
                      <span className="h-3 w-3 rounded-full bg-primary" />
                    </span>
                    <p className="text-sm text-white/60">{period.year}</p>
                    <div className="mt-2 space-y-3">
                      {period.events.map((event) => (
                        <div key={event.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <p className="font-semibold text-white">{event.title}</p>
                          <p className="text-white/70 text-sm">{event.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
