import Container from "../../components/Container";
import SocialLinks from "./SocialLinks";
import TechStacks from "./TechStacks";

const Home = () => {
  return (
    <Container id="home">
      <div className="flex flex-col-reverse sm:flex-row w-full gap4 sm:gap-8 items-center">
        {/* left */}
        <article className="sm:w-1/2">
          <h1 className="max-w-xl text-2xl font-bold text-center sm:text-5xl text-slate-900 mt-3">
            Full-Stack Developer{" "}
            <img
              className="hidden sm:inline-block"
              src="../../public/engineer.svg"
              alt="Engineer"
              width="30"
              height="30"
            />
            ✨
          </h1>
          <p className="max-w-xl text-xl sm:text-2xl mt-3 text-center text-slate-700">
            Hi, I'm Pei-Ying Wu — A developer passionate about Front-end
            development with Economics and Math background based in Sydney,
            Australia. 📍
          </p>
          <div className="flex justify-center my-1 sm:my-3">
            <SocialLinks />
          </div>
        </article>

        {/* right */}
        <figure className="w-1/3 flex justify-center items-center">
          <img
            className="rounded-lg shadow-md"
            src="../../public/pei_ying_wu.jpg"
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
