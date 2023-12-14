import { devData } from "../../data/userData";
import ContactForm from "../../pages/home/contact/contact";

export default function Footer() {
  return (
    <footer className="bg-divider">
      <div className="container mx-auto mt-[25px] px-3 md:px-0 lg:mb-10 lg:mt-[55px]">
        <div className="flex flex-col gap-[75px]">
          <ContactForm />

          <div className="mb-10 flex flex-col items-center gap-5 lg:mb-0 lg:flex-row lg:justify-between">
            <SocialProfile />
            <h1 className="text-2xl font-bold lg:text-4xl">
              elias<span className="text-primary">.</span>ekornås
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialProfile() {
  return (
    <ul className="flex items-center gap-10">
      {devData.basics.profiles.map((profiler) => (
        <li key={profiler.network}>
          <a href={profiler.url}>
            <img src={profiler.icon} alt={profiler.network} />
          </a>
        </li>
      ))}
    </ul>
  );
}
