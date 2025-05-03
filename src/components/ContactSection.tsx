import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    emailjs
      .sendForm(
        'service_m90v27j', // Replace with your EmailJS service ID
        'template_i4j7ke7', // Replace with your EmailJS template ID
        form,
        'Z9LNuq2sUFUcv9gCC' // Replace with your EmailJS user ID (or public key)
      )
      .then(
        () => {
          toast({
            title: 'Message sent!',
            description: "We'll get back to you as soon as possible.",
          });
          form.reset();
        },
        (error) => {
          toast({
            title: 'Error sending message',
            description: 'Please try again later.',
            variant: 'destructive',
          });
          console.error('EmailJS Error:', error);
        }
      );
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
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 rounded-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400"
                    placeholder="Sample@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  className="bg-white/10 border-roadmap-orange/50 text-white placeholder:text-gray-400"
                  placeholder="Website Project"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
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
