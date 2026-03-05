import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Reservation request sent! We will confirm shortly.");
  };

  return (
    <section id="reservation" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">Book A Table</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <Input 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone</label>
                <Input 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300">Date</label>
                <div className="relative">
                  <Input 
                    name="date" 
                    type="date" 
                    required 
                    className="pl-10"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <CalendarIcon className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300">Time</label>
                <div className="relative">
                  <Input 
                    name="time" 
                    type="time" 
                    required 
                    className="pl-10"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  <Clock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-300">Guests</label>
                <div className="relative">
                  <Input 
                    name="guests" 
                    type="number" 
                    min="1" 
                    placeholder="Number of Guests" 
                    required 
                    className="pl-10"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                  <Users className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="pt-6 text-center">
              <Button type="submit" className="w-full md:w-auto bg-[#D4AF37] text-black hover:bg-[#C5A028] px-12 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105">
                Reserve Table
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
