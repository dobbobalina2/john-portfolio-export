'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 110,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="container-width z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="eyebrow">Senior Software Engineer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              I design and ship <span className="text-gradient-iridescent">Web3 systems</span> with product-grade polish.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              I am John Kenny, a senior engineer focused on performance, clean architecture, and interfaces that feel alive.
              From decentralized platforms to enterprise analytics, I build software people trust and love to use.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="text-base" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  View Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Focus', value: 'Web3 + Product UX' },
                { label: 'Experience', value: '5+ Years Shipping' },
              ].map((item) => (
                <div key={item.label} className="surface rounded-2xl p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <p className="eyebrow mb-4">Core Stack</p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'TypeScript', 'Solidity', 'Node.js', 'AWS'].map((item) => (
                  <span key={item} className="surface-soft rounded-full px-4 py-2 text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
