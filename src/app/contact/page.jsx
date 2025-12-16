'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    // For this demo, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'JohnKenny6799@gmail.com',
      link: 'mailto:JohnKenny6799@gmail.com'
    },

    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: 'Global',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      url: '#'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section bg-transparent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Send Message
                  </button>
                  
                  {formStatus.submitted && (
                    <div className={`mt-4 p-4 rounded-md ${formStatus.success ? 'bg-green-900/20 text-green-400 border border-green-900/50' : 'bg-red-900/20 text-red-400 border border-red-900/50'}`}>
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {item.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="mt-12 p-6 glass-card rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>By appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map or Additional Section */}
        <section className="section bg-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </motion.div>

            <div className="glass-card rounded-xl shadow-md p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to start your next project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a custom web application, blockchain integration, or technical consultation, 
                I'm here to help turn your ideas into reality.
              </p>
              <a href="#" className="btn btn-primary">
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
