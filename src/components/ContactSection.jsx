'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding pt-28 md:pt-32 relative">
      <div className="container-width max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="hairline" />
            <span className="eyebrow">Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Let us build something <span className="text-gradient-primary">memorable</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I am currently available for freelance work and selective full-time opportunities. Tell me about your product,
            timeline, and the outcomes that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="surface border-black/10">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/80 border border-black/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:JohnKenny6799@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    JohnKenny6799@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="surface border-black/10">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/80 border border-black/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">Available on request</p>
                </div>
              </CardContent>
            </Card>

            <Card className="surface border-black/10">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/80 border border-black/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Global / Remote</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="surface-strong border-black/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[160px]" />
                  </div>

                  <Button type="submit" className="w-full h-12 text-base flex items-center justify-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
