import singSoftly from "../assets/singSoftlyMockup.png";

const Projects: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white">
      <div className="sm:py-30 mx-auto w-[92%] gap-6 pb-16 sm:w-5/6 sm:max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-6 py-16 ">
          <h2 className="text-center text-4xl font-semibold uppercase tracking-wider sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <span className="h-2 w-10 rounded bg-yellow-400"></span>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div>
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
              <div>this will be button to live link</div>
              <div>This will be button to github</div>
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
