import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", url: "/#hero" },
  { name: "Stats", url: "/stats" },
  { name: "Blog", url: "https://blog.mohamedbechirmejri.dev" },
  { name: "Lab", url: "https://lab.mohamedbechirmejri.dev" },
];

const Nav = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Body */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpen ? "-40%" : 0 }}
        transition={{ type: "spring", damping: 27, stiffness: 150 }}
        className="absolute z-10 h-full w-full overflow-scroll rounded-lg elevation-7 scrollbar-none"
      >
        {children}
      </motion.div>

      {/* Nav */}
      <nav className="absolute bottom-0 grid h-[40%] w-full select-none grid-cols-4 bg-green-900 p-8 text-5xl font-bold text-green-100">
        {links.map((link) => (
          <motion.div
            key={link.name + link.name}
            initial={{
              y: 15,
              scale: 1,
            }}
            animate={{
              y: isOpen ? 0 : 550,
              scale: isOpen ? 1 : 0,
            }}
            transition={{ type: "spring", damping: 27, stiffness: 150 }}
            className="flex h-full w-full items-center justify-center rounded-3xl text-5xl"
          >
            <Link href={link.url} onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Toggle */}
      <motion.button
        initial={{ scale: 0, x: "-50%", y: 25, backgroundColor: "#14532d" }}
        animate={{
          scale: 1,
          y: 0,
          backgroundColor: isOpen ? "#dcfce7" : "#14532d",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-10 left-1/2 z-20 h-[3.5rem] w-[3.5rem] rounded-full elevation-8"
        onClick={() => setIsOpen(!isOpen)}
      ></motion.button>
    </div>
  );
};

export default Nav;
