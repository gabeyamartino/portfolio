const Home: React.FC = () => {
  return (
    <section className="relative flex h-64 max-h-full min-h-sectionMin items-center justify-center bg-main-bg sm:h-screen">
      <div className="flex h-full flex-col items-center justify-center space-y-8">
        <h1 className="mx-6 text-center text-4xl font-semibold uppercase tracking-wider text-white sm:text-6xl">
          Hey, My name is Gabe Yamartino
        </h1>
        <div className="w-full max-w-4xl p-4 text-center text-xl leading-tight text-white sm:text-2xl">
          A passionate full-stack developer experienced in building robust web
          applications with a focus on user-centric design and seamless
          functionality.
        </div>
        <div>
          {/* <div className="left-[calc(50% - 14px)] absolute top-[-60px] h-3 w-0 rounded-md border-2 border-white"></div> */}
          <div className="after:content invisible absolute mt-40 animate-bounce animate-ping after:absolute after:left-[-10px] after:top-3 after:block after:h-4 after:w-4 after:rotate-45 after:transform after:border-b-2 after:border-r-2 after:border-white sm:visible"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
