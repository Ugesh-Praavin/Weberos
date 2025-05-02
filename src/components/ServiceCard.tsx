
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, price, features, popular, icon }: ServiceCardProps) => {
  return (
    <Card className={`hover-grow overflow-hidden border-white/10 bg-black/50 backdrop-blur-sm 
                     ${popular ? 'border-roadmap-orange border-2 relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-roadmap-orange text-black px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      <CardHeader className={`${popular ? 'bg-roadmap-orange/10' : ''}`}>
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-center text-2xl text-roadmap-orange">{title}</CardTitle>
        <CardDescription className="text-center text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center">
          <span className="text-3xl font-bold text-roadmap-orange">{price}</span>
        </div>
        <div className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-roadmap-orange flex-shrink-0 mr-3" />
              <span className="text-sm text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? 'bg-roadmap-orange hover:bg-roadmap-orange/90 text-black' : 'bg-black hover:bg-black/80 text-white border border-white/30'}`}>
          Select This Package
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
