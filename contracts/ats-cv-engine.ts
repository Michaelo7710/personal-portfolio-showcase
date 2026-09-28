/**
 * Public Contract Specification: ATS CV Generator Engine
 * Module: Personal Portfolio AI (Production Interface)
 * 
 * Provides type contracts for client requests, Gemini multimodal input,
 * ATS Markdown output, and Semantic Vacancy Guard responses (HTTP 422).
 */

export interface AtsCvGenerationRequest {
  jobTitle?: string;
  companyName?: string;
  jobDescription?: string;
  imageFile?: File | Blob;
}

export interface AtsCvGenerationSuccessResponse {
  success: true;
  cvMarkdown: string;
  meta: {
    targetJobTitle: string;
    targetCompany: string;
    model: string;
    generatedAt: string;
    wordCount: number;
    matchScoreEstimate: number;
  };
}

export interface AtsCvGenerationErrorResponse {
  success: false;
  error: string;
  code: "INVALID_INPUT" | "NON_VACANCY_IMAGE" | "AI_SERVICE_UNAVAILABLE" | "INTERNAL_SERVER_ERROR";
  details?: {
    reason?: string;
    suggestedAction?: string;
    detectedVisualContent?: string;
  };
}

export type AtsCvApiResponse = AtsCvGenerationSuccessResponse | AtsCvGenerationErrorResponse;

/**
 * Semantic Vacancy Guard Verification Protocol
 * Evaluated before generating resume content. If isValidJobVacancy is false,
 * the API terminates with HTTP 422 Unprocessable Entity.
 */
export interface SemanticVacancyVerification {
  isValidJobVacancy: boolean;
  confidenceScore: number; // 0.0 to 1.0
  rejectionReason?: string;
  extractedMetadata?: {
    detectedJobTitle?: string;
    detectedCompany?: string;
    detectedRequirements?: string[];
  };
}

/**
 * Standard ATS Resume Schema Structure (Reverse-Chronological)
 */
export interface AtsResumeStructure {
  header: {
    fullName: string;
    roleHeadline: string;
    contact: {
      email: string;
      linkedIn: string;
      gitHubShowcase: string;
      portfolioUrl: string;
      location: string;
    };
  };
  professionalSummary: string;
  coreCompetencies: {
    architectureAndSystems: string[];
    frontendAndMobile: string[];
    backendAndDevOps: string[];
    aiAndAutomation: string[];
  };
  featuredEngineeringImpact: Array<{
    projectName: string;
    role: string;
    metrics: string[];
    starHighlights: {
      situation: string;
      task: string;
      action: string;
      result: string;
    };
  }>;
  educationAndCredentials: {
    trackTitle: "Independent Systems Engineering Track & Continuous Specializations";
    certificationsAndAudits: string[];
  };
}
