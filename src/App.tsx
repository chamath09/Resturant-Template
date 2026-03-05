import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Menu />
    <Gallery />
    <Reviews />
    <Location />
  </>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
