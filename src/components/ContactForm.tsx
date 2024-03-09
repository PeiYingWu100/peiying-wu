import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { FaArrowCircleDown } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: { user_name: "", user_email: "", subject: "", message: "" },
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    const currentForm = form.current;
    if (currentForm == null) return;

    const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicId: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, currentForm, {
        publicKey: publicId,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          if (currentForm) {
            currentForm.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-md grow">
      <p className="font-bold text-xl flex items-center gap-2">
        Write me a Message{" "}
        <span className="inline-block text-violet-400">
          <FaArrowCircleDown className="animate-bounce w-8 h-8" />
        </span>
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="flex justify-center flex-col gap-4"
        noValidate
      >
        <div>
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="user_name"
          >
            Your name
          </label>
          <input
            {...register("user_name", { required: true, minLength: 3 })}
            className={`w-full px-3 py-2 border rounded-lg ${
              errors.user_name?.type ? "border-2 border-red-600" : ""
            }`}
            id="user_name"
            type="text"
            placeholder="Full Name"
            name="user_name"
          ></input>
          {errors.user_name?.type === "required" && (
            <ErrorMessage> The name field is required!</ErrorMessage>
          )}
          {errors.user_name?.type === "minLength" && (
            <ErrorMessage>
              Please enter at least 3 characters for the name!
            </ErrorMessage>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2"
            htmlFor="user_email"
          >
            Email Address
          </label>
          <input
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address!",
              },
            })}
            className={`w-full px-3 py-2 border rounded-lg ${
              errors.user_name?.type ? "border-2 border-red-600" : ""
            }`}
            id="user_email"
            type="email"
            placeholder="Email"
            name="user_email"
          ></input>
          {errors.user_email?.type === "required" && (
            <ErrorMessage> The email field is required!</ErrorMessage>
          )}
          {errors.user_email?.type === "pattern" && (
            <ErrorMessage>{errors.user_email?.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="subject">
            Email Subject
          </label>
          <input
            {...register("subject", { required: true, minLength: 2 })}
            className={`w-full px-3 py-2 border rounded-lg ${
              errors.user_name?.type ? "border-2 border-red-600" : ""
            }`}
            id="subject"
            type="text"
            placeholder="Subject"
            name="subject"
          ></input>
          {errors.subject?.type === "required" && (
            <ErrorMessage> The subject field is required!</ErrorMessage>
          )}
          {errors.subject?.type === "minLength" && (
            <ErrorMessage>
              Please enter at least 2 characters for the subject!
            </ErrorMessage>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          {errors.message?.type === "required" && (
            <ErrorMessage> The message field is required!</ErrorMessage>
          )}
          {errors.message?.type === "minLength" && (
            <ErrorMessage>
              Please enter at least 2 characters for the message!
            </ErrorMessage>
          )}
          <textarea
            {...register("message", { required: true, minLength: 2 })}
            className={`w-full px-3 py-2 border rounded-lg ${
              errors.user_name?.type ? "border-2 border-red-600" : ""
            }`}
            id="message"
            name="message"
            cols={30}
            rows={10}
          ></textarea>
        </div>
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
