'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: <EnvelopeIcon className="h-5 w-5" />,
    title: 'Email',
    content: 'JohnKenny6799@gmail.com',
    link: 'mailto:JohnKenny6799@gmail.com',
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    title: 'Phone',
    content: '+1 (301)-357-0728',
    link: 'tel:+13013570728',
  },
  {
    icon: <MapPinIcon className="h-5 w-5" />,
    title: 'Location',
    content: 'Remote • Global',
    link: '#',
  },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/john-kenny-62bb0199/' },
  { name: 'GitHub', url: 'https://github.com/dobbobalina2' },
  { name: 'Twitter', url: 'https://x.com/JohnKennyTech' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: 'Thank you for your message! I will get back to you soon.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-gradient min-h-screen">
        <section className="py-20">
          <div className="container text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold">Let's design your next flagship experience.</h1>
              <p className="text-white/70 max-w-3xl mx-auto">
                Share what you're building, the outcomes you need, or the problems you're facing. I'll reply with clear next steps.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn btn-primary">
                  Send Message
                </button>

                {formStatus.submitted && (
                  <div
                    className={`mt-4 rounded-lg border border-white/10 px-4 py-3 ${
                      formStatus.success ? 'bg-green-500/10 text-green-200' : 'bg-red-500/10 text-red-200'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 panel p-8 space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2 max-w-xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">Engagements</p>
                  <h3 className="text-2xl font-semibold">Available for select product builds, audits, and leadership roles.</h3>
                  <p className="text-white/70">
                    From greenfield MVPs to platform migrations, I partner with teams to deliver reliable, measurable outcomes.
                  </p>
                </div>
                <a href="/portfolio" className="btn btn-outline border-white/20 text-white">
                  View portfolio
                  <ArrowUpRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-white">
                      {item.icon}
                      <p className="text-sm text-white/70">{item.title}</p>
                    </div>
                    <a
                      href={item.link}
                      className="mt-2 inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
                    >
                      <span className="font-semibold">{item.content}</span>
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-3">Office hours</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/70">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="font-semibold text-white">Mon - Fri</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="font-semibold text-white">Saturday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2">
                    <span className="font-semibold text-white">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-white/70">
                <span className="text-sm uppercase tracking-[0.2em] text-white/60">Connect</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="rounded-full bg-white/5 px-3 py-2 text-sm hover:text-primary"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
