import { devData } from "../../../../data/userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons/faTabletScreenButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Frontend() {
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
              href={project.website}
            >
              <FontAwesomeIcon icon={faTabletScreenButton} />
              <span className="ms-2">LIVE DEMO</span>
            </a>
            <a
              className="text-text hover:text-primary border-primary w-fit border-b-2 px-1 py-2 text-start font-semibold"
              href={project.code}
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
