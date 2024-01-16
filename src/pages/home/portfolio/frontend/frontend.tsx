import { devData } from "../../../../data/userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletScreenButton } from "@fortawesome/free-solid-svg-icons/faTabletScreenButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Frontend() {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      {devData.projects.map((project) => (
        <li
          className="flex flex-col gap-5 rounded border border-divider p-2 lg:p-5"
          key={project.title}
        >
          <img
            className="rounded object-cover"
            src={project.image}
            alt={project.title}
          />
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-xl font-medium lg:text-2xl">{project.title}</h4>
            <div className="flex flex-wrap items-center gap-2 lg:gap-5">
              {project.frameworks.map((skill) => (
                <img key={skill} src={skill} className="w-10 object-cover" />
              ))}
            </div>
          </div>

          <div className="flex gap-10">
            <a
              className="w-fit border-b-2 border-primary px-1 py-2 text-start font-semibold text-text hover:text-primary"
              href={project.website}
            >
              <FontAwesomeIcon icon={faTabletScreenButton} />
              <span className="ms-2 text-sm lg:text-base">LIVE DEMO</span>
            </a>
            <a
              className="w-fit border-b-2 border-primary px-1 py-2 text-start font-semibold text-text hover:text-primary"
              href={project.code}
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="ms-2 text-sm lg:text-base">REPOSITORY</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
