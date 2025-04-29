'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Web3.js', 'Solidity', 
    'Next.js', 'Nest.js', 'AWS', 'MongoDB', 'Redis',
    'CSS', 'Tailwind', 'Python', 'Rust'
  ];

  return (
    <section id="about" className="section bg-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm a Senior Software Engineer with extensive experience in modern web technologies and blockchain development. 
              With a background in Computer Science from the University of Maryland College Park, I've worked with various 
              companies to build innovative solutions that solve real-world problems.
            </p>
            <p className="text-gray-700 mb-6">
              My expertise spans across frontend and backend development, with a particular focus on creating 
              high-performance, scalable applications using React, TypeScript, and various cloud technologies.
            </p>
            <a href="/about" className="btn btn-primary">Learn More</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-gray-800 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
