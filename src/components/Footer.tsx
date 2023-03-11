import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-between p-4 text-xl text-[#1f1818]">
      <div className="flex items-center justify-center gap-4">
        <a
          href="mailto:mohamedbechirmejri.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:text-yellow-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
            <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
            <path
              fill="#fbbc04"
              d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
            />
            <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
            <path
              fill="#c5221f"
              d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
            />
          </svg>
        </a>
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:text-zinc-500"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:text-blue-500"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:text-sky-500"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:text-purple-500"
        >
          <RxDiscordLogo />
        </a>
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:text-red-500"
        >
          <AiFillYoutube />
        </a>
      </div>

      <p className="flex select-none items-center gap-2 text-sm font-extrabold">
        <a
          href="https://github.com/MohamedBechirMejri/mohamedbechirmejri.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          Source Code
        </a>
        •<span> 2023</span>
      </p>
    </footer>
  );
};

export default Footer;
