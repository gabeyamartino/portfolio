import Home from "./Home.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import ScrollableContainer from "./ScrollableContainer.tsx";
import { useRef } from "react";

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollableContainer ref={containerRef}>
      {/* <button onClick={() => scrollToSection("about")}>
        click me to scroll!
      </button>
      <button onClick={() => scrollToSection("contact")}>
        click me to scroll to contact
      </button> */}

      <Home />
      <About id="about" scrollToSection={scrollToSection} />
      <Projects />
      <Contact id="contact" />
    </ScrollableContainer>
  );
};

export default App;
