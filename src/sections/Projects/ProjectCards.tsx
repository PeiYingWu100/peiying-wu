import Projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  return (
    <div className="flex justify-center items-center grow flex-wrap">
      {Projects.map((item, ind) => (
        <ProjectCard key={ind} project={item} />
      ))}
    </div>
  );
};

export default ProjectCards;
