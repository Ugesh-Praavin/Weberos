import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              <span className="text-roadmap-orange">Web</span>eros
            </div>
            <p className="text-white/80 max-w-xs">
              We create modern, high-performance websites that fuel brands one pixel at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Compact</a></li>
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Sedan</a></li>
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">SUV</a></li>
                <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Custom Build</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#process" className="text-white/80 hover:text-white transition-colors">Process</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Weberos. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
