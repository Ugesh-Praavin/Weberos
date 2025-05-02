
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-white to-roadmap-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-roadmap-orange">Drive</span> Your Digital Presence Forward
            </h1>
            <p className="text-lg md:text-xl mb-8 text-roadmap-gray-300 max-w-lg">
              We create streamlined, high-performance websites tailored to move your business 
              ahead in the digital landscape with confidence and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-roadmap-orange hover:bg-roadmap-orange/90 text-white px-8 py-6 text-lg">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-roadmap-orange text-roadmap-orange hover:bg-roadmap-orange/10 px-8 py-6 text-lg">
                Our Process
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video bg-roadmap-gray-100 rounded overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-roadmap-gray-200/50">
                  <div className="text-5xl font-bold text-roadmap-orange">
                    <span className="text-roadmap-black">Road</span>Map
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 right-8 w-full h-full border-4 border-roadmap-orange rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
