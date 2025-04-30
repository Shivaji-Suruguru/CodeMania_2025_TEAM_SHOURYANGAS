
import React from 'react';
import { FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6 text-resume-blue" />
              <span className="text-xl font-bold">ResumAI</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              AI-powered resume analysis to help you optimize your resume, pass ATS systems, and land your dream job.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</a>
              </li>
              <li>
                <a href="#upload" className="text-muted-foreground hover:text-foreground">Upload Resume</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Resume Tips</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">ATS Guide</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Career Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ResumAI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
