import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100svh-74px)] flex flex-col-reverse justify-end sm:justify-center sm:flex-row item-center gap4 sm:gap-8 p-8 sm:p-16"
    >
      {/* left */}
      <article className="sm:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center sm:text-5xl text-slate-900">
          Full-Stack Developer{" "}
          <img
            className="hidden sm:inline-block"
            src="../../public/engineer.svg"
            alt="Engineer"
            width="30"
            height="30"
          />
        </h1>
        <p className="max-w-md text-2xl mt-4 text-center text-slate-700">
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
    </section>
  );
};

export default Home;
