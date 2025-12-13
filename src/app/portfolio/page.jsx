'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const experiences = [
  {
    company: 'Mattereum',
    position: 'Business Consultant',
    period: '10/2023 - 06/2024',
    description:
      'Led tokenization plans for $100M+ in assets, orchestrating liquidity, utility, and capital strategies across stakeholders.',
    achievements: [
      'Raised $2.5M through a coordinated token sale plan with five external parties.',
      'Built partnership strategy securing five RWA collaborations to expand liquidity.',
      'Developed lifecycle plans aligning investors, product, and GTM teams.',
    ],
    technologies: ['Tokenomics', 'Blockchain', 'Strategy', 'Stakeholder management'],
  },
  {
    company: 'Consortium 9',
    position: 'Senior Software Engineer',
    period: '04/2022 - 09/2023',
    description: 'Developed web3 applications and high-performance gaming systems.',
    achievements: [
      'Launched minting site with $100k+ revenue using React, TypeScript, and Web3.js.',
      'Engineered single sign-in wallet with zk-proof authentication, boosting retention by 15%.',
      'Designed AWS + Redis leaderboard with 35% faster reads/writes.',
    ],
    technologies: ['TypeScript', 'React', 'Web3.js', 'Nest.js', 'MongoDB', 'Solidity', 'AWS', 'Redis', 'Lambda'],
  },
  {
    company: 'Soundverse',
    position: 'Senior FullStack Engineer',
    period: '09/2021 - 01/2022',
    description: 'Rebuilt a design-accurate frontend and optimized smart contract integrations.',
    achievements: [
      'Accelerated contract integration by 21% with Next.js and GraphQL.',
      'Delivered pixel-perfect UI rebuild from a legacy codebase.',
      'Enhanced Web3 onboarding using the UseDapp framework.',
    ],
    technologies: ['Next.js', 'Nest.js', 'GraphQL', 'Web3.js', 'UseDapp'],
  },
  {
    company: 'DLTX',
    position: 'Head of Technology',
    period: '03/2021 - 09/2021',
    description: 'Designed financial products and led multi-team delivery for blockchain protocols.',
    achievements: [
      'Built hedging products for $10M-$100M lending deals reducing risk by 85%.',
      'Delivered protocol improvements, dApps, and explorers with 43% faster time-to-production.',
      'Created financial models mitigating $10M+ loss exposure.',
    ],
    technologies: ['Financial modeling', 'Blockchain', 'Team leadership', 'Risk management'],
  },
];

const projects = [
  {
    title: 'Google OAuth ZK Smart Wallet Demo',
    description:
      'Browser-based proving flow using Noir and Barretenberg.js to verify Google OAuth JWTs with Solidity smart contracts.',
    technologies: ['Noir', 'Barretenberg.js', 'React', 'Vite', 'Solidity', 'TypeScript'],
    link: 'https://github.com/dobbobalina2/Google_OAuth_Zk_AA_Demo',
  },
  {
    title: 'useropV07.js',
    description:
      'Published TypeScript library updating the ERC-4337 UserOperation tools for the latest v0.7 spec.',
    technologies: ['TypeScript', 'web3.js', 'ERC-4337', 'UserOperation', 'Solidity'],
    link: 'https://github.com/dobbobalina2/useropV07.js',
  },
  {
    title: 'Gaming Wallet Integration',
    description: 'Single sign-in wallet solution with seamless auth flows for gaming platforms.',
    technologies: ['Nest.js', 'MongoDB', 'Solidity', 'React', 'ZkProof'],
    link: '#',
  },
  {
    title: 'Blockchain Explorer',
    description: 'Comprehensive explorer for Factom blockchain with improved UX and performance.',
    technologies: ['React', 'Node.js', 'Data viz'],
    link: '#',
  },
  {
    title: 'NFT Marketplace UI',
    description: 'Responsive marketplace experience featuring creator leaderboards and animated interactions.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '/portfolio/project',
  },
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gradient min-h-screen">
        <section className="py-20">
          <div className="container text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Portfolio</p>
              <h1 className="text-4xl md:text-5xl font-bold">A career built on shipping and scaling.</h1>
              <p className="text-white/70 max-w-3xl mx-auto">
                Selected engagements across consulting, gaming, and blockchain that highlight velocity, polish, and measurable impact.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold">Work Experience</h2>
              <p className="text-white/60 mt-2">Hands-on leadership across product, engineering, and delivery.</p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="panel p-8 space-y-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <p className="text-sm text-white/60">{exp.period}</p>
                      <h3 className="text-2xl font-semibold">{exp.company}</h3>
                      <p className="text-white/70">{exp.position}</p>
                    </div>
                    <span className="rounded-full bg-primary/20 px-4 py-2 text-primary font-semibold">{index + 1}</span>
                  </div>

                  <p className="text-white/70">{exp.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold">Featured Projects</h2>
              <p className="text-white/60 mt-2">Demos, libraries, and production work that showcase my build quality.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-white/60">{project.technologies[0]}</p>
                    <span className="rounded-lg bg-primary/20 px-3 py-1 text-primary text-sm">Case #{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-white/70 mt-2 flex-grow">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <a href={project.link} className="mt-6 inline-flex items-center text-primary hover:text-primary/80">
                    View project
                    <span className="ml-2">→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
