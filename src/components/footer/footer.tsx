import { devData } from "../../data/userData";
import Contact from "../../pages/home/contact/contact";

export default function Footer() {
  return (
    <footer className="bg-divider">
      <div className="container mx-auto px-3 md:px-0 lg:mb-10 lg:mt-[55px]">
        <div className="flex flex-col gap-[75px]">
          <Contact />

          <div className="flex items-center justify-between">
            <SocialProfile />
            <h1 className="text-4xl font-bold">
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
