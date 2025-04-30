
export interface ResumeAnalysis {
  score: number;
  recommendations: string[];
  keySkills: string[];
  missingSkills: string[];
  keywords: {
    present: string[];
    missing: string[];
  };
  sections: {
    name: string;
    present: boolean;
    score: number;
    feedback: string;
  }[];
  atsCompatible: boolean;
}

export type AnalysisStatus = "idle" | "uploading" | "analyzing" | "complete" | "error";

export interface UploadedFile {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}
