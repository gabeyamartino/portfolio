import Home from "./Home.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import {useRef} from 'react';

function App() {
  const ref = useRef<null | HTMLDivElement>(null);

  const aboutRef = useRef<HTMLDivElement>(null);
  const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'})
  const doAboutClick = () => aboutRef.current?.scrollIntoView({behavior: 'smooth'})

  return (
    <div>
      <button onClick={doClick}>click me to scroll!</button>
      <button onClick={doAboutClick}>click me to scroll!</button>

      <div ref={ref}>HERE I AM</div>

      <Home />
      <About />
      <Projects />
      <div ref={aboutRef}>
        <Contact />
      </div>
    </div>
  )
}

export default App
