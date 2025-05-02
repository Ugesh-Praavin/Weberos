
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const carThemeItems = [
    {
      title: "Chassis",
      description: "The website structure/framework that provides the foundation of your online presence."
    },
    {
      title: "Engine",
      description: "The backend functionality that powers your website and makes everything run smoothly."
    },
    {
      title: "Dashboard",
      description: "The CMS or admin interface that gives you control over your content."
    },
    {
      title: "Wheels",
      description: "The design elements and UI components that help your site move and engage users."
    },
    {
      title: "Paint Job",
      description: "The color scheme and visual style that makes your brand stand out."
    },
    {
      title: "Navigation",
      description: "The user journey and site architecture that guides visitors to their destination."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-roadmap-orange">RoadMap</span> Designs
            </h2>
            <p className="text-roadmap-gray-300 mb-6">
              RoadMap Designs specializes in creating simple, creative, and effective websites for various client needs. 
              Our car-themed approach emphasizes the journey of web development, where clients can "customize their ride" 
              by selecting various components for their digital presence.
            </p>
            <p className="text-roadmap-gray-300 mb-6">
              Our mission is to create streamlined, high-performance websites that help our clients navigate the digital 
              landscape with confidence and style. We believe in transparency, collaboration, and delivering exceptional results.
            </p>
            <div className="p-4 bg-roadmap-gray-100 border-l-4 border-roadmap-orange rounded">
              <p className="italic text-roadmap-gray-300">
                "Drive Your Digital Presence Forward"
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Our Car-Themed Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {carThemeItems.map((item, index) => (
                <Card key={index} className="hover-grow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-roadmap-orange mb-2">{item.title}</h4>
                    <p className="text-sm text-roadmap-gray-300">{item.description}</p>
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
