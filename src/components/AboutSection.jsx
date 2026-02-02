'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layers, User } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Web3.js', 'Solidity',
    'Next.js', 'Nest.js', 'AWS', 'MongoDB', 'Redis',
    'PostgreSQL', 'Tailwind', 'Python', 'Rust'
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="hairline" />
            <span className="eyebrow">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Product-grade engineering with <span className="text-gradient-primary">taste</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            I build fast, elegant software across web and blockchain. My background combines rigorous computer science with
            years of shipping real products under pressure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            className="md:col-span-2 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full surface-strong border-black/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <User className="h-6 w-6 text-primary" />
                  The Engineer Behind the Craft
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a <span className="text-foreground font-semibold">Senior Software Engineer</span> obsessed with speed,
                  clarity, and interaction design. With a computer science degree from the University of Maryland, I blend
                  academic rigor with modern product instincts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From decentralized finance protocols to enterprise-grade platforms, I make sure every line of code earns
                  its place. I care about the invisible details: loading states, error flows, and the last 5% that makes a
                  product feel finished.
                </p>
                <Button variant="outline" className="group" asChild>
                  <a href="/about" className="flex items-center justify-center gap-2">
                    Read Full Bio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="md:col-span-1 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="surface border-black/10 flex-1">
              <CardContent className="flex flex-col justify-center h-full p-6">
                <div className="text-4xl font-semibold text-foreground mb-2">5+ yrs</div>
                <div className="text-muted-foreground">Shipping production systems</div>
              </CardContent>
            </Card>
            <Card className="surface border-black/10 flex-1">
              <CardContent className="flex flex-col justify-center h-full p-6">
                <div className="text-4xl font-semibold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Projects delivered end-to-end</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="surface border-black/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="text-lg">Technical Arsenal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-white/70 border border-black/10 text-foreground/80 hover:bg-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="px-4 py-2 text-sm text-muted-foreground border-dashed">
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
