import Container from "../../components/Container";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <Container
      id="projects"
      bgClasses={["bg-gradient-to-r", "from-white", "to-violet-100"]}
      cssClasses={["w-full"]}
      title="Projects"
    >
      <div className="flex justify-center items-center grow flex-wrap my-5">
        <ProjectCards />
      </div>
    </Container>
  );
};

export default Projects;
