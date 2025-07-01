import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const approachItems = [
    {
      title: "Learning",
      description: "Every project is an opportunity to grow, learn new technologies, and expand our skills."
    },
    {
      title: "Innovation",
      description: "We bring fresh perspectives and creative solutions, just like we did in those late-night study sessions."
    },
    {
      title: "Passion",
      description: "Our love for tech and creativity drives us to deliver exceptional results for every client."
    },
    {
      title: "Growth",
      description: "We're constantly evolving, just like we did from college students to professional developers."
    },
    {
      title: "Impact",
      description: "We focus on making a real difference, helping others build their digital presence."
    },
    {
      title: "Experience",
      description: "Building websites isn't just about code—it's about creating meaningful digital experiences."
    }
  ];

  return (
    <section id="about" className="section-padding bg-black relative">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-roadmap-orange/5 rounded-full filter blur-[120px] -z-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-roadmap-orange/5 rounded-full filter blur-[100px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* About Us Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block py-1 px-3 rounded-full border border-roadmap-orange/30 mb-6 animate-slide-in-bottom">
            <span className="text-sm font-medium text-roadmap-orange">Our Story</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in-up">
            About <span className="text-roadmap-orange">Weberos</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg text-white/80 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Weberos started as a spark between college students who shared a passion for tech and creativity. In between lectures and late-night study sessions, we realized our free time could be more than just downtime; it could be our future. That's when Weberos was born.
            </p>
            <p className={`text-lg text-white/80 mb-10 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              What began as a simple idea to build websites for fun quickly grew into a mission to help others build their digital place. Today, we offer services like website development, SEO, and branding each project helping us learn, grow, and make an impact. We're not just building websites, we're building experience, one pixel at a time.
            </p>
            <div className={`inline-block p-6 border-2 border-roadmap-orange/30 rounded-xl transition-all duration-1000 delay-600 hover-lift hover-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="italic text-xl text-roadmap-orange font-medium">
                "Fueling Brands One Pixel at a Time"
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-block py-1 px-3 rounded-full border border-roadmap-orange/30 mb-4 animate-slide-in-bottom">
              <span className="text-sm font-medium text-roadmap-orange">How We Work</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up">
              Our <span className="text-roadmap-orange">Approach</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a proven methodology that ensures every project delivers exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachItems.map((item, index) => (
              <Card 
                key={index} 
                className={`hover-lift hover-glow border border-roadmap-orange/30 group transition-all duration-500 relative overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-roadmap-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 bg-roadmap-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-roadmap-orange/20 transition-all duration-300">
                    <span className="text-roadmap-orange font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-roadmap-orange mb-3 group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
