
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-roadmap-orange/20 rounded-full filter blur-[150px] -z-10"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-roadmap-orange/10 rounded-full filter blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 z-10">
            <div className="mb-2 inline-block py-1 px-3 bg-black/50 rounded-full border border-roadmap-orange/30">
              <span className="text-sm font-medium text-roadmap-orange">Digital Innovation Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Fueling brands.</span>
              <br />
              <span className="text-roadmap-orange">One pixel at a time.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-roadmap-orange/70 max-w-lg">
              We create modern, high-performance digital experiences that 
              propel your brand forward in today's competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-roadmap-orange hover:bg-roadmap-orange/90 text-black px-8 py-6 text-lg relative 
                                 shadow-[0_0_15px_rgba(242,124,34,0.5)] hover:shadow-[0_0_25px_rgba(242,124,34,0.7)] 
                                 transition-shadow">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-roadmap-orange text-roadmap-orange hover:bg-roadmap-orange/10 px-8 py-6 text-lg">
                Our Process
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative z-10">
            <div className="relative glassmorphism p-1 rounded-lg animate-pulse-glow">
              <div className="aspect-video bg-black rounded overflow-hidden p-4 flex items-center justify-center">
                <div className="text-5xl font-bold flex flex-col items-center">
                  <div className="flex">
                    <span className="text-roadmap-orange">Web</span>
                    <span className="text-roadmap-orange/80">eros</span>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-roadmap-orange to-roadmap-orange/50 mt-2"></div>
                  <div className="text-base text-roadmap-orange/60 mt-2">DIGITAL STUDIO</div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -top-6 -right-6 w-32 h-32 bg-roadmap-orange/10 rounded-full filter blur-xl"></div>
            <div aria-hidden="true" className="absolute -bottom-10 -left-10 w-40 h-40 bg-roadmap-orange/10 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
