import { FaLinkedin } from "react-icons/fa";
import Button from "../../components/Button";

const ContactBtns = () => {
  return (
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
        cssClasses={["max-w-fit", "flex", "items-center", "justify-center"]}
        href="tel:0414082461"
      >
        Call Me
      </Button>
    </p>
  );
};

export default ContactBtns;
