import Home from "./Home.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import ScrollableContainer from "./ScrollableContainer.tsx";
import Header from "./Header.tsx";
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
      <Header scrollToSection={scrollToSection} />
      <Home id="home" scrollToSection={scrollToSection} />
      <About id="about" scrollToSection={scrollToSection} />
      <Projects id="projects" />
      <Contact id="contact" />
    </ScrollableContainer>
  );
};

export default App;
