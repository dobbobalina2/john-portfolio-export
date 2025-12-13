'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/john-kenny-62bb0199/' },
  { name: 'GitHub', url: 'https://github.com/dobbobalina2' },
  { name: 'Twitter', url: 'https://x.com/JohnKennyTech' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b1021] text-white">
      <div className="container py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary font-semibold">JK</span>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Portfolio</p>
                <p className="text-lg font-semibold">John Kenny</p>
              </div>
            </div>
            <p className="text-white/60">
              Full-stack and web3 engineer crafting performant, human-centric experiences across fintech, gaming, and emerging tech.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-white/60 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-white/70">
              <a href="/" className="hover:text-primary">Home</a>
              <a href="/portfolio" className="hover:text-primary">Portfolio</a>
              <a href="/about" className="hover:text-primary">About</a>
              <a href="/contact" className="hover:text-primary">Contact</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="text-white/70">JohnKenny6799@gmail.com</p>
            <p className="text-white/70">+1 (301)-357-0728</p>
            <p className="text-white/70">Remote • Global</p>
            <a href="/contact" className="inline-flex items-center text-primary hover:text-primary/80">
              Book a call
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/50 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>&copy; {currentYear} John Kenny. All rights reserved.</p>
          <p className="text-white/50">Currently open to senior engineering & tech lead roles.</p>
        </div>
      </div>
    </footer>
  );
}
