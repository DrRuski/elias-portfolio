import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

export default function Form() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          className="bg-divider border-accent border-b-2 p-2 outline-none"
          {...register("fullName", { required: true, maxLength: 20 })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="bg-divider border-accent border-b-2 p-2 outline-none"
          {...register("email", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="bg-divider border-accent border-b-2 p-2 outline-none"
          {...register("message", { required: true, min: 3, max: 99 })}
        />
      </div>

      <div className="hover:text-primary border-primary w-fit cursor-pointer self-end border-b-2 px-1 py-2 text-start font-semibold">
        <FontAwesomeIcon icon={faMessage} />
        <input
          className="ms-2 cursor-pointer"
          value="Send Message"
          type="submit"
        />
      </div>
    </form>
  );
}
