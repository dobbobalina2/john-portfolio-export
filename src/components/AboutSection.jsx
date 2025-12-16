'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Globe, Layers, User } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Web3.js', 'Solidity', 
    'Next.js', 'Nest.js', 'AWS', 'MongoDB', 'Redis',
    'PostgreSQL', 'Tailwind', 'Python', 'Rust'
  ];

  return (
    <section id="about" className="section-padding bg-secondary/5 relative">
      <div className="container-width">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-primary/50"></span>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Me</span>
            <span className="h-px w-12 bg-primary/50"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Digital <span className="text-gradient-primary">Perfection</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card - Spans 2 cols */}
          <motion.div
            className="md:col-span-2 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full glass-card border-white/5 bg-background/50 hover:bg-background/80 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="h-6 w-6 text-primary" />
                  The Developer Behind the Code
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a <span className="text-foreground font-semibold">Senior Software Engineer</span> obsessed with performance and design. 
                  With a degree in Computer Science from the University of Maryland College Park, I blend academic rigor with creative problem-solving.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My philosophy is simple: build things that are fast, intuitive, and beautiful. Whether it's a decentralized finance protocol or a high-traffic e-commerce platform, I ensure every line of code serves a purpose.
                </p>
                <Button variant="outline" className="group" asChild>
                  <a href="/about" className="flex items-center justify-center gap-2">
                    Read Full Bio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats / Quick Info */}
          <motion.div
            className="md:col-span-1 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card border-white/5 flex-1 bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="flex flex-col justify-center h-full p-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/5 flex-1 bg-gradient-to-br from-purple-500/10 to-transparent">
              <CardContent className="flex flex-col justify-center h-full p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Marquee / Grid */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card border-white/5 overflow-hidden">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <Layers className="h-5 w-5 text-blue-400" />
                   <span className="text-lg">Technical Arsenal</span>
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="flex flex-wrap gap-2">
                   {skills.map((skill, index) => (
                     <Badge 
                       key={index} 
                       variant="secondary" 
                       className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                     >
                       {skill}
                     </Badge>
                   ))}
                   <Badge variant="outline" className="px-3 py-1.5 text-sm text-muted-foreground border-dashed">
                      + More
                   </Badge>
                 </div>
               </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
