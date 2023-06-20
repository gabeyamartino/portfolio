import singSoftly from "../assets/singSoftlyMockup.png";
import macBook from "../assets/macbookScreen.jpeg";

type SectionProps = {
  id: string;
};

const Projects: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center bg-white"
    >
      <div className="sm:py-30 mx-auto w-[92%] gap-6 pb-16 sm:w-5/6 sm:max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-6 py-16 ">
          <h2 className="text-center text-4xl font-bold uppercase tracking-wider sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <span className="h-2 w-10 rounded bg-yellow-400"></span>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="">
              <img
                className="h-auto w-xxl"
                src={singSoftly}
                alt="Screenshot of Sing Softly Application"
              />
            </div>
            <div className="max-w-md sm:text-base sm:leading-relaxed xl:text-lg">
              <h2 className="mb-8 text-2xl font-bold">SingSoft.ly</h2>
              <p>
                A web-based music streaming platform for fans of the band Phish
                to easily find and listen to archived recordings of the band's
                concerts
              </p>
              <div className="flex gap-6">
                <a href="http://54.160.94.40:3000/" target="_blank">
                  <button className="my-8 transform rounded-lg bg-yellow-400 px-9 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px] sm:text-base">
                    Live Link
                  </button>
                </a>
                <a
                  href="https://github.com/gabeyamartino/SingSoft.ly"
                  target="_blank"
                >
                  <button className="my-8 transform rounded-lg bg-yellow-400 px-9 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px] sm:text-base">
                    GitHub Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="">
              <img
                className="h-auto w-xxl"
                src={macBook}
                alt="Screenshot of Sing Softly Application"
              />
            </div>
            <div className="max-w-md sm:text-base sm:leading-relaxed xl:text-lg">
              <h2 className="mb-8 text-2xl font-bold">SingSoft.ly</h2>
              <p>
                A web-based music streaming platform for fans of the band Phish
                to easily find and listen to archived recordings of the band's
                concerts
              </p>
              <div className="flex gap-6">
                <a href="http://54.160.94.40:3000/" target="_blank">
                  <button className="my-8 transform rounded-lg bg-yellow-400 px-9 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px] sm:text-base">
                    Live Link
                  </button>
                </a>
                <a
                  href="https://github.com/gabeyamartino/SingSoft.ly"
                  target="_blank"
                >
                  <button className="my-8 transform rounded-lg bg-yellow-400 px-9 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px] sm:text-base">
                    GitHub Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>Project 2</div>
        <div>Project 3</div>
      </div>
    </section>
  );
};

export default Projects;
