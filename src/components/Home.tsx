type SectionProps = {
  id: string;
  scrollToSection(arg: string): void;
};

const Home: React.FC<SectionProps> = ({ id, scrollToSection }) => {
  return (
    <section
      id={id}
      className="relative m-0 flex h-64 max-h-full min-h-sectionMin scroll-m-20 items-center justify-center bg-main-bg sm:-mt-20 sm:h-screen sm:pt-20"
    >
      <div className="mt-24 flex h-full flex-col items-center justify-center sm:space-y-8">
        <h1 className="mx-6 text-center text-4xl font-semibold uppercase tracking-wider text-white md:text-6xl">
          Hey, I'm Gabe Yamartino
        </h1>
        <div className="w-full max-w-4xl p-4 text-center text-xl leading-tight text-white md:text-2xl">
          A full-stack developer experienced in building robust web applications
          with a focus on user-centric design and seamless functionality.
        </div>
        <div className="flex gap-6">
          <a href="../public/Resume_Yamartino_Gabe.pdf" target="_blank">
            <button className="my-8 transform rounded-lg bg-yellow-400 px-9 py-3 font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px]">
              Resume
            </button>
          </a>
          <button
            onClick={() => scrollToSection("projects")}
            className="my-8 transform rounded-lg bg-yellow-400 px-9 py-3 font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px]"
          >
            Projects
          </button>
        </div>
        <div>
          <div className="after:content invisible mt-28 animate-bounce animate-ping after:absolute after:left-[-10px] after:top-3 after:block after:h-4 after:w-4 after:rotate-45 after:transform after:border-b-2 after:border-r-2 after:border-white sm:visible"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
