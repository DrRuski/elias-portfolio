import { devData } from "../../../../data/userData";

export default function Hobbies() {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      {devData.hobbies.map((hobby) => (
        <li
          className="border-divider flex flex-col gap-5 rounded border p-5"
          key={hobby.title}
        >
          <img
            className="aspect-video rounded object-cover"
            src={hobby.image}
            alt={hobby.title}
          />
          <h4 className="text-2xl font-medium">{hobby.title}</h4>
          <div>
            <p>{hobby.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
