'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Experience', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-xl border-b border-black/10 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="container-width">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 relative group cursor-pointer z-50">
              <Link href="/" className="font-heading text-2xl font-semibold tracking-tight">
                <span className="text-foreground group-hover:text-primary transition-colors">John</span>
                <span className="text-primary group-hover:text-foreground transition-colors"> Kenny</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="flex items-center bg-white/70 backdrop-blur-sm px-2 py-1.5 rounded-full border border-black/10 mr-4 shadow-sm">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors rounded-full ${
                        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-foreground/5 rounded-full -z-10"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              
              <Button 
                variant="default" 
                className="bg-foreground hover:bg-foreground/90 text-background font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.2)] rounded-full px-6"
                asChild
              >
                <Link href="/contact">Hire Me</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <Button
                variant="ghost"
                size="icon"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:bg-secondary/50"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-xl border border-black/10 rounded-2xl shadow-xl md:hidden p-6"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold tracking-tight block py-2 ${
                       pathname === item.href ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                 <Button className="w-full text-lg py-6" onClick={() => setIsOpen(false)} asChild>
                    <Link href="/contact">Get in touch</Link>
                 </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
