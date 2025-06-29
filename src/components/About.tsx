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

    const element = document.getElementById('about-section');
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
    <section id="about-section" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              About <span className="text-roadmap-orange animate-glow">Weberos</span>
            </h2>
            <p className={`text-white/80 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Weberos started as a spark between college students who shared a passion for tech and creativity. In between lectures and late-night study sessions, we realized our free time could be more than just downtime; it could be our future. That's when Weberos was born.
            </p>
            <p className={`text-white/80 mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              What began as a simple idea to build websites for fun quickly grew into a mission to help others build their digital place. Today, we offer services like website development, SEO, and branding each project helping us learn, grow, and make an impact. We're not just building websites, we're building experience, one pixel at a time.
            </p>
            <div className={`p-4 bg-black border-l-4 border-roadmap-orange rounded transition-all duration-1000 delay-600 hover-lift hover-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="italic text-white/90">
                "Fueling Brands One Pixel at a Time"
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h3 className="text-2xl font-bold mb-6 animate-fade-in-up">
              Our <span className="text-roadmap-orange animate-glow">Approach</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approachItems.map((item, index) => (
                <Card 
                  key={index} 
                  className={`hover-lift hover-glow bg-black/50 border border-roadmap-orange/30 group transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-roadmap-orange mb-2 group-hover:scale-105 transition-transform duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
