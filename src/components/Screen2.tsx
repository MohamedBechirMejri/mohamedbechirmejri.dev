import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../types/project";

const Screen2 = ({ project }: { project: Project | null }) => {
  return (
    <div className="h-full select-none bg-slate-900">
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, transition: { delay: 0.3 } }}
            transition={{ ease: "easeInOut", delay: 0.3 }}
            className="h-full w-full origin-top overflow-hidden bg-blue-500"
          >
            <motion.p
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
              className="flex h-full w-full origin-top flex-col items-center justify-center gap-[2px] bg-gray-300 p-2 py-4 text-center text-[4px] font-bold text-slate-900"
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
    </div>
  );
};

export default Screen2;
