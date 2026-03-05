import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Map */}
          <motion.div 
            className="lg:w-2/3 h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63397.77724738734!2d80.82666837568359!3d6.386768699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae407a16f6d6f2d%3A0x6f6d6f2d6f6d6f2d!2sEmbilipitiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1629789000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Map"
            />
            <div className="absolute inset-0 pointer-events-none border-4 border-[#D4AF37]/20 rounded-2xl" />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">Find Us</h2>
              <p className="text-gray-400 mb-8">
                Located conveniently in the heart of Embilipitiya, offering ample parking and easy access.
              </p>
            </div>

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
                  <Clock className="text-[#D4AF37] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Opening Hours</h4>
                  <p className="text-gray-400">Open Daily: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
