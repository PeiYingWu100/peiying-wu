import Container from "../../components/Container";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <Container
      id="projects"
      backGroundClasses={["bg-gradient-to-r", "from-white", "to-violet-100"]}
      classesList={["w-full"]}
      title="Protfolio"
    >
      <div className="flex justify-center items-center grow flex-wrap my-5">
        <ProjectCards />
      </div>
    </Container>
  );
};

export default Projects;
