import Form from "../../../components/form/form";

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-[50px]">
      <div className="hidden flex-1 flex-col items-center lg:flex lg:flex-row">
        <h4 className="font-bold text-primary opacity-5 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-10 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-20 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-25 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-40 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-60 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-80 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
        <h4 className="font-bold text-primary opacity-100 lg:rotate-180 lg:text-8xl lg:[writing-mode:vertical-lr]">
          LET'S TALK
        </h4>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-2xl font-bold lg:text-start lg:text-4xl">
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
