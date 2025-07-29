import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
  // Use a more descriptive state: 'idle', 'submitting', 'success'
  const [formState, setFormState] = useState('idle');

  const handleFormSubmit = () => {
    // When submit is clicked, we start the "submitting" process
    setFormState('submitting');
  };

  const handleFormCompletion = () => {
    // This is called by the iframe's onLoad
    // We only transition to 'success' if we were in the 'submitting' state
    if (formState === 'submitting') {
      setFormState('success');
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Interested in our navigation technology or looking to collaborate? 
            We'd love to discuss partnerships and investment opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 relative min-h-[450px]">
              
              {/* === THANK YOU MESSAGE (Fades in) === */}
              <div 
                id="thank-you-message" 
                // Conditionally apply classes for fade-in effect
                className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-opacity duration-1000 ease-in-out
                            ${formState === 'success' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your message has been sent successfully.</p>
              </div>

              {/* === THE FORM (Fades out) === */}
              <div 
                id="contact-form-container"
                // Conditionally apply classes for fade-out effect
                className={`transition-opacity duration-1000 ease-in-out
                            ${formState !== 'idle' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <form
                  name="gform"
                  action="https://docs.google.com/forms/d/e/1FAIpQLSebo5KcGcsdCyPSQ1d5goYca50UtCbXO_YWazYKv7Kjja33NA/viewform?usp=pp_url&"
                  target="hidden_iframe"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  {/* ... Your form inputs (name, email, etc.) go here ... */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input name="entry.956050724" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input name="entry.1351047289" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input name="entry.1787723461" placeholder="Your company or organisation" required />
                    </div>
                  </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input name="entry.2115839708" placeholder="What would you like to discuss?" required />
                    </div>
                  </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Input name="entry.955784430" placeholder="Tell us about your interest..." required />
                    </div>
                  </div>
                  <Button type="submit" variant="hero" className="w-full group" disabled={formState !== 'idle'}>
                    {formState === 'submitting' ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                    ) : (
                      <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>

        <iframe
          name="hidden_iframe"
          style={{ display: 'none' }}
          onLoad={handleFormCompletion}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
