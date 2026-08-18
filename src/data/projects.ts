// Update project URLs, descriptions, tags, and status labels here.
export type ProjectStatus = "Live" | "Available on GitHub" | "In Progress";

export type ProjectIcon = "portfolio" | "artifact" | "m365" | "gws" | "aws";

export interface Project {
  name: string;
  type: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  url?: string;
  buttonLabel: string;
  icon: ProjectIcon;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Personal Portfolio",
    type: "Personal Website",
    description: "My main personal portfolio featuring my professional background, experience, technical skills, and selected work.",
    tags: ["Portfolio", "Cybersecurity", "Web Development"],
    status: "Live",
    url: "https://gilbertguo.github.io/",
    buttonLabel: "Visit Site",
    icon: "portfolio",
    featured: true,
  },
  {
    name: "DFIR Artifact Explorer",
    type: "DFIR Web Tool",
    description: "A browser-based project for exploring common digital-forensics artifacts and organizing useful investigation references.",
    tags: ["DFIR", "Digital Forensics", "Investigation", "Web Tool"],
    status: "Live",
    url: "https://gilbertguo.github.io/dfir-artifact-explorer-project/",
    buttonLabel: "Open Tool",
    icon: "artifact",
    featured: true,
  },
  {
    name: "M365 Investigator Suite",
    type: "Investigation Toolkit",
    description: "A local, case-based workbench for Microsoft 365 Unified Audit Log, message trace, enrichment, hunting, collection, and investigation exports.",
    tags: ["Microsoft 365", "DFIR", "Python", "Incident Response"],
    status: "Available on GitHub",
    url: "https://github.com/GilbertGuo/M365-Investigator-Suite",
    buttonLabel: "View on GitHub",
    icon: "m365",
  },
  {
    name: "GWS Investigator Suite",
    type: "Investigation Toolkit",
    description: "A local, case-based workbench for Google Workspace investigation exports, audit logs, enrichment, hunts, and analyst-ready CSV exports.",
    tags: ["Google Workspace", "DFIR", "Python", "Incident Response"],
    status: "Available on GitHub",
    url: "https://github.com/GilbertGuo/GWS-Investigator-Suite",
    buttonLabel: "View on GitHub",
    icon: "gws",
  },
  {
    name: "AWS CloudTrail Event History Collector",
    type: "Cloud Forensics Collector",
    description: "A read-only, resumable Python collector for AWS CloudTrail Event History across enabled Regions, with compressed evidence pages and collection summaries.",
    tags: ["AWS", "CloudTrail", "Python", "Cloud Forensics"],
    status: "Available on GitHub",
    url: "https://github.com/GilbertGuo/aws-cloudtrail-event-history-collector",
    buttonLabel: "View on GitHub",
    icon: "aws",
  },
];
