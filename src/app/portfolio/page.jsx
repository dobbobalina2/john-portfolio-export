'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const experiences = [
    {
      company: "Mattereum",
      position: "Business Consultant",
      period: "10/2023 - 06/2024",
      description: "Led tokenization plans for $100+ million in assets and executed strategies to increase liquidity and utility.",
      achievements: [
        "Led and developed tokenization plans for $100+ million in assets with multiple stakeholders, including multi-billion dollar hedge funds",
        "Created and executed a full lifecycle plan to bring increased liquidity to the product, utility for the product, and capital for the business, resulting in 5 unique partnerships with the top RWA companies in crypto",
        "Crafted and executed a token sale plan to help the company raise $2.5 million from new investors, which required coordination between 5 different external parties"
      ],
      technologies: ["Tokenomics", "Blockchain", "Business Development", "Strategic Planning"]
    },
    {
      company: "Consortium 9",
      position: "Senior Software Engineer",
      period: "04/2022 - 09/2023",
      description: "Developed web3 applications and high-performance systems for gaming platforms.",
      achievements: [
        "Developed a web3-enabled minting site in two weeks using TypeScript, web3.js, React, Vercel, and StyledComponents, generating over $100,000+ in revenue",
        "Engineered a single sign-in wallet for a gaming platform, utilizing Nest.js, MongoDB, Solidity, React, and ZkProof, resulting in a 15% improvement in user retention rates",
        "Provided valuable insights and guidance on tokenomics, introducing innovative incentives based on game-theoretic behavior in a gaming project",
        "Designed and architected a high-performance Leaderboard, utilizing AWS, Redis, MongoDB, Lambda, and an event-driven architecture, achieving a 35% improvement in read and write speeds"
      ],
      technologies: ["TypeScript", "React", "Web3.js", "Nest.js", "MongoDB", "Solidity", "AWS", "Redis", "Lambda"]
    },
    {
      company: "Soundverse",
      position: "Senior FullStack Engineer",
      period: "09/2021 - 01/2022",
      description: "Rebuilt frontend and optimized smart contract integration for blockchain-based music platform.",
      achievements: [
        "Rebuilt the frontend from an existing codebase to the design specification",
        "Optimized smart contract functionality integration time by 21% through a carefully chosen tech stack, including Next.js, Nest.js, GraphQL backend, HTML, CSS3, Node.js, and Git",
        "Utilized and contributed features to the new Web3.js framework, UseDapp"
      ],
      technologies: ["Next.js", "Nest.js", "GraphQL", "HTML", "CSS3", "Node.js", "Web3.js", "UseDapp"]
    },
    {
      company: "DLTX",
      position: "Head of Technology",
      period: "03/2021 - 09/2021",
      description: "Designed financial products and led development teams for blockchain technology.",
      achievements: [
        "Designed hedging products for cross-digital asset lending deals ranging from $10M to $100M, effectively reducing lending risk by 85% while preserving 90% of the upside",
        "Developed and designed cutting-edge financial models that effectively mitigated the risk of potential losses of $10M+ for the company, aligning with current market conditions",
        "Led a team to develop protocol improvements, mobile/web dApps, a bridge, and a block explorer for the Factom blockchain, achieving a 43% reduction in time to production"
      ],
      technologies: ["Financial Modeling", "Blockchain", "dApps", "Team Leadership", "Risk Management"]
    },

    {
      company: "Bam Marketing",
      position: "Full Stack Developer",
      period: "08/2019 - 07/2020",
      description: "Migrated and modernized a legacy news site while designing and developing a new platform end-to-end, using PHP, Linux, JavaScript, HTML, CSS3, and MySQL.",
      achievements: [
        "Led the successful migration of a 15-year-old legacy news site from Joomla 1.3 to Joomla 3.0, managing over 30,000 data points within its MySQL database.",
        "Demonstrated the ability to quickly learn and adapt by taking ownership of the project despite having no prior experience with PHP at the outset.",
        "Designed, developed, and launched a completely new website for the same client, handling both front-end development and back-end maintenance.",
"Upgraded archaic infrastructure to utilize the LAMP stack, driving incident reports down 43% and decreasing user reported bugs by 27%",
        "Responsibilities included front-end UI development, backend bug fixing, database management, and ongoing optimization for performance and reliability."
      ],
      technologies: ["PHP", "Linux", "JavaScript", "HTML", "CSS3", "MySQL"]
    }
  ];

  const projects = [
 
    {
      title: "Gaming Wallet Integration",
      description: "A single sign-in wallet solution for gaming platforms that improves user retention through seamless authentication.",
      image: "/placeholder.jpg",
      technologies: ["Nest.js", "MongoDB", "Solidity", "React", "ZkProof"],
      link: "#"
    },
    {
      title: "Google OAuth ZK Smart Wallet Demo",
      description: "A full-stack web application demonstrating how to verify Google OAuth JWTs using zero-knowledge proofs built with Noir circuits and Barretenberg.js. The project showcases browser-based proving, account abstraction concepts, and a Solidity smart contract integration. Includes setups for both Webpack and Vite, but is intended as a technical demo — not production-ready.",
      image: "/placeholder.jpg",
      technologies: ["Noir(Rust)", "Barretenberg.js", "React", "Vite", "Solidity","Typescript"],
      link: "https://github.com/dobbobalina2/Google_OAuth_Zk_AA_Demo"
    },
    {
      title: "Blockchain Music Platform",
      description: "A decentralized platform for musicians to distribute and monetize their content directly to fans.",
      image: "/placeholder.jpg",
      technologies: ["Next.js", "Nest.js", "GraphQL", "Web3.js", "UseDapp"],
      link: "#"
    },
    {
      title: "useropV07.js",
      description: "A Published TypeScript npm library forked and updated to support the latest ERC-4337 Account Abstraction (UserOperation V0.7) standard. This project modernizes existing open-source tools to stay compatible with evolving specs, making it easier for developers to build and sign UserOperations under the new V0.7 schema.",
      image: "/placeholder.jpg",
      technologies: ["TypeScript", "web3.js", "ERC-4337", "UserOperation", "Solidity","Javascript","NPM"],
      link: "https://github.com/dobbobalina2/useropV07.js"
    },
    {
      title: "Blockchain Explorer",
      description: "A comprehensive block explorer for the Factom blockchain with improved UX and performance.",
      image: "/placeholder.jpg",
      technologies: ["React", "Node.js", "Blockchain API", "Data Visualization"],
      link: "#"
    },
    {
      title: "NFT Marketplace",
      description: "A modern NFT marketplace UI built with React, featuring a responsive design, smooth animations, and a clean user interface. Includes sections for NFT collections, top creators, and marketplace statistics. The platform demonstrates advanced front-end development techniques using Tailwind CSS for styling and Framer Motion for fluid animations.",
      image: "/placeholder.jpg", 
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "/portfolio/project"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A showcase of my professional experience and projects in software engineering, 
                web development, and blockchain technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="section bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                        <p className="text-xl font-semibold">{exp.position}</p>
                      </div>
                      <span className="text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-foreground mb-4">{exp.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card glass-card h-full flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-sm rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <a 
                      href={project.link} 
                      className="text-primary font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
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
