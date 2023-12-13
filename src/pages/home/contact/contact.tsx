import Form from "../../../components/form/form";

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-[50px]">
      <div className="flex flex-1 items-center">
        <div className="flex">
          <h4 className="text-primary rotate-180 font-bold opacity-5 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-10 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-20 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-25 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-40 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-60 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-80 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
          <h4 className="text-primary rotate-180 font-bold opacity-100 lg:text-8xl lg:[writing-mode:vertical-lr]">
            LET'S TALK
          </h4>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold lg:text-3xl">
            Contact<span className="text-primary">.</span>Form
          </h2>
          <p>
            If you have a burning question you would like to ask, a job
            proposition or a project that I could help with. Please fill inn the
            form below and I will reply as soon as I am available.
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}
