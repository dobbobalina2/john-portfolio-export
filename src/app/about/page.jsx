'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const education = {
    university: "University of Maryland College Park",
    location: "College Park, MD",
    degree: "Bachelor of Engineering, Major Computer Science",
    year: "2021"
  };

  const skills = {
    technical: [
      "React", "TypeScript", "JavaScript", "Web3.js", "Solidity", 
      "Next.js", "Nest.js", "AWS", "MongoDB", "Redis",
      "CSS", "Tailwind", "Python", "Rust"
    ],
    management: [
      "SDLC (Software Development Life Cycle)", 
      "Resource Planning", 
      "Jira", 
      "MS Project"
    ],
    finance: [
      "Tokenomics", 
      "Derivatives creation", 
      "Derivatives hedging", 
      "Financial modeling"
    ],
    languages: ["English", "German", "Spanish"]
  };

  const timeline = [
    {
      year: "2021",
      events: [
        {
          title: "Graduated from University of Maryland",
          description: "Earned Bachelor of Engineering in Computer Science"
        },
        {
          title: "Started at DLTX",
          description: "Joined as Head of Technology, designing hedging products and leading development teams"
        },
        {
          title: "Joined Soundverse",
          description: "Worked as Senior FullStack Engineer, rebuilding frontend and optimizing smart contract integration"
        }
      ]
    },
    {
      year: "2022",
      events: [
        {
          title: "Joined Consortium 9",
          description: "Started as Senior Software Engineer, developing web3 applications and high-performance systems"
        },
        {
          title: "Developed Web3 Minting Site",
          description: "Created a platform generating over $100,000 in revenue"
        }
      ]
    },
    {
      year: "2023",
      events: [
        {
          title: "Engineered Single Sign-in Wallet",
          description: "Built a solution that improved user retention by 15%"
        },
        {
          title: "Designed High-Performance Leaderboard",
          description: "Achieved 35% improvement in read and write speeds"
        },
        {
          title: "Joined Mattereum",
          description: "Started as Business Consultant, leading tokenization plans for $100+ million in assets"
        }
      ]
    },
    {
      year: "2024",
      events: [
        {
          title: "Executed Token Sale Plan",
          description: "Helped raise $2.5 million from new investors"
        },
        {
          title: "Created Partnership Strategy",
          description: "Established 5 unique partnerships with top RWA companies in crypto"
        }
      ]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn more about my background, skills, and professional journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    I'm John Kenny, a Senior Software Engineer with a passion for building innovative digital solutions. 
                    My journey in technology began at the University of Maryland College Park, where I earned my Bachelor's 
                    degree in Computer Science in 2021.
                  </p>
                  <p>
                    Throughout my career, I've had the opportunity to work with cutting-edge technologies across various domains, 
                    from web development to blockchain applications. I specialize in creating high-performance, scalable applications 
                    using React, TypeScript, and modern web frameworks.
                  </p>
                  <p>
                    My experience spans both technical development and business strategy, allowing me to bridge the gap between 
                    complex technical solutions and real-world business needs. I've led teams, designed financial models, and 
                    developed tokenization strategies that have generated significant revenue and improved user experiences.
                  </p>
                  <p>
                    I'm particularly interested in the intersection of traditional finance and blockchain technology, where I've 
                    helped companies design innovative products and raise capital through strategic partnerships.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                        <span className="text-5xl font-bold text-primary">JK</span>
                      </div>
                      <p className="text-lg font-medium text-dark">John Kenny</p>
                      <p className="text-gray-600">Senior Software Engineer</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <section className="section bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Education & Skills</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold">{education.university}</h4>
                    <p className="text-gray-600 mb-2">{education.location}</p>
                    <p className="text-gray-700 mb-1">{education.degree}</p>
                    <p className="text-primary font-semibold">{education.year}</p>
                  </div>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Skills</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Program Management</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.management.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Finance</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.finance.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((language, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-dark/10 text-dark text-sm rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((period, periodIndex) => (
                  <div key={periodIndex} className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10"
                    >
                      {period.year.slice(-2)}
                    </motion.div>
                    
                    <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:text-right md:pr-8 mb-4 md:mb-0"
                      >
                        <h3 className="text-2xl font-bold text-primary">{period.year}</h3>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="md:pl-8"
                      >
                        <div className="space-y-4">
                          {period.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-primary">
                              <h4 className="text-lg font-bold">{event.title}</h4>
                              <p className="text-gray-600">{event.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
