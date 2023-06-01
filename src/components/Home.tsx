function Home() {
  return (
    <section className="flex justify-center items-center h-64 max-h-sectionMax min-h-sectionMin bg-main-bg relative sm:h-screen">
      <div className="flex flex-col justify-center items-center h-full space-y-8">
        <h1 className="text-4xl text-bold uppercase tracking-wider text-center text-white sm:text-6xl">
          Hey, My name is Gabe Yamartino
        </h1>
        <div className="text-white text-xl text-center w-full max-w-4xl leading-tight sm:text-2xl p-4">
          A passionate full-stack developer experienced in building robust web applications
          with a focus on user-centric design and seamless functionality.
        </div>
      </div>
    </section>
  )
}

export default Home