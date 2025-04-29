'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Twitter', url: '#' },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">John Kenny</h3>
            <p className="text-gray-300 mb-4">
              Senior Software Engineer specializing in modern web technologies and blockchain development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Email:</span> JohnKenny6799@gmail.com
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Phone:</span> +1 (301)-357-0728
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Location:</span> Global
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} John Kenny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
