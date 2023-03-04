import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";
import type { Project } from "../../types/project";

const Screen1 = ({ project }: { project: Project | null }) => {
  return (
    <div className="relative grid h-full select-none bg-slate-900">
      <Main />

      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ left: "-25rem", scaleX: 0 }}
            animate={{ left: "-25rem", scaleX: 1 }}
            exit={{ left: "-25rem", scaleX: 0, transition: { delay: 0.3 } }}
            transition={{ ease: "easeInOut" }}
            className="absolute h-[18rem] w-[24rem] origin-right border bg-yellow-500"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ ease: "easeInOut", delay: 0.15 }}
              className="absolute right-0 h-[18rem] w-[24rem] origin-right border bg-slate-900"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ right: "-25rem", scaleX: 0 }}
            animate={{ right: "-25rem", scaleX: 1 }}
            exit={{ right: "-25rem", scaleX: 0, transition: { delay: 0.3 } }}
            transition={{ ease: "easeInOut" }}
            className="absolute h-[18rem] w-[24rem] origin-left border bg-yellow-500"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ ease: "easeInOut", delay: 0.15 }}
              className="absolute left-0 h-[18rem] w-[24rem] origin-left border bg-slate-900"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Screen1;
