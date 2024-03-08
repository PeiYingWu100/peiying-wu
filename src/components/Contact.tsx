import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[calc(100svh-74px)] flex flex-col justify-start p-3 sm:p-16 custom-violet-radial-gradient"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-medium text-center text-violet-400">
          Contact
        </h2>
        <div className="flex justify-center items-center grow flex-wrap my-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
