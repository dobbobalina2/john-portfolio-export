'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Terminal, Zap } from 'lucide-react';
import Background from '@/components/Background';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Background />
      
      <div className="container-width z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                Available for hire
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Building <br />
              <span className="text-gradient-primary">Digital Future</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I'm <span className="text-foreground font-semibold">John Kenny</span>, a Senior Software Engineer crafting exceptional web experiences and decentralized applications.
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 w-full justify-start">
              <Button size="lg" className="text-base h-14 px-10 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25" asChild>
                <a href="#projects" className="flex items-center justify-center gap-2">
                  View Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-10 border-primary/20 hover:bg-primary/5" asChild>
                <a href="/contact" className="flex items-center justify-center">Contact Me</a>
              </Button>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-white/5">
              <p className="text-sm text-muted-foreground mb-4 font-mono">Tech Stack</p>
              <div className="flex flex-wrap gap-4 text-secondary-foreground/80">
                <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-md border border-white/5">
                  <Code className="h-4 w-4 text-blue-400" /> React/Next.js
                </div>
                <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-md border border-white/5">
                  <Terminal className="h-4 w-4 text-green-400" /> Node.js
                </div>
                <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-md border border-white/5">
                  <Zap className="h-4 w-4 text-yellow-400" /> Blockchain
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual Content / Abstract Graphic */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, type: "spring" }}
             className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
              
              <div className="relative z-10 w-full h-full glass-card border border-white/10 p-6 flex flex-col justify-between">
                 {/* Code Snippet/Graphic Simulation */}
                 <div className="space-y-4">
                   <div className="flex gap-2 mb-6">
                     <div className="w-3 h-3 rounded-full bg-red-500/80" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                     <div className="w-3 h-3 rounded-full bg-green-500/80" />
                   </div>
                   
                   <div className="space-y-2 font-mono text-sm">
                     <div className="text-purple-400">const <span className="text-blue-400">Developer</span> = {'{'}</div>
                     <div className="pl-4 text-foreground">
                        name: <span className="text-green-400">'John Kenny'</span>,
                     </div>
                     <div className="pl-4 text-foreground">
                        role: <span className="text-green-400">'Senior Engineer'</span>,
                     </div>
                     <div className="pl-4 text-foreground">
                        skills: [<span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'Solidity'</span>],
                     </div>
                     <div className="text-purple-400">{'}'};</div>
                   </div>
                 </div>

                 <div className="mt-8">
                   <div className="h-40 w-full rounded-lg bg-black/40 border border-white/5 relative overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/40 blur-2xl rounded-full" />
                      <div className="absolute bottom-4 left-4 right-4 h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        />
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
