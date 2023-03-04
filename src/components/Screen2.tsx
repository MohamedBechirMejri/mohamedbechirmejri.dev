import Image from "next/image";

const Screen2 = () => {
  const projects = [
    {
      name: "memetube",
      logo: "/assets/memetube.svg",
      description: `MemeTube is a video sharing platform that allows users to upload and share Memes with the world. Users can also comment on videos and like/save them.
          I created it to store my meme collection and share it with my friends. and also to learn how to make PWAs.
          It might not load fast because the firebase quota is exceeded. xD
          `,
      tech: ["Nextjs", "TypeScript", "TailwindCSS", "Firebase", "PWA"],
      demo: "https://memetube.vercel.app/",
      sourceCode: "https://github.com/MohamedBechirMejri/memetube",
      imgStyle: {},
      style: { background: "#f59e0b" },
    },
    {
      name: "odinbook",
      logo: "/assets/odinbook.svg",
      description: "A Facebook clone for The Odin Project.",
      tech: [
        "Nextjs",
        "TypeScript",
        "TailwindCSS",
        "Firebase",
        "MongoDB",
        "Facebook Login",
        "JWT",
        "...More",
      ],
      demo: "https://odinbook-next.vercel.app/",
      sourceCode: "https://github.com/MohamedBechirMejri/facebook-next",
      imgStyle: { margin: "-1rem" },
      style: { background: "white" },
    },
    {
      name: "ETCH-A-SKETCH",
      logo: "/assets/etchasketch.svg",
      description:
        "Replicating the original Etch-A-Sketch Toy. I'm proud of this one since I accurately replicated the original toy while still being a beginner.",
      tech: ["HTML", "CSS", "Javascript"],
      demo: "https://mohamedbechirmejri.github.io/ETCH-A-SKETCH/",
      sourceCode: "https://github.com/MohamedBechirMejri/ETCH-A-SKETCH",
      imgStyle: {},
      style: { background: "#a01632" },
    },

    {
      name: "nyutab",
      logo: "https://raw.githubusercontent.com/MohamedBechirMejri/nyutab/7d0c9c75ff630e42d9d6b3b022073c0320a9b09e/.github/Assets/nyutab-light.svg",
      description:
        "A chrome extension that replaces the bland default new tab page with a beautiful and feature packed one.",
      tech: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer-Motion",
        "Vite",
        "MDX",
      ],
      demo: "https://nyutab.vercel.app/",
      sourceCode: "https://github.com/MohamedBechirMejri/nyutab",
      imgStyle: {},
    },
    {
      name: "lab",
      logo: "/assets/lab.svg",
      description:
        "A Place where I experiment with new technologies and ideas.",
      tech: ["Nextjs", "TypeScript", "TailwindCSS", "...More"],
      demo: "https://lab.mohamedbechirmejri.dev",
      sourceCode: "https://github.com/MohamedBechirMejri/lab",
      imgStyle: { marginBottom: ".5rem" },
      style: { background: "#3b82f6" },
    },
  ];

  return (
    <div className="grid h-full select-none grid-cols-3 grid-rows-2 bg-[#34353c]">
      {projects.map((project, i) =>
        i < 5 ? (
          <div
            key={i}
            className="grid place-items-center bg-inherit "
            style={{ ...project.style }}
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
      >
        50+ More...
      </a>
    </div>
  );
};

export default Screen2;
