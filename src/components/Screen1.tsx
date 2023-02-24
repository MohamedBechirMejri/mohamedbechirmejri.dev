import Image from "next/image";
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
        <nav className="bg-white bg-opacity-25 backdrop-blur-xl">
          <div className="flex items-center gap-[4px] p-[8px]">
            <div className="cursor-pointer rounded-full bg-[#EE6A5F] p-[2.5px] transition-all hover:bg-[#f39b93] active:bg-[#EE6A5F99]" />
            <div className="cursor-pointer rounded-full bg-[#F5BD4F] p-[2.5px] transition-all hover:bg-[#fdd586] active:bg-[#F5BD4F99]" />
            <div className="cursor-pointer rounded-full bg-[#61C454] p-[2.5px] transition-all hover:bg-[#8fe584] active:bg-[#61C45499]" />
          </div>
          <h1
            className="cursor-pointer p-[10px] pt-0 font-bold"
            onClick={() => setProject(null)}
          >
            Mohamed Bechir Mejri
          </h1>
          <h2 className="px-[10px] pb-1 font-semibold">My Projects:</h2>
          <ul className="flex flex-col px-[10px] font-semibold">
            {projects.map((project, i) => (
              <li
                key={project.name + i}
                className="cursor-pointer rounded p-1 transition-all hover:bg-white hover:bg-opacity-20"
                onClick={() => setProject(project)}
              >
                {project.name}
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-2 overflow-y-scroll bg-white">
          {project ? (
            <div className="flex h-full flex-col items-center justify-center gap-2">
              <h1 className="">{project.name}</h1>
              <p className="">{project.description}</p>
              <h2 className="">Tech:</h2>
              <ul className="">
                {project.tech.map((tech, i) => (
                  <li key={tech + i} className=" ">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-center gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-3">
              <Image
                src="/favicon.ico"
                alt="logo"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
                draggable={false}
              />
              <p className="pb-4 text-center text-[8px] font-bold">
                My dream is to create software that improves people{`'`}s lives.
                So, if you have an idea that you think I can help bring to life,
                don{`'`}t hesitate to{" "}
                <a
                  href="mailto:mohamedbechirmejridev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  reach out!
                </a>
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Screen1;
