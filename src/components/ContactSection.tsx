
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form after submission
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-roadmap-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-roadmap-orange">Start</span> Your Journey?
          </h2>
          <p className="text-roadmap-gray-300 max-w-2xl mx-auto">
            Contact us today to discuss how we can help drive your digital presence forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="mb-8">
              Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your project!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-roadmap-orange rounded-full flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-roadmap-gray-300">info@roadmapdesigns.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-roadmap-orange rounded-full flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C19.0252 21 19.5422 20.9683 20.0497 20.9071C20.2807 20.8751 20.5 20.7072 20.5 20.4736V17.4331C20.5 17.2107 20.3474 17.0191 20.1356 16.9556L16.4612 15.8562C16.2097 15.7825 15.9404 15.8452 15.7544 16.0313L14.7194 17.0662C14.5102 17.2754 14.1952 17.3324 13.925 17.2039C11.3999 16.0074 9.49261 14.1001 8.2961 11.575C8.16756 11.3048 8.22462 10.9899 8.43377 10.7806L9.46885 9.74561C9.65489 9.55958 9.7175 9.29031 9.64382 9.03885L8.54439 5.36438C8.48091 5.15267 8.28929 5 8.06694 5H5.02636C4.79282 5 4.62496 5.21933 4.59293 5.45035C4.5317 5.95777 4.5 6.47483 4.5 7C4.5 14.4558 10.5442 20.5 18 20.5C18.5252 20.5 19.0422 20.4683 19.5497 20.4071C19.7807 20.3751 20 20.2072 20 19.9736V16.9331C20 16.7107 19.8474 16.5191 19.6356 16.4556L15.9612 15.3562C15.7097 15.2825 15.4404 15.3452 15.2544 15.5313L14.2194 16.5662C14.0102 16.7754 13.6952 16.8324 13.425 16.7039C10.8999 15.5074 8.99261 13.6001 7.7961 11.075C7.66756 10.8048 7.72462 10.4899 7.93377 10.2806L8.96885 9.24561C9.15489 9.05958 9.2175 8.79031 9.14382 8.53885L8.04439 4.86438C7.98091 4.65267 7.78929 4.5 7.56694 4.5H4.52636C4.29282 4.5 4.12496 4.71933 4.09293 4.95035C4.0317 5.45777 4 5.97483 4 6.5C4 13.9558 10.0442 20 17.5 20C18.0252 20 18.5422 19.9683 19.0497 19.9071C19.2807 19.8751 19.5 19.7072 19.5 19.4736V16.4331C19.5 16.2107 19.3474 16.0191 19.1356 15.9556L15.4612 14.8562C15.2097 14.7825 14.9404 14.8452 14.7544 15.0313L13.7194 16.0662C13.5102 16.2754 13.1952 16.3324 12.925 16.2039C10.3999 15.0074 8.49261 13.1001 7.2961 10.575C7.16756 10.3048 7.22462 9.98986 7.43377 9.78065L8.46885 8.74561C8.65489 8.55958 8.7175 8.29031 8.64382 8.03885L7.54439 4.36438C7.48091 4.15267 7.28929 4 7.06694 4H4.02636C3.79282 4 3.62496 4.21933 3.59293 4.45035C3.5317 4.95777 3.5 5.47483 3.5 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-roadmap-gray-300">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-roadmap-orange rounded-full flex items-center justify-center mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-roadmap-gray-300">123 Web Ave, Digital City, CA 94103</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name" 
                    required 
                    className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  id="subject" 
                  required 
                  className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400" 
                  placeholder="Website Project"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400 min-h-[120px]" 
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-roadmap-orange hover:bg-roadmap-orange/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
