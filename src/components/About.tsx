type SectionProps = {
  id: string;
};

const About: React.FC<SectionProps> = ({ id }) => {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Unit Testing",
    "Git",
  ];

  return (
    <section
      id={id}
      className="mx-auto border border-black sm:w-5/6 sm:max-w-6xl"
    >
      <div className="sm:py-30 flex flex-col items-center justify-center gap-6 py-16">
        <h2 className="text-bold text-center text-4xl uppercase tracking-wider sm:text-5xl">
          About Me
        </h2>
        <span className="h-2 w-10 rounded bg-yellow-400 p-0.5"></span>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-16">
        <div className="max-w-md">
          <p className="mb-4">
            I'm a full-stack web developer with a passion for design and
            utility.
          </p>
          <p className="mb-4">
            I find immense joy in diving into complex problems, unraveling their
            intricacies, and crafting elegant solutions. With aconstant drive to
            learn and grow, I'm dedicated to delivering high-quality, efficient,
            and user-centric web applications.
          </p>
          <p className="mb-4">
            I am actively seeking job opportunities that allow me to make
            meaningful contributions, expand my knowledge, and cultivate
            personal growth. If you have a fitting opportunity that aligns with
            my skills and experience, please don't hesitate to contact me.
          </p>
        </div>
        <div>
          <h2 className="mb-12 text-2xl font-bold">My Skills</h2>
          <div className="flex flex-wrap lg:min-w-skillBox">
            {skills.map((skill) => (
              <div
                key={skill}
                className="text-md mb-2 mr-3 items-center justify-center rounded-lg bg-gray-400
                bg-opacity-20 px-4 py-2 font-semibold text-gray-600"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
