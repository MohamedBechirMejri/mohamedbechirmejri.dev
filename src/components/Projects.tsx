import projects from "../../public/json/projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-24"
    >
      <h1 className="text-4xl font-bold">My Projects</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {projects.map((p, i) => (
          <div
            key={"project#" + i}
            className="flex h-[24rem] w-[20rem] flex-col items-center justify-evenly overflow-hidden rounded-3xl border border-current p-4 ring-current transition-all duration-300 hover:rounded-[2.5rem] hover:font-medium hover:ring"
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
    </section>
  );
};

export default Projects;
