
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeAnalysis } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalysisResultsProps {
  analysis: ResumeAnalysis | null;
}

const AnalysisResults = ({ analysis }: AnalysisResultsProps) => {
  if (!analysis) return null;

  return (
    <section className="py-12 md:py-16 animate-fade-in">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-muted p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Resume Analysis Results</h2>
                <p className="text-muted-foreground">
                  AI-powered insights to improve your resume
                </p>
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <Download className="h-4 w-4" /> Download Report
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Overall Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Progress value={analysis.score} className="h-3" />
                    <span className="ml-4 text-2xl font-bold">{analysis.score}%</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">ATS Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  {analysis.atsCompatible ? (
                    <div className="flex items-center text-resume-success">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-medium">ATS Compatible</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-resume-error">
                      <XCircle className="h-5 w-5 mr-2" />
                      <span className="font-medium">Not ATS Compatible</span>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Key Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold mr-2">
                      {analysis.keySkills.length}
                    </span>
                    <span className="text-muted-foreground">skills detected</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="sections">Sections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Key Recommendations</CardTitle>
                  <CardDescription>
                    These suggestions will help you improve your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-resume-blue mt-0.5" />
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skills Analysis</CardTitle>
                  <CardDescription>
                    Review your detected skills and potential skills to add
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Detected Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keySkills.map((skill, index) => (
                        <Badge key={index} className="bg-resume-blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Suggested Skills to Add</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.missingSkills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-resume-blue-light text-resume-blue-dark">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="keywords" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Analysis</CardTitle>
                  <CardDescription>
                    Keywords are crucial for passing ATS systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Present Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywords.present.map((keyword, index) => (
                        <Badge key={index} className="bg-resume-success">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Missing Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywords.missing.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="border-resume-error text-resume-error">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sections" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Section Analysis</CardTitle>
                  <CardDescription>
                    Detailed feedback on each section of your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis.sections.map((section, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {section.present ? (
                              <CheckCircle className="h-5 w-5 text-resume-success" />
                            ) : (
                              <XCircle className="h-5 w-5 text-resume-error" />
                            )}
                            <h3 className="font-semibold">{section.name}</h3>
                          </div>
                          {section.present && (
                            <Badge 
                              className={
                                section.score >= 80 ? "bg-resume-success" : 
                                section.score >= 60 ? "bg-resume-warning" : 
                                "bg-resume-error"
                              }
                            >
                              {section.score}%
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{section.feedback}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AnalysisResults;
