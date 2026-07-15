import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import GalaxyBackground from "./components/GalaxyBackground";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <GalaxyBackground />
      <div className="page-content">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
