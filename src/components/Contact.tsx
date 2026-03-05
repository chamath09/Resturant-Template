import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out for inquiries, feedback, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-full">
                    <MapPin className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Address</h4>
                    <p className="text-gray-400">No:50 Moraketiya Road,<br />Embilipitiya, Sri Lanka.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-full">
                    <Phone className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <p className="text-gray-400">0117 123 766</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-full">
                    <Mail className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-400">info@doublebarrel.lk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37]/10 p-3 rounded-full">
                    <Clock className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Opening Hours</h4>
                    <p className="text-gray-400">Open Daily: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-neutral-900/50 p-8 rounded-2xl border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <Input placeholder="Subject" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  className="flex min-h-[150px] w-full rounded-md border border-input bg-neutral-800 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-neutral-700 text-white placeholder-gray-500 focus:border-[#D4AF37] focus:ring-[#D4AF37]/50"
                  placeholder="Your Message"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] py-6 text-lg font-semibold transition-all hover:scale-105">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
