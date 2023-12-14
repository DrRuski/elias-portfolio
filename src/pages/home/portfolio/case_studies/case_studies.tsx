import { devData } from "../../../../data/userData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";

export default function CaseStudies() {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      {devData.case_studies.map((report) => (
        <li
          className="flex flex-col gap-5 rounded border border-divider p-5"
          key={report.title}
        >
          <img
            className="aspect-video rounded object-cover"
            src={report.image}
            alt={report.title}
          />
          <h4 className="text-2xl font-medium">{report.title}</h4>
          <div>
            <p>{report.summary}</p>
          </div>
          <div className="flex gap-10">
            <a
              className="w-fit border-b-2 border-primary px-1 py-2 text-start font-semibold text-text hover:text-primary"
              href={report.website}
            >
              <FontAwesomeIcon icon={faBookOpen} />
              <span className="ms-2 text-sm lg:text-base">READ STUDY</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
