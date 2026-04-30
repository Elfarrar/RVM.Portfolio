import { PROJECTS } from "./projects-raw.js";

export interface Project {
  name: string;
  number: string;
  tagline: string;
  tagline_en: string;
  icon: string;
  color: string;
  tests: number;
  repo: string;
  demo: string;
  tags: string[];
  description: string;
  description_en: string;
  features: string[];
  features_en: string[];
  technologies: string[];
  patterns: string[];
  endpoints: { method: string; path: string; desc: string; desc_en: string }[];
}

export const projects: Record<string, Project> = PROJECTS as Record<string, Project>;

export function listProjects(): Array<Project & { slug: string }> {
  return Object.entries(projects).map(([slug, p]) => ({ slug, ...p }));
}

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}
