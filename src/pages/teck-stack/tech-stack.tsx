import { devData } from "../../data/userData";

export default function TechStack() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="text-2xl font-bold lg:text-4xl">
        My Tech<span className="text-primary">.</span>Stack
      </h2>

      <ul className="grid w-full grid-cols-2 gap-y-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {devData.skills.map((skills) => (
          <li key={skills.name} className="flex flex-col items-center">
            <img
              className="aspect-square w-[75px] object-cover lg:w-[100px]"
              src={skills.icon}
              alt={skills.name}
            />
            <h3 className="text-lg font-semibold lg:text-2xl">{skills.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
