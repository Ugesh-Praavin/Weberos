import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "We gather requirements, plan site architecture, and establish project scope and timeline.",
      duration: "1-2 weeks"
    },
    {
      number: 2,
      title: "Design Phase",
      description: "We create wireframes and mockups, collect feedback, and finalize the visual design.",
      duration: "2-3 weeks"
    },
    {
      number: 3,
      title: "Development Phase",
      description: "We build frontend and backend components, integrate CMS, and implement responsive design.",
      duration: "3-4 weeks"
    },
    {
      number: 4,
      title: "Testing Phase",
      description: "We perform cross-browser testing, responsive checks, functionality tests, and optimization.",
      duration: "1 week"
    },
    {
      number: 5,
      title: "Revision & Finalization",
      description: "We incorporate client feedback, complete content, and make final adjustments.",
      duration: "1-2 weeks"
    },
    {
      number: 6,
      title: "Launch",
      description: "We set up hosting, deploy the site, perform final checks, and provide training.",
      duration: "1 week"
    },
    {
      number: 7,
      title: "Maintenance",
      description: "We provide ongoing updates, monitoring, content management, and support.",
      duration: "Ongoing"
    }
  ];

  return (
    <section id="process" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            The <span className="text-roadmap-orange">Journey</span> to Your Website
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Our streamlined development process ensures your project stays on track from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Journey line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-roadmap-orange hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 p-4 relative">
                  <Card className={`hover-grow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-roadmap-orange`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-white">
                        <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {step.number}
                        </span>
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white mb-2">{step.description}</p>
                      
                    </CardContent>
                  </Card>
                </div>

                {/* Circle marker for timeline - only visible on MD and up */}
                <div className="hidden md:flex items-center justify-center bg-black rounded-full w-10 h-10 border-4 border-roadmap-orange shadow-lg z-10">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
