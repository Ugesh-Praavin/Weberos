
import React from 'react';
import ServiceCard from './ServiceCard';
import { Code, Layout, ShoppingCart, Star } from 'lucide-react';

const Services = () => {
  // Modern icon components
  const CompactIcon = () => (
    <div className="w-16 h-16 bg-weberos-dark-100 rounded-lg flex items-center justify-center text-weberos-blue">
      <Layout className="h-8 w-8" />
    </div>
  );

  const SedanIcon = () => (
    <div className="w-16 h-16 bg-weberos-dark-100 rounded-lg flex items-center justify-center text-weberos-blue">
      <Code className="h-8 w-8" />
    </div>
  );

  const SUVIcon = () => (
    <div className="w-16 h-16 bg-weberos-dark-100 rounded-lg flex items-center justify-center text-weberos-blue">
      <Star className="h-8 w-8" />
    </div>
  );

  const CustomIcon = () => (
    <div className="w-16 h-16 bg-weberos-dark-100 rounded-lg flex items-center justify-center text-weberos-blue">
      <ShoppingCart className="h-8 w-8" />
    </div>
  );

  return (
    <section id="services" className="section-padding bg-weberos-dark-100 relative">
      {/* Background Effects */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-weberos-blue/5 rounded-full filter blur-[120px] -z-0"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-weberos-accent/5 rounded-full filter blur-[100px] -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-white/5 rounded-full border border-weberos-blue/30 mb-3">
            <span className="text-sm font-medium text-weberos-blue">Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tailored <span className="text-weberos-blue">Digital Packages</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Select the perfect website solution for your journey. Each option is designed to match your specific business needs and goals.
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
