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
              <ul className="fixed left-0 z-10 block flex w-screen flex-col gap-4 bg-white px-6 py-4 shadow-md">
                <li onClick={() => scrollToSection("home")}>HOME</li>
                <li onClick={() => scrollToSection("about")}>ABOUT</li>
                <li onClick={() => scrollToSection("projects")}>PROJECTS</li>
                <li onClick={() => scrollToSection("contact")}>CONTACT</li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex gap-4">
            <li onClick={() => scrollToSection("home")}>HOME</li>
            <li onClick={() => scrollToSection("about")}>ABOUT</li>
            <li onClick={() => scrollToSection("projects")}>PROJECTS</li>
            <li onClick={() => scrollToSection("contact")}>CONTACT</li>
          </ul>
        )}
      </div>
      {/* <div className="flex items-center justify-between">
        <div>
          <div>logo</div>
          <div>GABE YAMARTINO</div>
        </div>

        <div>
          {isMobile ? (
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              HAMBURGER
              {isMenuOpen ? (
                <ul className="z-100 fixed flex flex-col gap-4 bg-white px-6 py-4 shadow-md">
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>PROJECTS</li>
                  <li>CONTACT</li>
                </ul>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <ul className="flex gap-4">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          )}
        </div>
      </div> */}
    </header>
  );
};

export default Header;
