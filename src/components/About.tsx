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
      <div className="text-24 py-6">hi</div>
      <div className="text-24 py-6">hi</div>
      <div className="text-24 py-6">hi</div>
      <div className="text-24 py-6">hi</div>
      <div className="text-24 py-6">hi</div>
      <div className="text-24 py-6">hi</div>
      <div className="text-24 py-6">hi</div>

    </section>
  )
}

export default About
