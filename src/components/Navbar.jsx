'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#0b1021]/80 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary font-semibold">
            JK
          </span>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Portfolio</p>
            <p className="text-base font-semibold">John Kenny</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <span>{item.name}</span>
              <motion.span
                className="absolute left-1/2 bottom-1 h-px w-0 bg-primary"
                whileHover={{ width: '100%', left: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm px-4 py-2">
            Book a call
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 text-white"
          aria-label="Toggle navigation"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-[#0b1021]/95"
          >
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 text-white/80 hover:text-white hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
