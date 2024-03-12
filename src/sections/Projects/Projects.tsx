import Container from "../../components/Container";
// import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <Container
      id="projects"
      bgClasses={["bg-gradient-to-r", "from-white", "to-violet-100"]}
      cssClasses={["w-full"]}
      // title="Projects"
    >
      <div className="flex justify-around items-center grow flex-wrap my-5 flex-col h-44">
        <h2 className="text-3xl font-bold text-center text-violet-400">
          Projects
        </h2>
        <p className="text-2xl font-bold text-slate-700 text-center">
          Exciting things are on the way!
          <br /> Keep an eye out for new projects coming soon! 🤩
        </p>
        {/* <ProjectCards /> */}
      </div>
    </Container>
  );
};

export default Projects;
