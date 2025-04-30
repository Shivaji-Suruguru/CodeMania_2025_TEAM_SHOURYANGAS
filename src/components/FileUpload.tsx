
import React, { useState, useCallback, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, X, AlertCircle, Loader2 } from "lucide-react";
import { AnalysisStatus, UploadedFile } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { analyzeResume } from "@/lib/analysis";

interface FileUploadProps {
  onAnalysisComplete: (result: any) => void;
  analysisStatus: AnalysisStatus;
  setAnalysisStatus: React.Dispatch<React.SetStateAction<AnalysisStatus>>;
}

const FileUpload = ({ onAnalysisComplete, analysisStatus, setAnalysisStatus }: FileUploadProps) => {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const { toast } = useToast();
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file type
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
      });
    }
  };
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      
      // Check file type
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(droppedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (max 5MB)
      if (droppedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setFile({
        name: droppedFile.name,
        size: droppedFile.size,
        type: droppedFile.type,
        lastModified: droppedFile.lastModified,
      });
    }
  }, [toast]);
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);
  
  const removeFile = () => {
    setFile(null);
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };
  
  const handleAnalyze = async () => {
    if (!file) return;
    
    setAnalysisStatus('analyzing');
    
    try {
      // Simulate API call to analyze resume
      const result = await analyzeResume(file);
      onAnalysisComplete(result);
      setAnalysisStatus('complete');
      toast({
        title: "Analysis complete",
        description: "Your resume has been successfully analyzed.",
      });
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysisStatus('error');
      toast({
        title: "Analysis failed",
        description: "We couldn't analyze your resume. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <section id="upload" className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Upload Your Resume
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get instant AI-powered feedback on your resume. Upload a PDF or Word document to begin.
          </p>
        </div>
        
        <div className="mx-auto mt-8 max-w-md">
          <Card className="border-2 border-dashed">
            <CardHeader>
              <CardTitle>Resume Upload</CardTitle>
              <CardDescription>
                Supported formats: PDF, DOC, DOCX
              </CardDescription>
            </CardHeader>
            <CardContent>
              {file ? (
                <div className="rounded-md bg-muted p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-8 w-8 text-resume-blue" />
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={removeFile}
                      disabled={analysisStatus === 'analyzing'}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove file</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <Upload className="h-10 w-10 text-muted-foreground" />
                  <p className="mt-4 text-sm font-medium">
                    Drag and drop your resume here, or click to browse
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Max file size: 5MB
                  </p>
                  <label htmlFor="file-upload">
                    <div className="mt-4 cursor-pointer rounded-md bg-resume-blue px-4 py-2 text-sm font-medium text-white hover:bg-resume-blue-dark">
                      Select File
                    </div>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                  />
                </div>
              )}
              
              {analysisStatus === 'error' && (
                <div className="mt-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm">An error occurred. Please try again.</span>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-resume-blue hover:bg-resume-blue-dark"
                disabled={!file || analysisStatus === 'analyzing'}
                onClick={handleAnalyze}
              >
                {analysisStatus === 'analyzing' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    Analyzing...
                  </>
                ) : (
                  <>Analyze Resume</>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FileUpload;
