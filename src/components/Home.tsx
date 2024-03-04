import {
  FaLinkedin,
  FaGithubSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPhpstorm,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Tooltip from "./Tooltip";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100svh-74px)] flex flex-col justify-start sm:justify-center item-center gap-4 p-8 sm:p-16"
    >
      <div className="flex flex-col-reverse sm:flex-row w-full gap4 sm:gap-8">
        {/* left */}
        <article className="sm:w-1/2">
          <h1 className="max-w-xl text-3xl font-bold text-center sm:text-5xl text-slate-900">
            Full-Stack Developer{" "}
            <img
              className="hidden sm:inline-block"
              src="../../public/engineer.svg"
              alt="Engineer"
              width="30"
              height="30"
            />
          </h1>
          <p className="max-w-xl text-2xl mt-3 text-center text-slate-700">
            Hi, I'm Pei-Ying Wu — A Full-Stack developer passionate about
            Front-end development based in Sydney, Australia. 📍
          </p>
          <div className="flex justify-center my-3">
            <a
              className="text-blue-600 hover:text-blue-500 glow p-2 text-4xl"
              href="https://www.linkedin.com/in/peiyingwu"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-blue-600 hover:text-blue-500 glow p-2 text-4xl"
              href="https://github.com/PeiYingWu100"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </article>

        {/* right */}
        <div className="md:w-1/3 sm:mx-auto">
          <img
            className="rounded-lg w-1/2 md:w-full mx-auto"
            src="../../public/PeiYingWu.jpg"
            alt="Pei Ying Wu"
            width="277"
            height="327"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex flex-wrap item-center">
        <p className="text-xl text-slate-700 text-center">Tech skills:</p>
        <ul className="ml-5 text-5xl flex gap-4">
          <li>
            <Tooltip message={"HTML"}>
              <FaHtml5 className="text-orange-600" />
            </Tooltip>
          </li>
          <li>
            <div className="flex">
              <Tooltip message={"CSS"}>
                <FaCss3Alt className="text-blue-600" />
              </Tooltip>
              <Tooltip message={"Bootstrap"}>
                <FaBootstrap className="text-violet-600 text-[3.2rem]" />
              </Tooltip>
              <Tooltip message={"Tailwind"}>
                <SiTailwindcss className="text-sky-400 rounded bg-gray-800 p-2 text-[2.6rem]" />
              </Tooltip>
            </div>
          </li>
          <li>
            <div className="flex">
              <Tooltip message={"JavaScript"}>
                <SiJavascript className="text-yellow-600 text-[2.6rem]" />
              </Tooltip>
              <Tooltip message={"TypeScript"}>
                <SiTypescript className="text-white rounded bg-gray-800 p-2 text-[2.6rem] m-1" />
              </Tooltip>
              <Tooltip message={"React"}>
                <FaReact className="text-blue-600  rounded bg-gray-800 p-2 text-[2.6rem] my-1" />
              </Tooltip>
              <Tooltip message={"Next.js"}>
                <TbBrandNextjs className="text-white rounded bg-gray-800 p-2 text-[2.6rem] m-1" />
              </Tooltip>
            </div>
          </li>
          <li>
            <div className="flex">
              <Tooltip message={"PHP"}>
                <SiPhpstorm className="text-blue-900 text-[2.6rem]" />
              </Tooltip>
              <Tooltip message={"SQL"}>
                <SiMysql className="text-white rounded bg-gray-800 p-2 text-[2.6rem] m-1" />
              </Tooltip>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
