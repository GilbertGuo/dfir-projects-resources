import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">GG</span><span className="brand-divider" aria-hidden="true" /><span>Gilbert Guo</span></div><p>Built to showcase DFIR tools, investigation projects, and technical resources.</p></div>
        <nav aria-label="Footer navigation"><p className="footer-label">Navigation</p><a href="#home">Home</a><a href="#projects">Projects</a><a href="#about">About</a></nav>
        <div><p className="footer-label">Connect</p><a className="footer-github" href="https://github.com/GilbertGuo" target="_blank" rel="noopener noreferrer"><FaGithub size={20} aria-hidden="true" /> GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </div>
      <div className="shell copyright"><span>© {new Date().getFullYear()} Gilbert Guo. All rights reserved.</span><span>DFIR projects, tools, and resources for the community.</span></div>
    </footer>
  );
}
