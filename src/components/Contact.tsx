import socialLinks from "../../public/json/socialLinks.json";

const Contact = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-24">
      <h1 className="text-4xl font-bold">Connect with Me</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {socialLinks.map((l, i) => (
          <a
            href={l.link}
            target="_blank"
            rel="noreferrer"
            key={"link#" + i}
            className="flex h-[15rem] w-[20rem] flex-col items-center justify-evenly overflow-hidden rounded-3xl border border-current p-4 text-3xl font-semibold ring-current transition-all duration-300 hover:rounded-[2.5rem] hover:font-bold hover:ring active:rounded-[3.25rem]"
          >
            {l.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
