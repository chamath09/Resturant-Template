import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { ChefHat, Users, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
              Our Story
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Nestled in the heart of Embilipitiya, <span className="text-[#D4AF37] font-semibold">Double Barrel Restaurant</span> is more than just a dining destination—it's an experience. 
              Born from a passion for culinary excellence, we bring you a fusion of traditional Sri Lankan flavors and modern gastronomy.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you're here for a romantic dinner, a family gathering, or a lively celebration, our ambiance is designed to captivate your senses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                <ChefHat className="text-[#D4AF37] w-8 h-8 mb-2" />
                <span className="text-sm font-medium">Expert Chefs</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Users className="text-[#D4AF37] w-8 h-8 mb-2" />
                <span className="text-sm font-medium">Family Friendly</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                <Calendar className="text-[#D4AF37] w-8 h-8 mb-2" />
                <span className="text-sm font-medium">Events & Parties</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
              <img 
                src="https://picsum.photos/seed/restaurant_interior/800/600" 
                alt="Restaurant Interior" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
