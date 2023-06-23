type SectionProps = {
  id: string;
};

const Contact: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="flex h-full scroll-m-20 flex-col items-center justify-center space-y-8 bg-main-bg"
    >
      <div className="sm:py-30 mx-auto w-[92%] gap-6 pb-16 sm:w-5/6 sm:max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-6 py-16 ">
          <h2 className="text-center text-4xl font-bold uppercase tracking-wider text-white sm:text-4xl lg:text-5xl">
            Contact
          </h2>
          <span className="h-2 w-10 rounded bg-yellow-400"></span>
          <span className="text-white sm:text-base sm:leading-relaxed xl:text-lg">
            Please feel free to contact me by filling out the form below. I will
            get back to you as soon as I can!
          </span>
        </div>
        <div className="mx-auto w-full max-w-3xl  rounded-lg border bg-white p-8 shadow-lg">
          <form
            action="mailto:gabeyamartino@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="mb-12 flex flex-col">
              <label className="mb-1 text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-200 p-4 text-sm font-semibold leading-normal text-gray-900"
                required={true}
                placeholder="Enter Your Name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mb-12 flex flex-col">
              <label className="mb-1 text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-200 p-4 text-sm font-semibold leading-normal text-gray-900"
                required={true}
                placeholder="Enter Your Email"
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="mb-16 flex flex-col">
              <label className="mb-1 text-sm font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full resize-none rounded-lg border border-gray-300 bg-gray-200 p-4 text-sm font-semibold leading-normal text-gray-900"
                required={true}
                cols={30}
                rows={10}
                placeholder="Enter Your Message Here"
                name="message"
                id="message"
              />
            </div>
            <div className="flex w-full sm:justify-end">
              <button
                className="-mt-8 w-full transform rounded-lg bg-yellow-400 px-9 py-3 font-semibold uppercase tracking-wide text-black shadow-lg transition duration-300 hover:translate-y-[-5px] sm:w-40"
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
