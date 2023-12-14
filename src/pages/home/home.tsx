import TechStack from "../teck-stack/tech-stack";
import Introduction from "./introduction/introduction";
import Portfolio from "./portfolio/portfolio";

export default function Home() {
  return (
    <section className="container mx-auto px-3 md:px-0">
      <div className="flex flex-col gap-[75px]">
        <Introduction />
        <div className="border-b-2 text-divider"></div>
        <TechStack />
        <Portfolio />
      </div>
    </section>
  );
}
