import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Location />
      <Reservation />
      <Footer />
    </div>
  );
}
