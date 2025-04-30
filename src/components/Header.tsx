
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-resume-blue" />
          <span className="text-xl font-bold">ResumAI</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium transition-colors hover:text-resume-blue">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-resume-blue">
            How it Works
          </a>
          <a href="#upload" className="text-sm font-medium transition-colors hover:text-resume-blue">
            Upload Resume
          </a>
          <Button variant="default" className="bg-resume-blue hover:bg-resume-blue-dark">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b animate-fade-in">
          <nav className="container flex flex-col py-4 space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#upload" 
              className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Upload Resume
            </a>
            <Button 
              variant="default" 
              className="bg-resume-blue hover:bg-resume-blue-dark w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
