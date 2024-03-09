import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: { user_name: "", user_email: "", subject: "", message: "" },
  });

  console.log(errors);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    const currentForm = form.current;
    if (currentForm == null) return;

    const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicId: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("been here");

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
    <div className="max-w-3xl">
      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="flex justify-center flex-col gap-4"
        noValidate
      >
        <div>
          <input
            {...register("user_name", { required: true, minLength: 3 })}
            className={`${
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
          <input
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address!",
              },
            })}
            className={`${
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
          <input
            {...register("subject", { required: true, minLength: 2 })}
            className={`${
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
            className={`${
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
