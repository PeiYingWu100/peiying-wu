import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId: string = import.meta.env
      .VITE_EMAILJS_TEMPLATE_ID as string;
    const publicId: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    emailjs
      .sendForm(serviceId, templateId, currentForm, {
        publicKey: publicId,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-3xl">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex justify-center flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          required
        ></input>
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
        ></input>
        <textarea name="message" cols={30} rows={10}></textarea>
        <button
          type="submit"
          className="rounded-lg w-full py-2 text-center text-white bg-violet-400 hover:opacity-75"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
