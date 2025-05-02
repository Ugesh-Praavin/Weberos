
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-roadmap-black">
            <span className="text-roadmap-orange">Road</span>Map
          </span>
          <span className="ml-2 text-sm font-medium text-roadmap-gray-300 hidden md:inline-block">
            Designs
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="car-underline font-medium">Services</a>
          <a href="#process" className="car-underline font-medium">Process</a>
          <a href="#about" className="car-underline font-medium">About</a>
          <Button className="bg-roadmap-orange hover:bg-roadmap-orange/90 text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white px-4 py-4 shadow-lg animate-fade-in">
          <a href="#services" className="block py-3 px-4 hover:bg-roadmap-gray-100 rounded-md font-medium">Services</a>
          <a href="#process" className="block py-3 px-4 hover:bg-roadmap-gray-100 rounded-md font-medium">Process</a>
          <a href="#about" className="block py-3 px-4 hover:bg-roadmap-gray-100 rounded-md font-medium">About</a>
          <div className="py-3 px-4">
            <Button className="w-full bg-roadmap-orange hover:bg-roadmap-orange/90 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
