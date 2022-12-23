import { motion } from "framer-motion";

const Hero = () => {
  const firstName = "Mohamed Bechir".split("");
  const lastName = "Mejri".split("");
  const profession = "full-stack web developer".split("");

  const nameAnimation = (letter: string) => ({
    initial: {
      opacity: 0,
      y: 50,
      scaleY: 0,
      display: "inline-block",
      transformOrigin: "bottom",
      marginInline: letter === " " ? ".25rem" : "",
    },
    animate: { opacity: 1, y: 0, scaleY: 1 },
  });

  const professionAnimation = (letter: string, i: number) => ({
    initial: {
      opacity: 0,
      x: -i,
      display: "inline-block",
      transformOrigin: "bottom",
      marginInline: letter === " " ? ".25rem" : "",
    },
    animate: { opacity: 1, y: 0 },
  });

  return (
    <section
      id="hero"
      className="flex h-screen w-full items-center justify-center p-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl font-bold transition-all sm:text-8xl">
          {firstName.map((letter, i) => (
            <motion.span
              {...nameAnimation(letter)}
              transition={{
                delay: i / 25,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              key={"letter#" + i}
            >
              {letter}
            </motion.span>
          ))}
          <br />
          {lastName.map((letter, i) => (
            <motion.span
              {...nameAnimation(letter)}
              transition={{
                delay: (firstName.length + i) / 25,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              key={"letter#" + i}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="text-3xl">
          {profession.map((letter, i) => (
            <motion.span
              {...professionAnimation(letter, i)}
              transition={{
                delay: (firstName.length + lastName.length + 5 + i) / 25,
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              key={"letter#" + i}
            >
              {letter}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Hero;
