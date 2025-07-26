import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Users, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Interested in our navigation technology or looking to collaborate? 
            We'd love to discuss partnerships and investment opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Your company or organization" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What would you like to discuss?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your interest in our algorithm research or potential collaboration..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                <Button variant="hero" className="w-full group">
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Email card */}
            <Card className="border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-accent">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-sm text-muted-foreground">Get in touch directly</p>
                  </div>
                </div>
                <p className="text-primary font-medium">hello@yourcompany.com</p>
              </CardContent>
            </Card>

            {/* Collaboration card */}
            <Card className="border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-tech">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Partnerships</h4>
                    <p className="text-sm text-muted-foreground">Explore collaboration</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  We're open to partnerships with organizations interested in advancing 
                  algorithmic research and development.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Investors card */}
            <Card className="border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-data">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Investors</h4>
                    <p className="text-sm text-muted-foreground">Join our journey</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Interested in supporting groundbreaking algorithm research? 
                  Let's discuss investment opportunities.
                </p>
                <Button variant="outline" size="sm">
                  Investment Info
                </Button>
              </CardContent>
            </Card>

            {/* Response time info */}
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h5 className="font-medium mb-2">Response Time</h5>
              <p className="text-sm text-muted-foreground">
                We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;