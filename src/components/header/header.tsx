import { devData } from "../../data/userData";

export default function Header() {
  return (
    <header className="container mx-auto px-3 md:px-0 lg:mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          elias<span className="text-primary">.</span>ekornås
        </h1>
        <SocialProfile />
      </div>
    </header>
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
