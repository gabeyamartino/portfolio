type SectionProps = {
  id: string;
}

const About: React.FC<SectionProps> = ({id}) => {
  return (
    <section id={id} className="border border-black">
      <div className="flex flex-col justify-center items-center py-16 sm:py-32 gap-6">
        <h2 className="text-4xl text-bold uppercase tracking-wider text-center sm:text-5xl">About Me</h2>
        <span className="w-10 h-2 p-0.5 bg-yellow-400 rounded"></span>
      </div>
      <div className="">
        <p>I'm a full-stack web developer with a passion for design and utility.</p>
        <p>I thrive on the challenges faced when building applications.
          I find immense joy in diving into complex problems, unraveling their intricacies,
          and crafting elegant solutions. The satisfaction that accompanies successfully tackling
          these challenges is what fuels my passion for development. With a collaborative mindset
          and a constant drive to learn and grow, I'm dedicated to delivering high-quality,
          efficient, and user-centric web applications.
        </p>
        <p>I am actively seeking job opportunities that allow me to make meaningful contributions,
          expand my knowledge, and cultivate personal growth. If you have a fitting opportunity that
          aligns with my skills and experience, please don't hesitate to contact me.
        </p>
        <div>I'm going to be the right hand skill widget side</div>
      </div>

    </section>
  )
}

export default About
