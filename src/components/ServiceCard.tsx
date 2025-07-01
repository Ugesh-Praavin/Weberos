import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, price, features, popular, icon }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`hover-lift hover-glow overflow-hidden border-white/10 backdrop-blur-sm transition-all duration-500 group
                   ${popular ? 'border-roadmap-orange border-2 relative' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-roadmap-orange text-black px-4 py-1 text-sm font-medium animate-pulse">
          Popular
        </div>
      )}
      <CardHeader className={`${popular ? 'bg-roadmap-orange/10' : ''} transition-all duration-300`}>
        <div className="flex justify-center mb-4">
          <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
        </div>
        <CardTitle className="text-center text-2xl text-roadmap-orange group-hover:scale-105 transition-transform duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-white/70 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center">
          <span className="text-3xl font-bold text-roadmap-orange group-hover:scale-110 transition-transform duration-300">
            {price}
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start transition-all duration-300"
              style={{ 
                transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
                transitionDelay: `${index * 50}ms`
              }}
            >
              <Check className="h-5 w-5 text-roadmap-orange flex-shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href="#contact" className="w-full">
        <Button className={`w-full group/btn transition-all duration-300 ${
          popular 
            ? 'bg-roadmap-orange hover:bg-roadmap-orange/90 text-black hover:shadow-[0_0_20px_rgba(242,124,34,0.5)]' 
            : 'bg-roadmap-orange/20 hover:bg-roadmap-orange/30 text-white border border-roadmap-orange/30 hover:border-roadmap-orange/50'
        }`}>
          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
            Select This Package
          </span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
