
import React, { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FileUpload from "@/components/FileUpload";
import AnalysisResults from "@/components/AnalysisResults";
import Footer from "@/components/Footer";
import { AnalysisStatus, ResumeAnalysis } from "@/types";
import { CheckCircle, BarChart2, FileSearch, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [analysisStatus, setAnalysisStatus] = useState<AnalysisStatus>("idle");
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysis | null>(null);

  const handleAnalysisComplete = (result: ResumeAnalysis) => {
    setAnalysisResult(result);
    window.scrollTo({ top: document.getElementById("results")?.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section id="features" className="py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Powerful Resume Analysis Features
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get comprehensive insights to improve your resume and increase your chances of landing interviews.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-resume-blue/10 flex items-center justify-center">
                    <BarChart2 className="h-5 w-5 text-resume-blue" />
                  </div>
                  <CardTitle>ATS Compatibility</CardTitle>
                  <CardDescription>
                    Check if your resume will pass through Applicant Tracking Systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Format and layout analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Keyword optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Parsing accuracy check</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-resume-blue/10 flex items-center justify-center">
                    <FileSearch className="h-5 w-5 text-resume-blue" />
                  </div>
                  <CardTitle>Content Analysis</CardTitle>
                  <CardDescription>
                    In-depth review of your resume's content quality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Achievement-focused feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Action verb analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Clarity and conciseness check</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-resume-blue/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-resume-blue" />
                  </div>
                  <CardTitle>Skills Matching</CardTitle>
                  <CardDescription>
                    Identify missing skills and relevant keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Industry-specific skill suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Technical skill assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Soft skills evaluation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mb-2 w-10 h-10 rounded-full bg-resume-blue/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-resume-blue" />
                  </div>
                  <CardTitle>Format Check</CardTitle>
                  <CardDescription>
                    Ensure your resume follows best formatting practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Readability assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Section organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-resume-success mt-0.5" />
                      <span>Consistent styling check</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get actionable feedback on your resume in just three simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-resume-blue text-white flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-muted-foreground">
                  Upload your resume in PDF or Word format. Our system supports various resume layouts.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-resume-blue text-white flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your resume for content quality, format, keywords, and ATS compatibility.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-resume-blue text-white flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                <p className="text-muted-foreground">
                  Receive detailed feedback and actionable recommendations to improve your resume.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* File Upload Section */}
        <FileUpload 
          onAnalysisComplete={handleAnalysisComplete}
          analysisStatus={analysisStatus}
          setAnalysisStatus={setAnalysisStatus}
        />
        
        {/* Results Section (only shown after analysis) */}
        {analysisResult && (
          <div id="results">
            <AnalysisResults analysis={analysisResult} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
