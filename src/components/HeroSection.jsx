'use client';

import { motion } from 'framer-motion';
import { ArrowUpRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const highlights = [
  'Full-stack & web3 engineering',
  'Human-centered product thinking',
  'Systems that scale to millions',
];

const stats = [
  { label: 'Years Building', value: '7+', tone: 'text-primary' },
  { label: 'Products Shipped', value: '32', tone: 'text-accent' },
  { label: 'Availability', value: 'Remote | NYC', tone: 'text-white' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pb-12 pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,112,243,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="absolute -left-40 -top-40 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
            <SparklesIcon className="h-4 w-4 text-primary" />
            <span>Engineering with intention</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Building immersive web experiences & resilient systems.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              I'm John Kenny, a full-stack engineer blending performant architectures with refined UX.
              I design, build, and ship modern products across fintech, gaming, and decentralized ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View portfolio
              <ArrowUpRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="btn btn-outline border-white/20">
              Schedule a call
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              {stats.map((stat) => (
                <div key={stat.label} className="panel p-4">
                  <p className={`text-2xl font-bold ${stat.tone}`}>{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="panel p-4 max-w-xs">
              <p className="text-sm uppercase tracking-[0.18em] text-white/60">Focus areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="relative h-full">
            <div className="panel p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">Featured stack</p>
                  <p className="text-xl font-semibold">TypeScript • React • Solidity</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  JK
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {["Performance-first UI", "API design & observability", "Secure smart contract delivery"].map((pill) => (
                  <div key={pill} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-white/80">{pill}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/70">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Frontend</p>
                  <p className="text-white/60">Next.js · Framer Motion · Tailwind</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Backend</p>
                  <p className="text-white/60">Node · Nest · AWS · Web3</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
