import { BookOpen, Cloud, Code2, Fingerprint, ShieldCheck, Users } from "lucide-react";

const focusAreas = [
  [Fingerprint, "Digital Forensics", "Artifact analysis, timeline reconstruction, and evidence correlation."],
  [Code2, "Tool Development", "Building practical tools that automate repetitive DFIR tasks."],
  [ShieldCheck, "Incident Response", "Threat hunting, compromise assessment, and response support."],
  [BookOpen, "Knowledge Sharing", "Creating notes, guides, and resources for the DFIR community."],
  [Cloud, "Cloud Investigations", "Microsoft 365, Google Workspace, AWS, and Azure forensics."],
  [Users, "Community Focus", "Open-source, transparent, and practitioner-driven."],
] as const;

export function About() {
  return (
    <section id="about" className="about shell section-pad" aria-labelledby="about-title">
      <p className="eyebrow">About</p>
      <div className="about-layout">
        <div className="about-intro">
          <h2 id="about-title">Focus Areas</h2>
          <img src="./assets/forensic-radar.png" alt="" aria-hidden="true" />
        </div>
        <div className="focus-grid">
          {focusAreas.map(([Icon, title, description]) => (
            <div className="focus-item" key={title}>
              <Icon size={31} strokeWidth={1.6} aria-hidden="true" />
              <div><h3>{title}</h3><p>{description}</p></div>
            </div>
          ))}
        </div>
      </div>
      <p className="about-summary">I build practical tools and technical resources focused on digital forensics, incident response, Microsoft 365 investigations, cloud forensics, threat hunting, and security automation.</p>
    </section>
  );
}
