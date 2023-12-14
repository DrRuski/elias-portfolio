import { devData } from "../../../data/userData";
import resumeNOK from "../../../assets/cv/CV-nok.pdf";
import resumeENG from "../../../assets/cv/CV-eng.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Introduction() {
  return (
    <section className="flex flex-col-reverse items-center gap-5 lg:flex-row">
      <Description />
      <Image />
    </section>
  );
}

function Description() {
  function handleDownload(url: any) {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", url.split("/").pop());
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div className="flex-1">
      <div className="flex max-w-[650px] flex-col items-center gap-5  lg:items-start">
        <h1 className="flex gap-4 text-2xl font-semibold lg:text-5xl">
          <span>Hello! 👋 My name is</span>
          <span className="border-b-2 border-primary lg:border-b-4 lg:pb-1">
            {devData.basics.name}.
          </span>
        </h1>
        <p className="text-center text-base lg:text-start lg:text-lg">
          {devData.basics.summary}
        </p>
        <div className="flex flex-col items-center gap-5 lg:items-start">
          <button
            className="w-fit border-b-2 border-primary px-1 py-2 text-start font-semibold text-text hover:text-primary"
            type="button"
            onClick={() => handleDownload(resumeNOK)}
          >
            <FontAwesomeIcon icon={faFile} />
            <span className="ms-2">DOWNLOAD CV - NOK</span>
          </button>
          <button
            className="w-fit border-b-2 border-primary px-1 py-2 text-start font-semibold text-text hover:text-primary"
            type="button"
            onClick={() => handleDownload(resumeENG)}
          >
            <FontAwesomeIcon icon={faFile} />
            <span className="ms-2">DOWNLOAD CV - ENG</span>
          </button>
          <a
            className="w-fit border-b-2 border-primary px-1 py-2 text-start font-semibold text-text hover:text-primary"
            href="#contactForm"
          >
            <FontAwesomeIcon icon={faMessage} />
            <span className="ms-2">CONTACT ME</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="flex-1">
      <img
        className="img-bg mx-auto h-[600px] rounded-b object-cover"
        src={devData.basics.image}
        alt={devData.basics.name}
      />
    </div>
  );
}
