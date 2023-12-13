import { devData } from "../../data/userData";

export default function TechStack() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="font-bold lg:text-4xl">
        My Development Tech<span className="text-primary">.</span>Stack
      </h2>

      <ul className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {devData.skills.map((skills) => (
          <li key={skills.name} className="flex flex-col items-center">
            <img
              className="aspect-square w-[100px] object-cover"
              src={skills.icon}
              alt={skills.name}
            />
            <h3 className="text-2xl font-semibold">{skills.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
