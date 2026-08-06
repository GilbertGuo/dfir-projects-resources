import { ArrowUpRight, BookOpen, BriefcaseBusiness, CloudCog, Clock3, Globe2, ScanSearch } from "lucide-react";
import type { Project, ProjectIcon } from "../data/projects";
import { StatusBadge } from "./StatusBadge";

const projectIcons: Record<ProjectIcon, typeof Globe2> = {
  portfolio: Globe2,
  artifact: ScanSearch,
  m365: BriefcaseBusiness,
  gws: CloudCog,
  notes: BookOpen,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon];
  return (
    <article className={`project-card ${project.featured ? "featured" : "supporting"}`}>
      <div className="project-heading">
        <div>
          <h3>{project.name}</h3>
          <p className="project-type">{project.type}</p>
        </div>
        {project.featured && <StatusBadge status={project.status} />}
      </div>
      {!project.featured && <StatusBadge status={project.status} />}
      <div className="project-body">
        <Icon className="project-icon" size={project.featured ? 58 : 44} strokeWidth={1.45} aria-hidden="true" />
        <p>{project.description}</p>
      </div>
      <div className="project-bottom">
        {project.url ? (
          <a className="button project-action" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.buttonLabel}: ${project.name} (opens in a new tab)`}>
            {project.buttonLabel}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ) : (
          <button className="button project-action disabled" type="button" disabled>
            <Clock3 size={17} aria-hidden="true" />{project.buttonLabel}
          </button>
        )}
        <ul className="tag-list" aria-label={`${project.name} topics`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}
