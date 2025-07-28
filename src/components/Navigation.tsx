import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Navigation as NavIcon } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className="rounded">
                <img src="/Zero_Logo.svg" alt="Logo Icon" className="w-12 h-12" />
              </div>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Our Tests
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Our Tests
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button size="sm" className="w-full mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
