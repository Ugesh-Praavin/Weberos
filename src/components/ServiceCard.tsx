
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
    <Card className={`hover-grow overflow-hidden ${popular ? 'border-roadmap-orange border-2 relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-roadmap-orange text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      <CardHeader className={`${popular ? 'bg-roadmap-orange/10' : ''}`}>
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-center text-2xl">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <div className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-roadmap-orange flex-shrink-0 mr-3" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? 'bg-roadmap-orange hover:bg-roadmap-orange/90' : 'bg-roadmap-black hover:bg-roadmap-black/90'}`}>
          Select This Package
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
