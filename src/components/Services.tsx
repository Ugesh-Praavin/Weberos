
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  // Simple car icon components
  const CompactIcon = () => (
    <div className="w-16 h-16 bg-roadmap-gray-100 rounded-full flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 6H7L3 12V18H5M17 6L19 12H5M17 6V12M5 12V18M5 18H19V12M19 18H21V12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 18C7 19.1046 6.10457 20 5 20C3.89543 20 3 19.1046 3 18C3 16.8954 3.89543 16 5 16C6.10457 16 7 16.8954 7 18Z" stroke="#f27c22" strokeWidth="2"/>
        <path d="M21 18C21 19.1046 20.1046 20 19 20C17.8954 20 17 19.1046 17 18C17 16.8954 17.8954 16 19 16C20.1046 16 21 16.8954 21 18Z" stroke="#f27c22" strokeWidth="2"/>
      </svg>
    </div>
  );

  const SedanIcon = () => (
    <div className="w-16 h-16 bg-roadmap-gray-100 rounded-full flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 17H16M3 17H5M19 17H21M12 5V3M10 5H14M5 9L7 13M7 5L8 9M17 5L16 9M19 9L17 13M3 9H7M17 9H21M5 9V13H19V9H5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20C8 21.1046 7.10457 22 6 22C4.89543 22 4 21.1046 4 20C4 18.8954 4.89543 18 6 18C7.10457 18 8 18.8954 8 20Z" stroke="#f27c22" strokeWidth="2"/>
        <path d="M20 20C20 21.1046 19.1046 22 18 22C16.8954 22 16 21.1046 16 20C16 18.8954 16.8954 18 18 18C19.1046 18 20 18.8954 20 20Z" stroke="#f27c22" strokeWidth="2"/>
      </svg>
    </div>
  );

  const SUVIcon = () => (
    <div className="w-16 h-16 bg-roadmap-gray-100 rounded-full flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H21M3 18H21M5 14H19M6 18V22M18 18V22M4 10L8 3H16L20 10M8 10H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14C8 15.1046 7.10457 16 6 16C4.89543 16 4 15.1046 4 14C4 12.8954 4.89543 12 6 12C7.10457 12 8 12.8954 8 14Z" stroke="#f27c22" strokeWidth="2"/>
        <path d="M20 14C20 15.1046 19.1046 16 18 16C16.8954 16 16 15.1046 16 14C16 12.8954 16.8954 12 18 12C19.1046 12 20 12.8954 20 14Z" stroke="#f27c22" strokeWidth="2"/>
      </svg>
    </div>
  );

  const CustomIcon = () => (
    <div className="w-16 h-16 bg-roadmap-gray-100 rounded-full flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V16M12 16L16 12M12 16L8 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11C21 14.7497 21 16.6246 20.0451 17.9389C19.7367 18.3634 19.3634 18.7367 18.9389 19.0451C17.6246 20 15.7497 20 12 20C8.25027 20 6.3754 20 5.06107 19.0451C4.6366 18.7367 4.26331 18.3634 3.95491 17.9389C3 16.6246 3 14.7497 3 11Z" stroke="#f27c22" strokeWidth="2"/>
      </svg>
    </div>
  );

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-roadmap-orange">Vehicle</span>
          </h2>
          <p className="text-roadmap-gray-300 max-w-2xl mx-auto">
            Select the perfect website package for your journey. Each option provides different features and capabilities to match your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Compact"
            description="Perfect for personal portfolios and simple landing pages"
            price="Starting at $799"
            icon={<CompactIcon />}
            features={[
              "Single page or up to 3 pages",
              "Responsive design",
              "Contact form",
              "Basic SEO setup",
              "2 rounds of revisions",
              "Hosting setup assistance",
              "1 month post-launch support"
            ]}
          />
          
          <ServiceCard
            title="Sedan"
            description="Ideal for small business websites"
            price="Starting at $1,499"
            icon={<SedanIcon />}
            popular={true}
            features={[
              "Up to 5-7 pages",
              "Responsive design",
              "Contact forms",
              "Social media integration",
              "Basic SEO optimization",
              "Google Analytics setup",
              "CMS implementation",
              "3 rounds of revisions",
              "3 months post-launch support"
            ]}
          />
          
          <ServiceCard
            title="SUV"
            description="Perfect for blogs and content-heavy websites"
            price="Starting at $2,499"
            icon={<SUVIcon />}
            features={[
              "Up to 10 pages + blog structure",
              "Advanced responsive design",
              "Contact and custom forms",
              "Social media integration",
              "Comprehensive SEO setup",
              "Content management system",
              "Google Analytics integration",
              "Newsletter signup capability",
              "4 rounds of revisions",
              "6 months post-launch support"
            ]}
          />
          
          <ServiceCard
            title="Custom Build"
            description="For specialized websites with unique requirements"
            price="Custom Quote"
            icon={<CustomIcon />}
            features={[
              "Custom number of pages",
              "Custom functionality development",
              "E-commerce capabilities",
              "Advanced integrations",
              "Custom animations",
              "Comprehensive SEO strategy",
              "Training sessions for client team",
              "Unlimited revisions (within scope)",
              "12 months post-launch support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
