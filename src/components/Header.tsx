import { useEffect, useState } from "react";

type SectionProps = {
  scrollToSection(arg: string): void;
};

const Header: React.FC<SectionProps> = ({ scrollToSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 w-screen bg-white px-6 py-4 shadow-md ">
      <div className="flex w-full justify-between">
        <div>LOGO</div>
        {isMobile ? (
          <div className="relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="">
              {isMenuOpen ? (
                // Render the 'x' icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Render the 'hamburger' icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>
            {isMenuOpen && (
              <ul className="fixed left-0 z-10 block flex w-screen flex-col bg-white px-6 py-4 shadow-md">
                <li
                  className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
                  onClick={() => scrollToSection("home")}
                >
                  HOME
                </li>

                <li
                  className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
                  onClick={() => scrollToSection("about")}
                >
                  ABOUT
                </li>
                <li
                  className="text-1.6xl inline-block h-full w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
                  onClick={() => scrollToSection("projects")}
                >
                  PROJECTS
                </li>
                <li
                  className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
                  onClick={() => scrollToSection("contact")}
                >
                  CONTACT
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex">
            <li
              className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </li>
            <li
              className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </li>
            <li
              className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
              onClick={() => scrollToSection("projects")}
            >
              PROJECTS
            </li>
            <li
              className="text-1.6xl inline-block w-full cursor-pointer p-3 text-right font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:text-yellow-400"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
