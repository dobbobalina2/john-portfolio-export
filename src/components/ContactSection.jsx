'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding pt-32 md:pt-40 bg-background relative">
      <div className="container-width max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient-primary">Connect</span></h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
             Ready to start your next project? I'm currently available for freelance work and open to full-time opportunities.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
             <Card className="glass-card border-white/5 bg-secondary/5">
                <CardContent className="p-8 flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10 text-primary">
                     <Mail className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl mb-1">Email</h3>
                     <a href="mailto:JohnKenny6799@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                       JohnKenny6799@gmail.com
                     </a>
                   </div>
                </CardContent>
             </Card>

             <Card className="glass-card border-white/5 bg-secondary/5">
                <CardContent className="p-8 flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10 text-primary">
                     <Phone className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl mb-1">Phone</h3>
                 
                   </div>
                </CardContent>
             </Card>

             <Card className="glass-card border-white/5 bg-secondary/5">
                <CardContent className="p-8 flex items-start gap-4">
                   <div className="p-3 rounded-full bg-primary/10 text-primary">
                     <MapPin className="h-6 w-6" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl mb-1">Location</h3>
                     <p className="text-muted-foreground">Global / Remote</p>
                   </div>
                </CardContent>
             </Card>
           </motion.div>

           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
           >
             <Card className="border-white/10 bg-card shadow-2xl shadow-primary/5">
               <CardContent className="p-8">
                 <form className="space-y-6">
                   <div className="space-y-2">
                     <label htmlFor="name" className="text-sm font-medium">Name</label>
                     <Input id="name" placeholder="John Doe" className="bg-secondary/20 border-white/10 focus:border-primary/50 transition-colors h-12" />
                   </div>
                   
                   <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-medium">Email</label>
                     <Input id="email" type="email" placeholder="john@example.com" className="bg-secondary/20 border-white/10 focus:border-primary/50 transition-colors h-12" />
                   </div>

                   <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-medium">Message</label>
                     <Textarea id="message" placeholder="Tell me about your project..." className="bg-secondary/20 border-white/10 focus:border-primary/50 transition-colors min-h-[150px] resize-none" />
                   </div>

                   <Button type="submit" className="w-full h-12 text-base bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
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
