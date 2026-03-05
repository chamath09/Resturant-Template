import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold tracking-widest">
              DOUBLE <span className="text-[#D4AF37]">BARREL</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the perfect blend of flavour and atmosphere in the heart of Embilipitiya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium text-[#D4AF37] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#reservation" className="hover:text-white transition-colors">Reservations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-medium text-[#D4AF37] mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-[#D4AF37]" />
                <span>No:50 Moraketiya Road,<br />Embilipitiya, Sri Lanka.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#D4AF37]" />
                <span>0117 123 766</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-[#D4AF37]" />
                <span>info@doublebarrel.lk</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif font-medium text-[#D4AF37] mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>10:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Double Barrel Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
