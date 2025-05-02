
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
    <Card className={`hover-grow overflow-hidden border-weberos-dark-300 bg-weberos-dark-200/70 backdrop-blur-sm 
                     ${popular ? 'border-weberos-blue border-2 relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-weberos-blue text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      <CardHeader className={`${popular ? 'bg-weberos-blue/10' : ''}`}>
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-center text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-center text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center">
          <span className="text-3xl font-bold text-weberos-blue">{price}</span>
        </div>
        <div className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-weberos-blue flex-shrink-0 mr-3" />
              <span className="text-sm text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${popular ? 'bg-weberos-blue hover:bg-weberos-blue/90' : 'bg-weberos-dark-100 hover:bg-weberos-dark-100/80 border border-weberos-blue/30'}`}>
          Select This Package
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
