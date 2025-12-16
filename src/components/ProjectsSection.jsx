'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Web3 Minting Site",
      description: "Developed a web3-enabled minting site using TypeScript, web3.js, React, Vercel, and StyledComponents, generating over $100,000+ in revenue.",
      tags: ["TypeScript", "React", "Web3.js", "Vercel"],
      company: "Consortium 9",
    },
    {
      title: "Single Sign-in Wallet",
      description: "Engineered a single sign-in wallet for a gaming platform, utilizing Nest.js, MongoDB, Solidity, React, and ZkProof, resulting in a 15% improvement in user retention rates.",
      tags: ["Nest.js", "MongoDB", "Solidity", "React"],
      company: "Consortium 9",
    },
    {
      title: "High-Performance Leaderboard",
      description: "Designed and architected a high-performance Leaderboard, utilizing AWS, Redis, MongoDB, Lambda, and an event-driven architecture, achieving a 35% improvement in read and write speeds.",
      tags: ["AWS", "Redis", "MongoDB", "Lambda"],
      company: "Consortium 9",
    },
    {
      title: "Frontend Rebuild",
      description: "Rebuilt the frontend from an existing codebase to the design specification, optimizing smart contract functionality integration time by 21%.",
      tags: ["Next.js", "Nest.js", "GraphQL", "Web3.js"],
      company: "Soundverse",
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] -z-10" />

      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4"
        >
          <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient-primary">Projects</span></h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                A selection of my recent work, ranging from high-performance dApps to enterprise-scale platforms.
              </p>
          </div>
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/portfolio" className="flex items-center justify-center">View Entire Portfolio</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full"> 
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500 will-change-transform" />
                
                <Card className="relative h-full flex flex-col bg-card border-white/10 overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 pointer-events-none">
                            {project.company}
                        </Badge>
                        <div className="flex gap-2">
                           {/* Placeholder links since not provided in data */}
                           <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                             <Github className="h-4 w-4" />
                           </Button>
                           <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                             <ExternalLink className="h-4 w-4" />
                           </Button>
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground/80">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-white/5 bg-secondary/5">
                    <div className="flex flex-wrap gap-2 w-full">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-background border border-border rounded-md group-hover:border-primary/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button size="lg" className="w-full" asChild>
            <Link href="/portfolio" className="flex items-center justify-center">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
