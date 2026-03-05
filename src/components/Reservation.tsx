import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      console.log(formData);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 bg-black text-white min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center p-8 bg-neutral-900/50 rounded-2xl border border-[#D4AF37]/30 max-w-md mx-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-white mb-4">Reservation Received!</h2>
          <p className="text-gray-400 mb-6">
            Thank you, {formData.name}. We have received your request for a table for {formData.guests} people on {formData.date} at {formData.time}.
          </p>
          <p className="text-gray-500 text-sm">
            We will confirm your booking via phone shortly.
          </p>
          <Button 
            className="mt-8 bg-[#D4AF37] text-black hover:bg-[#C5A028] rounded-full"
            onClick={() => setIsSubmitted(false)}
          >
            Make Another Reservation
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-4">Book A Table</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reserve your spot for an unforgettable dining experience.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Name</label>
                <Input 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 focus:border-[#D4AF37] h-12 text-lg"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Phone</label>
                <Input 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black/50 border-white/10 focus:border-[#D4AF37] h-12 text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Date</label>
                <div className="relative">
                  <Input 
                    name="date" 
                    type="date" 
                    required 
                    className="pl-12 bg-black/50 border-white/10 focus:border-[#D4AF37] h-12 text-lg"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <CalendarIcon className="absolute left-4 top-3.5 text-[#D4AF37] w-5 h-5" />
                </div>
              </div>
              <div className="space-y-3 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Time</label>
                <div className="relative">
                  <Input 
                    name="time" 
                    type="time" 
                    required 
                    className="pl-12 bg-black/50 border-white/10 focus:border-[#D4AF37] h-12 text-lg"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  <Clock className="absolute left-4 top-3.5 text-[#D4AF37] w-5 h-5" />
                </div>
              </div>
              <div className="space-y-3 relative">
                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Guests</label>
                <div className="relative">
                  <Input 
                    name="guests" 
                    type="number" 
                    min="1" 
                    placeholder="Guests" 
                    required 
                    className="pl-12 bg-black/50 border-white/10 focus:border-[#D4AF37] h-12 text-lg"
                    value={formData.guests}
                    onChange={handleChange}
                  />
                  <Users className="absolute left-4 top-3.5 text-[#D4AF37] w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <Button type="submit" className="w-full md:w-auto bg-[#D4AF37] text-black hover:bg-[#C5A028] px-16 py-7 text-xl rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Confirm Reservation
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Reservation;
