import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[calc(100svh-74px)] flex flex-col justify-start p-3 sm:p-16 bg-gradient-to-r from-white to-violet-100"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-medium text-center text-violet-400">
          Protfolio
        </h2>
        <div className="flex justify-center items-center grow flex-wrap my-10">
          <ProjectCards />
        </div>
      </div>
    </section>
  );
};

export default Projects;
