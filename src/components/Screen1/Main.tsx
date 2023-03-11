import {
  AiOutlineArrowDown,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Main = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <div className="grid grid-rows-[1fr,auto] text-center">
      {/* <h1 className="bg-white p-2 text-3xl font-bold ">Mohamed Bechir Mejri</h1> */}
      <div className="grid grid-rows-[auto,1fr] text-white">
        <h2 className="p-4 text-2xl font-bold">Connect with Me</h2>
        <div className="grid grid-rows-2">
          <div className="flex items-center justify-center gap-4 text-3xl">
            <MdAlternateEmail
              onMouseEnter={() => setUsername("mohamedbechirmejri.dev@gmail")}
              onMouseLeave={() => setUsername("")}
              className="cursor-pointer text-yellow-500 transition-all hover:text-white"
            />
            <AiOutlineGithub
              onMouseEnter={() => setUsername("MohamedBechirMejri")}
              onMouseLeave={() => setUsername("")}
              className="cursor-pointer text-zinc-500 transition-all hover:text-white"
            />
            <FaFacebookSquare
              onMouseEnter={() => setUsername("MohamedBechirMejri")}
              onMouseLeave={() => setUsername("")}
              className="cursor-pointer text-blue-500 transition-all hover:text-white"
            />
            <AiOutlineTwitter
              onMouseEnter={() => setUsername("@MohamedBechirMe")}
              onMouseLeave={() => setUsername("")}
              className="cursor-pointer text-sky-500 transition-all hover:text-white"
            />
            <RxDiscordLogo
              onMouseEnter={() => setUsername("MohamedBechirMejri#1604")}
              onMouseLeave={() => setUsername("")}
              className="cursor-pointer text-purple-500 transition-all hover:text-white"
            />
            <AiFillYoutube
              onMouseEnter={() => setUsername("@mohamedbechirmejri")}
              onMouseLeave={() => setUsername("")}
              className="cursor-pointer text-red-500 transition-all hover:text-white"
            />
          </div>
          <AnimatePresence>
            {username && (
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                className="p-2 text-xl font-bold"
              >
                {username}
              </motion.h3>
            )}
          </AnimatePresence>
        </div>
      </div>
      <h2 className="flex items-center justify-center gap-2 p-1 text-white">
        <motion.span
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <AiOutlineArrowDown />
        </motion.span>

        <span>Portfolio</span>

        <motion.span
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          <AiOutlineArrowDown />
        </motion.span>
      </h2>
    </div>
  );
};

export default Main;
