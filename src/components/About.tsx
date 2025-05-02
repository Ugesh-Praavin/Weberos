
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const webDevItems = [
    {
      title: "Framework",
      description: "The foundational structure that powers your website and ensures everything runs smoothly."
    },
    {
      title: "Components",
      description: "Modular building blocks that create consistent, reusable elements across your site."
    },
    {
      title: "Interface",
      description: "The visual layer where users interact with your content and brand story."
    },
    {
      title: "Performance",
      description: "Speed and efficiency optimizations that keep visitors engaged and satisfied."
    },
    {
      title: "Aesthetics",
      description: "Visual design elements that establish your brand identity and emotional connection."
    },
    {
      title: "Experience",
      description: "The user journey and site architecture that guides visitors to their destination."
    }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-roadmap-orange">Weberos</span>
            </h2>
            <p className="text-white/80 mb-6">
              Weberos specializes in creating modern, high-performance websites that elevate brands in the 
              digital space. Our development approach emphasizes clean design, powerful functionality, 
              and exceptional user experience.
            </p>
            <p className="text-white/80 mb-6">
              Our mission is to fuel brands one pixel at a time, creating digital experiences that 
              captivate audiences and drive measurable results. We believe in transparency, innovation, 
              and delivering excellence in every project.
            </p>
            <div className="p-4 bg-black border-l-4 border-roadmap-orange rounded">
              <p className="italic text-white/90">
                "Fueling Brands One Pixel at a Time"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Our <span className="text-roadmap-orange">Development</span> Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {webDevItems.map((item, index) => (
                <Card key={index} className="hover-grow bg-black/50 border border-roadmap-orange/30">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-roadmap-orange mb-2">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.description}</p>
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
