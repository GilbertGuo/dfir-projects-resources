import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const links = [
  ["Home", "#home"],
  ["Projects", "#projects"],
  ["About", "#about"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#home" aria-label="Gilbert Guo home">
          <span className="brand-mark">GG</span>
          <span className="brand-divider" aria-hidden="true" />
          <span>Gilbert Guo</span>
        </a>
        <p className="site-title">DFIR Projects &amp; Technical Resources</p>
        <nav className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="github-link" href="https://github.com/GilbertGuo" target="_blank" rel="noopener noreferrer" aria-label="Gilbert Guo on GitHub">
            <FaGithub size={21} aria-hidden="true" />
          </a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
