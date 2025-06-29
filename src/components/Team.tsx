import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Code, Target } from 'lucide-react';

const Team = () => {
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

    const element = document.getElementById('team-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Ugesh Praavin D",
      role: "Lead Developer",
      icon: <Code className="h-8 w-8" />,
      description: "Architecting robust and scalable solutions that bring our creative visions to life."
    },
    {
      name: "Jyoshini Sri S",
      role: "Creative Director",
      icon: <Palette className="h-8 w-8" />,
      description: "Leading our creative vision and design direction to create stunning digital experiences."
    },
    {
      name: "Krithiga Devi SM",
      role: "Brand Strategist",
      icon: <Target className="h-8 w-8" />,
      description: "Crafting strategic brand narratives that connect and resonate with target audiences."
    }
  ];

  return (
    <section id="team-section" className="section-padding bg-black relative">
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-roadmap-orange/5 rounded-full filter blur-[120px] -z-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-roadmap-orange/5 rounded-full filter blur-[100px] -z-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block py-1 px-3 bg-black/50 rounded-full border border-roadmap-orange/30 mb-3 animate-slide-in-bottom">
            <span className="text-sm font-medium text-roadmap-orange">Meet Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in-up">
            Our <span className="text-roadmap-orange animate-glow">Team</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto animate-slide-in-bottom stagger-1">
            The passionate minds behind Weberos, working together to fuel brands one pixel at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className={`hover-lift hover-glow bg-black/50 border border-roadmap-orange/30 group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-roadmap-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-roadmap-orange/20 transition-all duration-300 hover-scale-rotate">
                  <div className="text-roadmap-orange group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-roadmap-orange transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-roadmap-orange font-semibold mb-4 group-hover:scale-105 transition-transform duration-300">
                  {member.role}
                </p>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 