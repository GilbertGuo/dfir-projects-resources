import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export function App() {
  return <><Header /><main className="min-h-screen"><Hero /><ProjectGrid /><About /></main><Footer /></>;
}
