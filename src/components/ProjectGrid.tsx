import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <section id="projects" className="projects shell section-pad" aria-labelledby="projects-title">
      <div className="section-kicker"><h2 id="projects-title">Projects</h2><span aria-hidden="true" /></div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}
