import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormInputs = {
  fullName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const templateParams = {
      from_name: data.fullName,
      user_name: data.fullName,
      user_email: data.email,
      message: data.message,
    };
    emailjs
      .send(
        "service_7hpyixo",
        "template_m5jv27d",
        templateParams,
        "cvUymwIjUhxtPjW9K",
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log("error:", error);
        },
      );

    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          className="bg-divider border-text border-b-2 p-2 outline-none"
          {...register("fullName", { required: true, maxLength: 20 })}
        />
        {errors.fullName && (
          <p className="mt-1 text-[#FF6666]">Please fill out this field.</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="bg-divider border-text border-b-2 p-2 outline-none"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-[#FF6666]">Please fill out this field.</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={3}
          className="bg-divider border-text border-b-2 p-2 outline-none"
          {...register("message", { required: true, min: 3, max: 99 })}
        />
        {errors.message && (
          <p className="mt-1 text-[#FF6666]">Please fill out this field.</p>
        )}
      </div>

      <div className="hover:text-primary border-primary w-fit cursor-pointer self-end border-b-2 px-1 py-2 text-start font-semibold">
        <FontAwesomeIcon icon={faMessage} />
        <input
          className="ms-2 cursor-pointer"
          value={`${success ? "Message Sent" : "Send Message"}`}
          type="submit"
        />
      </div>
    </form>
  );
}
