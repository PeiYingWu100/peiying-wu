import ContactForm from "./ContactForm";
import Container from "../../components/Container";
import ContactBtns from "./ContactBtns";

const Contact = () => {
  return (
    <Container
      id="contact"
      bgClasses={["custom-violet-radial-gradient"]}
      cssClasses={["w-full"]}
      title="Contact"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap my-5 gap-8">
        <ContactForm />
        <div className="w-full lg:p-0 lg:w-1/2 ">
          <p className="text-slate-700">
            I'd love to hear from you. Feel free to reach out if you have a
            question, want to discuss a project, or just want to say hello. Your
            message means a lot to me, and I'll get back to you ASAP.
            <br />
            Let's connect and start a conversation!
          </p>

          <ContactBtns />
          <img
            className="rounded-lg hidden lg:block w-full h-auto"
            src="../../public/keyboard_flower.jpeg"
            width={585}
            height={432}
            alt="keyboard with flowers"
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
