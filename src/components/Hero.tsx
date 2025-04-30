
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              ✨ AI-Powered Resume Analysis
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Optimize Your Resume with <span className="gradient-text">AI Insights</span>
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered resume analyzer provides personalized feedback to help you stand out to employers and pass ATS systems.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button 
                className="bg-resume-blue hover:bg-resume-blue-dark"
                onClick={() => document.getElementById("upload")?.scrollIntoView({behavior: "smooth"})}
              >
                Analyze Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-resume-blue" />
                <span className="text-sm text-gray-500">Free Analysis</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-resume-blue" />
                <span className="text-sm text-gray-500">ATS Compatible</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-resume-blue" />
                <span className="text-sm text-gray-500">Instant Feedback</span>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none rounded-lg border bg-background p-4 shadow-md">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                <div className="space-y-4 p-6 text-center">
                  <div className="rounded-full bg-resume-blue h-16 w-16 mx-auto flex items-center justify-center">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Resume Analysis</h3>
                  <div className="flex justify-center gap-2">
                    <div className="h-2 w-24 rounded-full bg-resume-blue animate-pulse"></div>
                    <div className="h-2 w-12 rounded-full bg-resume-gray"></div>
                    <div className="h-2 w-16 rounded-full bg-resume-gray-dark"></div>
                  </div>
                  <p className="text-sm text-gray-500">Visualize your resume's strengths and areas for improvement</p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded bg-muted p-2">
                <div className="text-sm font-medium">Match Score</div>
                <div className="text-xl font-bold text-resume-blue">85%</div>
              </div>
              <div className="rounded bg-muted p-2">
                <div className="text-sm font-medium">Skills</div>
                <div className="text-xl font-bold text-resume-blue">12/15</div>
              </div>
              <div className="rounded bg-muted p-2">
                <div className="text-sm font-medium">ATS</div>
                <div className="text-xl font-bold text-resume-success">Passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
