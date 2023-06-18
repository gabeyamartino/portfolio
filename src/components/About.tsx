type SectionProps = {
  id: string;
}

const About: React.FC<SectionProps> = ({id}) => {

  const skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",
                            "PostgreSQL", "MongoDB", "Unit Testing", "Git"];

  return (
    <section id={id} className="border border-black">
      <div className="flex flex-col justify-center items-center py-16 sm:py-32 gap-6">
        <h2 className="text-4xl text-bold uppercase tracking-wider text-center sm:text-5xl">
          About Me
        </h2>
        <span className="w-10 h-2 p-0.5 bg-yellow-400 rounded"></span>
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="max-w-2xl">
          <p className="mb-4">I'm a full-stack web developer with a passion for design and utility.</p>
          <p className="mb-4">I find immense joy in diving into complex problems, unraveling their intricacies,
            and crafting elegant solutions. With aconstant drive to learn and grow, I'm dedicated
            to delivering high-quality, efficient, and user-centric web applications.
          </p>
          <p className="mb-4">I am actively seeking job opportunities that allow me to make meaningful contributions,
            expand my knowledge, and cultivate personal growth. If you have a fitting opportunity that
            aligns with my skills and experience, please don't hesitate to contact me.
          </p>
        </div>
        <div>
          <h2>My Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill) =>
              <div className="justify-center items-center p-4 mb-6 mr-6 text-md bg-gray-400 bg-opacity-20 rounded-lg font-semibold text-gray-600">{skill}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
