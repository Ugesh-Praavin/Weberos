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
              <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-white/80 hover:text-roadmap-orange transition-colors group">
                    <div className="font-medium group-hover:text-roadmap-orange">Web Design & Development</div>
                    <div className="text-sm text-white/60">Complete website solutions</div>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-roadmap-orange transition-colors group">
                    <div className="font-medium group-hover:text-roadmap-orange">SEO & SEM Management</div>
                    <div className="text-sm text-white/60">Boost online visibility</div>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-roadmap-orange transition-colors group">
                    <div className="font-medium group-hover:text-roadmap-orange">Social Media Marketing</div>
                    <div className="text-sm text-white/60">Build brand presence</div>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-white/80 hover:text-roadmap-orange transition-colors font-medium">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-white/80 hover:text-roadmap-orange transition-colors font-medium">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-roadmap-orange transition-colors font-medium">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-roadmap-orange transition-colors font-medium">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.instagram.com/weberos_tbm/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-roadmap-orange transition-colors font-medium flex items-center"
                  >
                    <span>Instagram</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-roadmap-orange transition-colors font-medium">
                    Get Quote
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@weberos.com" className="text-white/80 hover:text-roadmap-orange transition-colors font-medium">
                    Email Us
                  </a>
                </li>
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
            <a href="#" className="text-white/60 hover:text-roadmap-orange transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-roadmap-orange transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
