import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../../types/project";
import Image from "next/image";
import projects from "../../../public/json/projects.json";
import { AiFillGithub } from "react-icons/ai";

const Screen1 = ({
  project,
  setProject,
}: {
  project: Project | null;
  setProject: any;
}) => {
  return (
    <div className="relative grid h-full select-none grid-cols-4 grid-rows-1 bg-slate-900">
      {/* preload the images */}
      {projects.map((p) => (
        <div key={"preload-" + p.name} className="absolute h-0 w-0">
          <Image
            key={p.preview}
            src={p.preview}
            alt={"preview " + p.name}
            fill
            className="h-[0!important] w-[0!important]"
          />
          <Image
            key={p.logo}
            src={p.logo}
            alt={"preview " + p.name}
            fill
            className="h-[0!important] w-[0!important]"
          />
        </div>
      ))}

      <div className="relative col-span-3 grid grid-cols-1 grid-rows-[auto,1fr]">
        <AnimatePresence>
          {project && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, transition: { delay: 0.55 } }}
              transition={{ ease: "easeInOut" }}
              className="h-[2rem] origin-right overflow-hidden bg-yellow-500"
            >
              <motion.h1
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0, transition: { delay: 0.6 } }}
                transition={{ ease: "easeInOut", delay: 0.15 }}
                className="flex h-full origin-right items-center justify-center bg-slate-900 text-center font-bold text-white"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.name}
                </motion.span>
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {project && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className="z-10 h-full origin-top bg-yellow-500"
            >
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0, transition: { delay: 0.35 } }}
                transition={{ ease: "easeInOut", delay: 0.65 }}
                className="relative block h-full w-full origin-top bg-slate-900"
              >
                <Image
                  src={project.preview}
                  alt={project.name}
                  fill
                  draggable="false"
                />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          :)
        </span>
      </div>

      <div className="grid select-none grid-cols-1 grid-rows-6 bg-[#34353c]">
        {projects.map((project: Project, i) =>
          i < 5 ? (
            <a
              key={i}
              href={project.sourceCode}
              target="_blank"
              rel="noreferrer"
              className="grid h-full cursor-pointer place-items-center bg-inherit"
              style={{ ...project.style }}
              onMouseEnter={() => {
                const checkProject = (p: Project | null) => {
                  if (p && p.name === project.name) return p;
                  if (p === null) return project;

                  setTimeout(() => {
                    setProject(project);
                  }, 1300);
                  return null;
                };

                setProject(checkProject);
              }}
            >
              <Image
                src={project.logo}
                alt={project.name}
                width={300}
                height={300}
                style={{ ...project.imgStyle }}
              />
            </a>
          ) : null
        )}
        <a
          href="https://github.com/MohamedBechirMejri"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-[2px] border border-[#33343b] bg-[#33343b] text-[12px] text-white transition-all duration-500 elevation-8 hover:bg-white hover:text-black"
          onMouseEnter={() => setProject(null)}
        >
          <AiFillGithub /> 50+ More...
        </a>
      </div>

      {/*



      <div className="absolute top-[13.25rem] left-[-25rem] grid h-[5rem] w-[24rem] grid-cols-3 grid-rows-2 gap-4">
        <AnimatePresence>
          {project &&
            project.tech.map((t, i) =>
              i <= 5 ? (
                <motion.p
                  key={project.name + t + i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0, transition: { delay: 0.3 } }}
                  transition={{ ease: "easeInOut", delay: 0.5 }}
                  className="origin-top overflow-hidden bg-yellow-500"
                >
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="flex h-full origin-top items-center justify-center overflow-y-scroll bg-slate-900 text-center text-sm font-bold text-white"
                  >
                    {t}
                  </motion.span>
                </motion.p>
              ) : null
            )}
        </AnimatePresence>
      </div>

      {/* right *
     */}
    </div>
  );
};

export default Screen1;
