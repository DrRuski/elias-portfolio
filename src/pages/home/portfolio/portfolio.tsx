import { useState } from "react";
import Frontend from "./frontend/frontend";
import CaseStudies from "./case_studies/case_studies";
import Hobbies from "./hobbies/hobbies";
import Miscellaneous from "./miscellaneous/miscellaneous";

export default function Portfolio() {
  const [isActive, setActive] = useState(0);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold lg:text-4xl">
          Portfolio<span className="text-primary">.</span>Showcase
        </h2>

        <div className="flex gap-7">
          <button
            onClick={() => setActive(0)}
            type="button"
            className={`rounded border p-2 text-sm shadow-lg lg:px-3 lg:py-2 lg:text-base ${
              isActive === 0
                ? "border-accent shadow-accent"
                : "border-divider shadow-divider"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActive(1)}
            type="button"
            className={`rounded border p-2 text-sm shadow-lg lg:px-3 lg:py-2 lg:text-base ${
              isActive === 1
                ? "border-accent shadow-accent"
                : "border-divider shadow-divider"
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActive(2)}
            type="button"
            className={`rounded border p-2 text-sm shadow-lg lg:px-3 lg:py-2 lg:text-base ${
              isActive === 2
                ? "border-accent shadow-accent"
                : "border-divider shadow-divider"
            }`}
          >
            Miscellaneous
          </button>
          <button
            onClick={() => setActive(3)}
            type="button"
            className={`rounded border p-2 text-sm shadow-lg lg:px-3 lg:py-2 lg:text-base ${
              isActive === 3
                ? "border-accent shadow-accent"
                : "border-divider shadow-divider"
            }`}
          >
            Hobbies
          </button>
        </div>
      </div>

      {isActive === 0 && (
        <div>
          <Frontend />
        </div>
      )}
      {isActive === 1 && (
        <div>
          <CaseStudies />
        </div>
      )}
      {isActive === 2 && (
        <div>
          <Miscellaneous />
        </div>
      )}
      {isActive === 3 && (
        <div>
          <Hobbies />
        </div>
      )}
    </section>
  );
}
