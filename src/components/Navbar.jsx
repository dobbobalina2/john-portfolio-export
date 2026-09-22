'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/lib/portfolio';

const navigation = [
  { name: 'Work', href: '/portfolio' },
  { name: 'Experience', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const close = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container-width header-inner">
        <Link href="/" className="wordmark" aria-label="John Kenny home" onClick={() => setIsOpen(false)}>JK<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname === item.href ? 'page' : undefined}>{item.name}</Link>)}
          <a href={profile.resume} download className="nav-link nav-resume">Resume <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <button ref={toggle} type="button" className="menu-toggle" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav id="mobile-navigation" className="mobile-navigation" hidden={!isOpen} aria-label="Mobile navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setIsOpen(false)}>{item.name}<ArrowUpRight size={20} aria-hidden="true" /></Link>)}
          <a href={profile.resume} download onClick={() => setIsOpen(false)}>Resume <ArrowUpRight size={20} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
