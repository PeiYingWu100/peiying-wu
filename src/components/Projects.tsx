import ProjectCard from "./ProjectCard";

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
        <div className="flex justify-center items-center grow flex-wrap">
          <ProjectCard />
          <div
            role="card"
            className="flex flex-initial max-w-2xl shadow-2xl rounded-lg p-6 bg-white m-6 mt-28"
          >
            <img
              className=""
              src="../../public/project_rawg.jpg"
              alt="test"
              width="360"
              height="170"
            />
            <article className="m-4">
              <h4 className="text-2xl">Project Title</h4>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quia iusto laboriosam explicabo ipsa fuga facere eum labore
                nulla repudiandae rem omnis optio pariatur architecto
                doloremque, minus est assumenda vitae?
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
