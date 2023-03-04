import { motion } from "framer-motion";
import Main from "./Main";
import type { Project } from "../../types/project";

const Screen1 = ({ project }: { project: Project | null }) => {
  return (
    <div className="relative grid h-full select-none bg-slate-900">
      <Main />
      <motion.div
        initial={{ right: "-25rem" }}
        animate={{ right: "-25rem" }}
        transition={{ duration: 0.5 }}
        className="absolute h-[18rem] w-[22rem] border bg-green-500"
      >
        {project && <h1>{project.name}</h1>}
      </motion.div>
      <motion.div
        initial={{ left: "-25rem" }}
        animate={{ left: "-25rem" }}
        transition={{ duration: 0.5 }}
        className="absolute h-[18rem] w-[22rem] border bg-green-500"
      ></motion.div>
    </div>
  );
};

export default Screen1;
