
import { ResumeAnalysis, UploadedFile } from "@/types";

// This is a mock function simulating resume analysis
// In a real application, this would call an API to process the resume
export const analyzeResume = async (file: UploadedFile): Promise<ResumeAnalysis> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock analysis data
  const mockAnalysis: ResumeAnalysis = {
    score: 78,
    recommendations: [
      "Add more quantifiable achievements to your work experience",
      "Include relevant keywords from the job description",
      "Improve your skills section with more technical skills",
      "Use action verbs at the beginning of bullet points"
    ],
    keySkills: [
      "JavaScript", "React", "TypeScript", "HTML", "CSS", 
      "Node.js", "Git", "API Integration"
    ],
    missingSkills: [
      "GraphQL", "React Native", "Docker", "AWS", "CI/CD"
    ],
    keywords: {
      present: [
        "frontend", "development", "web application", "UI/UX", "responsive design", "testing"
      ],
      missing: [
        "agile methodology", "scrum", "product management", "user stories", "accessibility"
      ]
    },
    sections: [
      {
        name: "Contact Information",
        present: true,
        score: 95,
        feedback: "Contact information is complete and well-formatted."
      },
      {
        name: "Professional Summary",
        present: true,
        score: 70,
        feedback: "Your summary is good but could better highlight your unique value proposition."
      },
      {
        name: "Work Experience",
        present: true,
        score: 80,
        feedback: "Good use of bullet points, but add more measurable achievements."
      },
      {
        name: "Education",
        present: true,
        score: 90,
        feedback: "Education section is well structured and contains all necessary information."
      },
      {
        name: "Skills",
        present: true,
        score: 65,
        feedback: "Add more technical skills and organize them by category."
      },
      {
        name: "Projects",
        present: false,
        score: 0,
        feedback: "Consider adding a projects section to showcase your practical experience."
      },
      {
        name: "Certifications",
        present: false,
        score: 0,
        feedback: "Adding relevant certifications can strengthen your resume."
      }
    ],
    atsCompatible: true
  };
  
  return mockAnalysis;
};
