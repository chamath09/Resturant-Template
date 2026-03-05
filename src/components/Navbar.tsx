import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-white tracking-widest">
          DOUBLE <span className="text-[#D4AF37]">BARREL</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  location.pathname === link.href ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link to="/reservation">
            <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028] rounded-full px-6 transition-transform hover:scale-105">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden absolute top-full left-0 right-0 border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-lg uppercase tracking-wider transition-colors ${
                      location.pathname === link.href ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/reservation" onClick={handleLinkClick} className="w-3/4">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028] rounded-full px-8 w-full text-lg py-6">
                  Book Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
