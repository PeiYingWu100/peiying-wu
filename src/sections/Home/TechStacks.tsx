import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPhpstorm,
  SiMysql,
  SiTypescript,
  SiJquery,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Tooltip from "../../components/Tooltip";

const TechStacks = () => {
  return (
    <div className="w-full flex flex-wrap item-center justify-center lg:justify-start sm:mt-2">
      <p className="text-xl text-slate-700 text-center">Tech Stack:</p>
      <ul className="ml-5 text-5xl flex gap-4 flex-wrap justify-center">
        <li className="flex">
          <Tooltip message={"HTML"}>
            <FaHtml5 className="text-orange-600" />
          </Tooltip>
          <Tooltip message={"CSS"}>
            <FaCss3Alt className="text-blue-600" />
          </Tooltip>
        </li>
        <li className="flex">
          <Tooltip message={"Bootstrap"}>
            <FaBootstrap className="text-violet-600 text-[3.2rem]" />
          </Tooltip>
          <Tooltip message={"Tailwind"}>
            <SiTailwindcss className="text-sky-400 rounded bg-gray-800 p-2 text-[2.6rem]" />
          </Tooltip>
        </li>
        <li className="flex">
          <Tooltip message={"JavaScript"}>
            <SiJavascript className="text-yellow-600 text-[2.6rem]" />
          </Tooltip>
          <Tooltip message={"Jquery"}>
            <SiJquery className="text-white rounded bg-gray-800 p-2 text-[2.6rem] m-1" />
          </Tooltip>
          <Tooltip message={"TypeScript"}>
            <SiTypescript className="text-white rounded bg-gray-800 p-2 text-[2.6rem] my-1" />
          </Tooltip>
          <Tooltip message={"React"}>
            <FaReact className="text-blue-600  rounded bg-gray-800 p-2 text-[2.6rem] m-1" />
          </Tooltip>
          {/* <Tooltip message={"Next.js"}>
            <TbBrandNextjs className="text-white rounded bg-gray-800 p-2 text-[2.6rem] my-1" />
          </Tooltip> */}
        </li>
        <li className="flex">
          <Tooltip message={"PHP"}>
            <SiPhpstorm className="text-blue-900 text-[2.6rem]" />
          </Tooltip>
          <Tooltip message={"SQL"}>
            <SiMysql className="text-white rounded bg-gray-800 p-2 text-[2.6rem] m-1" />
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default TechStacks;
