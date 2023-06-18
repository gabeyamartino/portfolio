const Home: React.FC = () => {
  return (
    <section className="relative flex h-64 max-h-sectionMax min-h-sectionMin items-center justify-center bg-main-bg sm:h-screen">
      <div className="flex h-full flex-col items-center justify-center space-y-8">
        <h1 className="text-bold text-center text-4xl uppercase tracking-wider text-white sm:text-6xl">
          Hey, My name is Gabe Yamartino
        </h1>
        <div className="w-full max-w-4xl p-4 text-center text-xl leading-tight text-white sm:text-2xl">
          A passionate full-stack developer experienced in building robust web
          applications with a focus on user-centric design and seamless
          functionality.
        </div>
      </div>
    </section>
  );
};

export default Home;
