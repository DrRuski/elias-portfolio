import { useState } from "react";
import { devData } from "../../../data/userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons/faTabletScreenButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  const [isActive, setActive] = useState(0);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl font-bold">
          Portfolio<span className="text-primary">.</span>Showcase
        </h1>

        <div className="flex gap-10">
          <button
            onClick={() => setActive(0)}
            type="button"
            className={`border-divider shadow-divider rounded border px-3 py-2 shadow-lg ${
              isActive === 0 ? "shadow-accent" : ""
            }`}
          >
            Frontend Development
          </button>
          <button
            onClick={() => setActive(1)}
            type="button"
            className={`border-divider shadow-divider rounded border px-3 py-2 shadow-lg ${
              isActive === 1 ? "shadow-accent" : ""
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setActive(2)}
            type="button"
            className={`border-divider shadow-divider rounded border px-3 py-2 shadow-lg ${
              isActive === 2 ? "shadow-accent" : ""
            }`}
          >
            Hobbies
          </button>
        </div>
      </div>

      <div>{isActive === 0 && <Frontend />}</div>
    </section>
  );
}

function Frontend() {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      {devData.projects.map((project) => (
        <li
          className="border-divider flex flex-col gap-5 rounded border p-5"
          key={project.title}
        >
          <img
            className="rounded object-cover"
            src={project.image}
            alt={project.title}
          />
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-medium">{project.title}</h4>
            <div className="flex items-center gap-5">
              {project.frameworks.map((skill) => (
                <p className="text-sm" key={skill}>
                  {skill}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-10">
            <a
              className="text-text hover:text-primary border-primary w-fit border-b-2 px-1 py-2 text-start font-semibold"
              href="#"
            >
              <FontAwesomeIcon icon={faTabletScreenButton} />
              <span className="ms-2">LIVE DEMO</span>
            </a>
            <a
              className="text-text hover:text-primary border-primary w-fit border-b-2 px-1 py-2 text-start font-semibold"
              href="#"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="ms-2">REPOSITORY</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
