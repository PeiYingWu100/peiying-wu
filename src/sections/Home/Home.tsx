import Container from "../../components/Container";
import SocialLinks from "./SocialLinks";
import TechStacks from "./TechStacks";

const Home = () => {
  return (
    <Container
      id="home"
      bgClasses={[
        "justify-center",
        "bg-gradient-to-tr",
        "from-white",
        "to-violet-50",
      ]}
    >
      <div className="flex flex-col-reverse sm:flex-row w-full gap-4 sm:gap-6 items-center sm:justify-center">
        {/* left */}
        <article className="sm:w-2/3">
          <h1 className="max-w-xl text-2xl font-bold text-center sm:text-5xl text-slate-900 mt-3">
            Full-Stack Developer{" "}
            <img
              className="hidden lg:inline-block"
              src="/engineer.svg"
              alt="Engineer"
              width="30"
              height="30"
            />
          </h1>
          <p className="max-w-xl text-xl sm:text-2xl mt-3 text-center text-slate-700">
            Hello, I'm Pei-Ying Wu — A developer passionate about front-end
            development!
          </p>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </article>

        {/* right */}
        <figure className="w-1/3 flex justify-center items-center">
          <img
            className="rounded-lg shadow-md"
            src="/pei_ying_wu.jpeg"
            alt="Pei Ying Wu"
            width="277"
            height="327"
          />
        </figure>
      </div>

      {/* bottom */}
      <TechStacks />
    </Container>
  );
};

export default Home;
