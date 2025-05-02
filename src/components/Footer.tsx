
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-roadmap-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              <span className="text-roadmap-orange">Road</span>Map Designs
            </div>
            <p className="text-roadmap-gray-300 max-w-xs">
              We create streamlined, high-performance websites that help our clients navigate the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-roadmap-gray-300 hover:text-roadmap-orange">Compact</a></li>
                <li><a href="#services" className="text-roadmap-gray-300 hover:text-roadmap-orange">Sedan</a></li>
                <li><a href="#services" className="text-roadmap-gray-300 hover:text-roadmap-orange">SUV</a></li>
                <li><a href="#services" className="text-roadmap-gray-300 hover:text-roadmap-orange">Custom Build</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#process" className="text-roadmap-gray-300 hover:text-roadmap-orange">Process</a></li>
                <li><a href="#about" className="text-roadmap-gray-300 hover:text-roadmap-orange">About</a></li>
                <li><a href="#contact" className="text-roadmap-gray-300 hover:text-roadmap-orange">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-roadmap-gray-300 hover:text-roadmap-orange">Facebook</a></li>
                <li><a href="#" className="text-roadmap-gray-300 hover:text-roadmap-orange">Twitter</a></li>
                <li><a href="#" className="text-roadmap-gray-300 hover:text-roadmap-orange">Instagram</a></li>
                <li><a href="#" className="text-roadmap-gray-300 hover:text-roadmap-orange">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-roadmap-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RoadMap Designs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-roadmap-gray-300 hover:text-roadmap-orange text-sm">Privacy Policy</a>
            <a href="#" className="text-roadmap-gray-300 hover:text-roadmap-orange text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
