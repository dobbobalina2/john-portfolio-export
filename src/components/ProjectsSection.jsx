'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Web3 Minting Site",
      description: "Developed a web3-enabled minting site using TypeScript, web3.js, React, Vercel, and StyledComponents, generating over $100,000+ in revenue.",
      tags: ["TypeScript", "React", "Web3.js", "Vercel"],
      company: "Consortium 9"
    },
    {
      title: "Single Sign-in Wallet",
      description: "Engineered a single sign-in wallet for a gaming platform, utilizing Nest.js, MongoDB, Solidity, React, and ZkProof, resulting in a 15% improvement in user retention rates.",
      tags: ["Nest.js", "MongoDB", "Solidity", "React"],
      company: "Consortium 9"
    },
    {
      title: "High-Performance Leaderboard",
      description: "Designed and architected a high-performance Leaderboard, utilizing AWS, Redis, MongoDB, Lambda, and an event-driven architecture, achieving a 35% improvement in read and write speeds.",
      tags: ["AWS", "Redis", "MongoDB", "Lambda"],
      company: "Consortium 9"
    },
    {
      title: "Frontend Rebuild",
      description: "Rebuilt the frontend from an existing codebase to the design specification, optimizing smart contract functionality integration time by 21%.",
      tags: ["Next.js", "Nest.js", "GraphQL", "Web3.js"],
      company: "Soundverse"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 h-full flex flex-col"
            >
              <div className="mb-4">
                <span className="text-sm font-medium text-primary">{project.company}</span>
                <h3 className="text-xl font-bold mt-1">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/portfolio" className="btn btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
