'use client';

import { motion } from 'framer-motion';
import { ArrowUpRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const contactPoints = [
  {
    title: 'Email',
    value: 'JohnKenny6799@gmail.com',
    icon: <EnvelopeIcon className="h-5 w-5" />, 
    href: 'mailto:JohnKenny6799@gmail.com',
  },
  {
    title: 'Phone',
    value: '+1 (301)-357-0728',
    icon: <PhoneIcon className="h-5 w-5" />, 
    href: 'tel:+13013570728',
  },
  {
    title: 'Location',
    value: 'Remote • Global',
    icon: <MapPinIcon className="h-5 w-5" />, 
    href: '#',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Contact</p>
          <h2 className="text-4xl font-bold">Let's build something remarkable.</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tell me about your product vision, technical challenges, or roadmap needs. I'll respond with the fastest way to move forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a note</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="message">
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="What are you looking to build?"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 panel p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Trusted collaborator</p>
                <h3 className="text-2xl font-semibold">Available for selective collaborations & leadership roles.</h3>
                <p className="text-white/70">
                  Whether you need hands-on engineering, technical strategy, or mentorship, I bring a systems mindset to every engagement.
                </p>
              </div>
              <a href="/portfolio" className="btn btn-outline border-white/20 text-white">
                View case studies
                <ArrowUpRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-white">
                    {point.icon}
                    <p className="text-sm text-white/70">{point.title}</p>
                  </div>
                  <a
                    href={point.href}
                    className="mt-2 inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
                  >
                    <span className="font-semibold">{point.value}</span>
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
