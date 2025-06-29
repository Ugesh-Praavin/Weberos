import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-roadmap-orange/20 rounded-full filter blur-[150px] -z-10 animate-float"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-roadmap-orange/10 rounded-full filter blur-[120px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-roadmap-orange/5 rounded-full filter blur-[100px] -z-10 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 md:pr-12 mb-10 md:mb-0 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="mb-2 inline-block py-1 px-3 bg-black/50 rounded-full border border-roadmap-orange/30 animate-slide-in-bottom">
              <span className="text-sm font-medium text-roadmap-orange">Digital Innovation Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="text-gradient">Fueling brands.</span>
              <br />
              <span className="text-roadmap-orange animate-glow">One pixel at a time.</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 text-white max-w-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We create modern, high-performance digital experiences that 
              propel your brand forward in today's competitive landscape.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a href="#services">
              <Button className="bg-roadmap-orange hover:bg-roadmap-orange/90 text-black px-8 py-6 text-lg relative 
                                 shadow-[0_0_15px_rgba(242,124,34,0.5)] hover:shadow-[0_0_25px_rgba(242,124,34,0.7)] 
                                 transition-all duration-300 hover-lift hover-glow group">
                View Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              </a>
            </div>
          </div>
          
          <div className={`md:w-1/2 relative z-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative glassmorphism p-1 rounded-lg animate-pulse-glow hover-scale-rotate transition-all duration-500">
              <div className="aspect-video bg-black rounded overflow-hidden p-4 flex items-center justify-center">
                <div className="text-5xl font-bold flex flex-col items-center">
                  <div className="flex animate-fade-in-up">
                    <span className="text-roadmap-orange animate-glow">Web</span>
                    <span className="text-roadmap-orange/80">eros</span>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-roadmap-orange to-roadmap-orange/50 mt-2 animate-slide-in-bottom"></div>
                  <div className="text-base text-roadmap-orange/60 mt-2 animate-fade-in-up stagger-1">DIGITAL STUDIO</div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -top-6 -right-6 w-32 h-32 bg-roadmap-orange/10 rounded-full filter blur-xl animate-float"></div>
            <div aria-hidden="true" className="absolute -bottom-10 -left-10 w-40 h-40 bg-roadmap-orange/10 rounded-full filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
