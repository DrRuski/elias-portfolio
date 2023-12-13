import { useState } from "react";
import Frontend from "./frontend/frontend";
import CaseStudies from "./case_studies/case_studies";
import Hobbies from "./hobbies/hobbies";

export default function Portfolio() {
  const [isActive, setActive] = useState(0);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="font-bold lg:text-4xl">
          Portfolio<span className="text-primary">.</span>Showcase
        </h2>

        <div className="flex gap-7">
          <button
            onClick={() => setActive(0)}
            type="button"
            className={`border-divider rounded border px-3 py-2 shadow-lg ${
              isActive === 0 ? "shadow-accent" : "shadow-divider"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActive(1)}
            type="button"
            className={`border-divider rounded border px-3 py-2 shadow-lg ${
              isActive === 1 ? "shadow-accent" : "shadow-divider"
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActive(2)}
            type="button"
            className={`border-divider rounded border px-3 py-2 shadow-lg ${
              isActive === 2 ? "shadow-accent" : "shadow-divider"
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
          <Hobbies />
        </div>
      )}
    </section>
  );
}
