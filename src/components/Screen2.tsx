import Image from "next/image";
import projects from "../../public/json/projects.json";
import type { Project } from "../types/project";

const Screen2 = ({
  setProject,
}: {
  setProject: (project: Project | null) => void;
}) => {
  return (
    <div className="grid h-full select-none grid-cols-3 grid-rows-2 bg-[#34353c]">
      {projects.map((project: Project, i) =>
        i < 5 ? (
          <div
            key={i}
            className="grid place-items-center bg-inherit "
            style={{ ...project.style }}
            onMouseEnter={() => setProject(project)}
          >
            <Image
              src={project.logo}
              alt={project.name}
              width={300}
              height={300}
              style={{ ...project.imgStyle }}
            />
          </div>
        ) : null
      )}
      <a
        href="https://github.com/MohamedBechirMejri"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center border border-[#33343b] bg-[#33343b] text-[6px] text-white transition-all duration-500 elevation-8 hover:bg-white hover:text-black"
        onMouseEnter={() => setProject(null)}
      >
        50+ More...
      </a>
    </div>
  );
};

export default Screen2;
