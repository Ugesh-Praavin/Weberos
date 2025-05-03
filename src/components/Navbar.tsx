import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-roadmap-orange">Web</span>
            <span className="text-white">eros</span>
          </span>
          <span className="ml-2 text-sm font-medium text-white/60 hidden md:inline-block">
            Digital Studio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="car-underline font-medium text-white opacity-80 hover:opacity-100 transition-opacity">Services</a>
          <a href="#process" className="car-underline font-medium text-white opacity-80 hover:opacity-100 transition-opacity">Process</a>
          <a href="#about" className="car-underline font-medium text-white opacity-80 hover:opacity-100 transition-opacity">About</a>
          
  <a href="#contact">
    <Button className="bg-roadmap-orange hover:bg-roadmap-orange/90 text-black">
      Contact Us
    </Button>
  </a>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="glassmorphism px-4 py-4 animate-fade-in">
          <a href="#services" className="block py-3 px-4 hover:bg-white/10 rounded-md font-medium text-white" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#process" className="block py-3 px-4 hover:bg-white/10 rounded-md font-medium text-white" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#about" className="block py-3 px-4 hover:bg-white/10 rounded-md font-medium text-white" onClick={() => setIsMenuOpen(false)}>About</a>
          <div className="py-3 px-4">
            <Button className="w-full bg-roadmap-orange hover:bg-roadmap-orange/90 text-black" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
