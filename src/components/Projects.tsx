import { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "nyutab",
      description: "A Better NewTab page for Chrome/FireFox (WIP)",
      tech: ["ReactJS", "TailwindCSS"],
      demo: "https://google.com",
      source: "https://github.com/MohamedBechirMejri/nyutab",
    },
    {
      name: "Facebook Clone",
      description: "TheOdinProject's Capstone project",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "TypeScript",
        "Websocket",
        "More..",
      ],
      demo: "https://odinbook-next.vercel.app/",
      source: "https://github.com/MohamedBechirMejri/facebook-next",
    },
    {
      name: "Etch-A-Sketch",
      description:
        "Replicating the original Etch-A-Sketch Toy. I'm proud of this one.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://mohamedbechirmejri.github.io/ETCH-A-SKETCH/",
      source: "https://github.com/MohamedBechirMejri/ETCH-A-SKETCH",
    },
    {
      name: "Unlimited Wordle",
      description:
        "My first TS project, Wordle Clone with unlimited rounds per day. made in the Style of Motus because dad loves that show. ",
      tech: ["TypeScript", "ReactJS", "Tailwind CSS"],
      demo: "https://mohamedbechirmejri.github.io/unlimited-wordle",
      source: "https://github.com/MohamedBechirMejri/unlimited-wordle",
    },
    {
      name: "Photo Tagging Game",
      description: "Character finding game with global realtime leaderboard. ",
      tech: ["ReactJS", "Firebase", "Tailwind CSS"],
      demo: "https://photo-tagging-game-6d738.web.app/",
      source:
        "https://github.com/MohamedBechirMejri/where-s-waldo-a-photo-tagging-app",
    },
  ]);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-24">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {projects.map((p, i) => (
          <div
            key={"project#" + i}
            className="flex h-[24rem] w-[20rem] flex-col items-center justify-evenly overflow-hidden rounded-3xl border border-current p-4 ring-current transition-all duration-500 hover:rounded-[2.5rem] hover:font-medium hover:ring "
          >
            <h2 className="text-3xl font-semibold">{p.name}</h2>
            <p>
              <span className="font-medium">• Description: </span>{" "}
              {p.description}.
            </p>
            <p>
              <span className="font-medium">• Technologies Used: </span>
              {p.tech.map((t, i) => t + (i + 1 === p.tech.length ? "." : ", "))}
            </p>
            <div className="flex gap-4 underline">
              <a href={p.demo} target="_blank" rel="noreferrer">
                demo
              </a>
              <a href={p.source} target="_blank" rel="noreferrer">
                source code
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/MohamedBechirMejri"
        target="_blank"
        rel="noreferrer"
        className="text-lg font-medium transition-all hover:underline"
      >
        80+ More
      </a>
    </div>
  );
};

export default Projects;
