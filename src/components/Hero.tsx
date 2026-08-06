import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Projects, Tools, and<br />DFIR Resources</h1>
        <p>A collection of websites, investigation tools, and technical resources I have built around digital forensics, incident response, cloud investigations, and security automation.</p>
        <a className="button button-primary" href="#projects">View Projects <ArrowUpRight size={19} aria-hidden="true" /></a>
      </div>
      <div className="hero-art" aria-hidden="true" />
    </section>
  );
}
