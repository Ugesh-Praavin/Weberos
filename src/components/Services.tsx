import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { Code, Search, Share2 } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Modern icon components
  const WebDevIcon = () => (
    <div className="w-16 h-16 rounded-lg flex items-center justify-center text-roadmap-orange hover-scale-rotate transition-all duration-300">
      <Code className="h-8 w-8" />
    </div>
  );

  const SEOIcon = () => (
    <div className="w-16 h-16 rounded-lg flex items-center justify-center text-roadmap-orange hover-scale-rotate transition-all duration-300">
      <Search className="h-8 w-8" />
    </div>
  );

  const SocialMediaIcon = () => (
    <div className="w-16 h-16 rounded-lg flex items-center justify-center text-roadmap-orange hover-scale-rotate transition-all duration-300">
      <Share2 className="h-8 w-8" />
    </div>
  );

  return (
    <section id="services" className="section-padding bg-black relative">
      {/* Background Effects */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-roadmap-orange/5 rounded-full filter blur-[120px] -z-0 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-roadmap-orange/5 rounded-full filter blur-[100px] -z-0 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block py-1 px-3 rounded-full border border-roadmap-orange/30 mb-3 animate-slide-in-bottom">
            <span className="text-sm font-medium text-roadmap-orange">Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in-up">
            Tailored <span className="text-roadmap-orange">Digital Packages</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto animate-slide-in-bottom stagger-1">
            Select the perfect website solution for your journey. Each option is designed to match your specific business needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.1s' }}>
            <ServiceCard
              title="SEO & SEM Management"
              description="Boost your online visibility and drive organic traffic"
              price="Custom Quote"
              icon={<SEOIcon />}
              features={[
                "Google Analytics",
                "Monthly Detailed Reporting",
                "Keyword Research",
                "Content Optimization",
                "Search Engine Submission"
              ]}
            />
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.3s' }}>
            <ServiceCard
              title="Web Design & Development"
              description="Complete website solutions from concept to launch"
              price="Custom Quote"
              icon={<WebDevIcon />}
              popular={true}
              features={[
                "Responsive Design",
                "Static or Interactive",
                "Domain Management",
                "Hosting",
                "Email Setup",
                "Database Design"
              ]}
            />
          </div>
          
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: '0.5s' }}>
            <ServiceCard
              title="Social Media Marketing"
              description="Build your brand presence across all social platforms"
              price="Custom Quote"
              icon={<SocialMediaIcon />}
              features={[
                "Account Management/Setup",
                "Social Strategy",
                "Twitter, LinkedIn",
                "Pinterest, Instagram, etc."
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
