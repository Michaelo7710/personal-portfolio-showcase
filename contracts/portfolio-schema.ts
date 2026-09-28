/**
 * Public Contract Specification: Portfolio Case Study & Catalog Schema
 * Module: Personal Portfolio AI (Production Interface)
 * 
 * Defines type contracts for MDX case studies, STAR methodology data,
 * architecture deep-dive sections, and public showcase links.
 */

export interface StarMethodologyFramework {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface SystemArchitectureMetric {
  label: string;
  value: string;
  baseline?: string;
  improvementPercentage?: string;
}

export interface ProjectCaseStudyMeta {
  slug: string;
  title: string;
  tagline: string;
  category: "mobile" | "fullstack" | "fintech" | "ai-systems" | "tooling";
  role: string;
  duration: string;
  featured: boolean;
  order: number;
  techStack: string[];
  metrics: SystemArchitectureMetric[];
  starFramework: StarMethodologyFramework;
  keyEngineeringDecisions: string[];
  publicShowcaseUrl?: string;
  liveDemoUrl?: string;
  content?: string; // Full MDX raw content for dialog & canonical route
}

export interface PortfolioCatalogManifest {
  version: string;
  lastUpdated: string;
  totalProjects: number;
  projects: ProjectCaseStudyMeta[];
}
