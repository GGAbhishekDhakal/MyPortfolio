import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import GalaxyBackground from "./components/GalaxyBackground";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Organizations from "./components/Organizations";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <GalaxyBackground />
      <Hero />
      <div className="page-content">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <WorkExperience />
          <Organizations />
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
