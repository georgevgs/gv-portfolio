export interface Project {
  title: string;
  description: string;
  tags: string[];
  img: string;
  parentURL: string;
  techStack: string[];
  features: string[];
  website: { url: string; displayText: string };
}
