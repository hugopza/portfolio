import { BootScreen } from "./components/BootScreen";
import { CustomCursor } from "./components/CustomCursor";
import { Navigation } from "./components/Navigation";
import { useRevealElements } from "./hooks/useRevealElements";
import { About } from "./sections/About";
import { Capabilities } from "./sections/Capabilities";
import { Contact } from "./sections/Contact";
import { CurrentFocus } from "./sections/CurrentFocus";
import { CurrentlyBuilding } from "./sections/CurrentlyBuilding";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Lab } from "./sections/Lab";
import { Playground } from "./sections/Playground";
import { SelectedWork } from "./sections/SelectedWork";
import { StatusTicker } from "./sections/StatusTicker";

export default function App() {
  useRevealElements();

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
        <CurrentlyBuilding />
      </main>
      <Contact />
    </>
  );
}
