import ContactForm from "./ContactForm";
import Container from "../../components/Container";
import ContactBtns from "./ContactBtns";
import { FaArrowCircleDown } from "react-icons/fa";

const Contact = () => {
  return (
    <Container
      id="contact"
      bgClasses={[
        "justify-center",
        "bg-gradient-to-b",
        "from-white",
        "to-violet-100",
      ]}
      cssClasses={["w-full"]}
      title="Contact"
      titleIcon={
        <span className="inline-block text-violet-400">
          <FaArrowCircleDown className="animate-bounce w-6 h-6" />
        </span>
      }
    >
      <p className="text-slate-700 text-center px-3.5 mt-2">
        Feel free to reach out for questions, project discussions, or just to
        say hello. <br />
        Your message is appreciated, and I'll reply as soon as possible. <br />
        Let's connect and chat!
      </p>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap my-5 gap-8">
        <ContactForm />
        <div className="w-full lg:p-0 lg:w-2/5 ">
          <ContactBtns />
          <img
            className="rounded-lg hidden lg:block w-full h-auto"
            src="/keyboard_flower.jpeg"
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
