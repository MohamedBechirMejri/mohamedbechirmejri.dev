import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";
import type { Project } from "../../types/project";
import Image from "next/image";
import projects from "../../../public/json/projects.json";

const Screen1 = ({ project }: { project: Project | null }) => {
  return (
    <div className="relative grid h-full select-none bg-slate-900">
      <Main />

      {/* preload the images */}
      {projects.map((p, i) => (
        <div key={"preload-" + p.name}>
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

      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ left: "-25rem", scaleX: 0 }}
            animate={{ left: "-25rem", scaleX: 1 }}
            exit={{ left: "-25rem", scaleX: 0, transition: { delay: 0.5 } }}
            transition={{ ease: "easeInOut" }}
            className="absolute h-[2rem] w-[24rem] origin-right overflow-hidden bg-yellow-500"
          >
            <motion.h1
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ ease: "easeInOut", delay: 0.15 }}
              className="flex h-full w-[24rem] origin-right items-center justify-center bg-slate-900 text-center font-bold text-white"
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
            initial={{ left: "-25rem", scaleY: 0 }}
            animate={{ left: "-25rem", scaleY: 1 }}
            exit={{ left: "-25rem", scaleY: 0, transition: { delay: 0.3 } }}
            transition={{ ease: "easeInOut", delay: 0.3 }}
            className="absolute top-10 h-[10rem] w-[24rem] origin-top overflow-hidden bg-blue-500"
          >
            <motion.p
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className="flex h-full w-[24rem] origin-top flex-col items-center justify-center gap-2 overflow-y-scroll bg-gray-300 p-2 py-4 text-center text-sm font-bold text-slate-900"
            >
              {project.description.split("\n").map((item, key) => {
                return (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    key={key}
                  >
                    {item}
                  </motion.span>
                );
              })}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* right */}
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ right: "-27rem", scaleX: 0 }}
            animate={{ right: "-27rem", scaleX: 1 }}
            exit={{ right: "-27rem", scaleX: 0, transition: { delay: 0.3 } }}
            transition={{ ease: "easeInOut" }}
            className="absolute h-[16rem] w-[26rem] origin-left bg-yellow-500"
          >
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ ease: "easeInOut", delay: 0.15 }}
              className="absolute left-0 h-[16rem] w-[26rem] origin-left border bg-slate-900"
            >
              <Image src={project.preview} alt={project.name} fill />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Screen1;
