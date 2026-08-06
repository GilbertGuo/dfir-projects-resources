import { Circle, Clock3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { ProjectStatus } from "../data/projects";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const Icon = status === "Live" ? Circle : status === "Available on GitHub" ? FaGithub : Clock3;
  return (
    <span className={`status-badge status-${status.toLowerCase().replaceAll(" ", "-")}`}>
      <Icon size={14} aria-hidden="true" fill={status === "Live" ? "currentColor" : "none"} />
      {status}
    </span>
  );
}
