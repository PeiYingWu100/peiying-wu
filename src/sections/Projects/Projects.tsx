import Container from "../../components/Container";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <Container
      id="projects"
      bgClasses={[
        "bg-gradient-to-r",
        "from-white",
        "to-violet-100",
        "justify-center",
      ]}
      cssClasses={["w-full"]}
      title="Projects"
    >
      <div className="flex justify-center items-center grow flex-wrap my-5">
        <ProjectCards />
        <p className="text-xl font-bold text-slate-700 text-center">
          More Exciting things are on the way!
          <br /> Keep an eye out for new projects coming soon! 🤩
        </p>
      </div>
    </Container>
  );
};

export default Projects;
