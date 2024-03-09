import Projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export interface Project {
  img: string;
  title: string;
  details: string;
  tech: string;
  githubLink: string;
  demoLink: string;
  IsImgRight?: boolean;
}

const ProjectCards = () => {
  return (
    <div className="flex justify-center items-center grow flex-wrap">
      {Projects.map((project, ind) => (
        <ProjectCard
          key={ind}
          img={project.img}
          title={project.title}
          details={project.details}
          tech={project.tech}
          githubLink={project.githubLink}
          demoLink={project.demoLink}
          IsImgRight={project.IsImgRight}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
