'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">John Kenny</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6">Senior Software Engineer</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Specializing in modern web technologies, blockchain development, and creating exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">JK</span>
                  </div>
                  <p className="text-lg font-medium text-dark">Professional Profile</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
