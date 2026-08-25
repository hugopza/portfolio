import { BootScreen } from "./components/BootScreen";
import { CustomCursor } from "./components/CustomCursor";
import { Navigation } from "./components/Navigation";
import { useRevealElements } from "./hooks/useRevealElements";
import { getProjectCaseStudy } from "./data/projectCaseStudies";
import { getPersonalizedCaseStudy } from "./data/personalizedCaseStudies";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";
import { PersonalizedProjectCaseStudy } from "./pages/PersonalizedProjectCaseStudy";
import { About } from "./sections/About";
import { Capabilities } from "./sections/Capabilities";
import { Contact } from "./sections/Contact";
import { CurrentFocus } from "./sections/CurrentFocus";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Lab } from "./sections/Lab";
import { Playground } from "./sections/Playground";
import { SelectedWork } from "./sections/SelectedWork";
import { StatusTicker } from "./sections/StatusTicker";

export default function App() {
  useRevealElements();
  const personalizedProject = getPersonalizedCaseStudy(window.location.pathname);
  const project = getProjectCaseStudy(window.location.pathname);

  if (personalizedProject) {
    return (
      <>
        <CustomCursor />
        <PersonalizedProjectCaseStudy project={personalizedProject} />
      </>
    );
  }

  if (project) {
    return (
      <>
        <CustomCursor />
        <ProjectCaseStudy project={project} />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <CustomCursor />
      <BootScreen />
      <Navigation />
      <Hero />
      <StatusTicker />
      <main id="main-content">
        <SelectedWork />
        <Lab />
        <Capabilities />
        <About />
        <CurrentFocus />
        <Experience />
        <Playground />
      </main>
      <Contact />
    </>
  );
}
