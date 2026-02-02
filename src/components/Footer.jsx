'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' },
    { name: 'Twitter', url: '#' },
  ];

  return (
    <footer className="mt-16 border-t border-black/10 bg-white/70 backdrop-blur-xl">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">John Kenny</h3>
            <p className="text-muted-foreground mb-4">
              Senior Software Engineer specializing in modern web technologies and blockchain development.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-primary transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Email:</span> JohnKenny6799@gmail.com
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Location:</span> Global
            </p>
          </div>
        </div>

        <div className="border-t border-black/5 mt-10 pt-6 text-sm text-muted-foreground">
          &copy; {currentYear} John Kenny. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
