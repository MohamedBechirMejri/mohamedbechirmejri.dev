import { useState } from "react";
import projects from "../../public/json/projects.json";

const Screen1 = () => {
  const [project, setProject] = useState<{
    name: string;
    description: string;
    tech: string[];
    demo: string;
    source: string;
  } | null>(null);

  return (
    <div className="grid h-full select-none place-items-center bg-[url(/assets/op.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="grid h-[11.5rem] w-[20rem] grid-cols-3 overflow-hidden rounded-xl text-[8px] elevation-8">
        <nav className="bg-white bg-opacity-25 p-[8px] py-[12px] backdrop-blur-xl">
          <h1 className="pb-[8px] font-bold">Mohamed Bechir Mejri</h1>
          <h2 className="pb-[4px] font-semibold">My Projects:</h2>
          <ul className="ml-[16px] list-item list-disc flex-col font-semibold">
            {projects.map((project, i) => (
              <li
                key={project.name + i}
                className="cursor-pointer py-[4px] hover:border"
                onClick={() => setProject(project)}
              >
                {project.name}
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-2 bg-white">
          {project ? (
            <div className="p-8">
              <h1 className="pb-4 text-2xl font-bold">{project.name}</h1>
              <p className="pb-4 text-xl font-semibold">
                {project.description}
              </p>
              <h2 className="pb-4 text-xl font-semibold">Tech:</h2>
              <ul className="ml-6 list-item list-disc flex-col text-xl font-semibold">
                {project.tech.map((tech, i) => (
                  <li key={tech + i} className="py-2">
                    {tech}
                  </li>
                ))}
              </ul>
              <h2 className="pb-4 text-xl font-semibold">Links:</h2>
              <ul className="ml-6 list-item list-disc flex-col text-xl font-semibold">
                <li className="py-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Demo
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Source
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="p-8">
              <h1 className="pb-4 text-2xl font-bold">Welcome!</h1>
              <p className="pb-4 text-xl font-semibold">
                This is my personal website. Im a software engineer and this is
                where I showcase my projects. Feel free to explore!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Screen1;
