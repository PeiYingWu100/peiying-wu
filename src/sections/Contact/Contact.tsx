import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Button from "../../components/Button";

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
        <div className="flex flex-col-reverse md:flex-row justify-center items-center flex-wrap my-5 gap-8">
          <ContactForm />
          <div className="w-full px-2 md:p-0 md:w-1/2 ">
            <p className="text-slate-700">
              I'd love to hear from you. Feel free to reach out if you have a
              question, want to discuss a project, or just want to say hello.
              Your message means a lot to me, and I'll get back to you ASAP.
              <br />
              Let's connect and start a conversation!
            </p>
            <p className="my-2 flex justify-center items-center gap-4">
              <a
                className="rounded-lg py-2 bg-blue-600 text-white p-2 text-lg flex items-center justify-center max-w-fit gap-2 hover:opacity-75"
                href="https://www.linkedin.com/in/peiyingwu"
              >
                Contact me from{" "}
                <span className="inline-block">
                  <FaLinkedin />
                </span>
              </a>
              <Button
                list_classes={[
                  "max-w-fit",
                  "flex",
                  "items-center",
                  "justify-center",
                ]}
                href="tel:0414082461"
              >
                Call Me
              </Button>
            </p>
            <img
              className="rounded-lg hidden md:block w-full h-auto"
              src="../../public/keyboard_flower.jpeg"
              width={585}
              height={432}
              alt="keyboard with flowers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
