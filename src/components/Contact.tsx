type SectionProps = {
  id: string;
};

const Contact: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id}>
      <div>I'm a Contact section!</div>
    </section>
  );
};

export default Contact;
