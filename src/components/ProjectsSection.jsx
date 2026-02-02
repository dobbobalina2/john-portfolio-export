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
    <section id="projects" className="section-padding relative">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="hairline" />
              <span className="eyebrow">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A curated set of platforms and systems where performance, UX, and cryptographic rigor all had to coexist.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/portfolio">View Entire Portfolio</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <Card className="relative h-full flex flex-col surface border-black/10 overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="bg-white/80 text-foreground border border-black/10">
                        {project.company}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-6 border-t border-black/5 bg-white/60">
                    <div className="flex flex-wrap gap-2 w-full">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-semibold text-muted-foreground bg-white/70 border border-black/10 rounded-full"
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

        <div className="mt-10 text-center md:hidden">
          <Button size="lg" className="w-full" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
