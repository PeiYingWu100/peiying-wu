import { useState } from "react";

const ProjectCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="card"
      className="custom-animation-card relative w-full h-72 bg-pink-300"
    >
      <img
        className="w-1/2 absolute left-0 z-10"
        src="../../public/project_rawg.jpg"
        alt="test"
        width="360"
        height="170"
      />
      <article
        className={`bg-white absolute right-0 -bottom-10 w-3/5 min-h-60 ${
          isHovered
            ? "custom-animation-content-back"
            : "custom-animation-content"
        }`}
        onMouseLeave={() => setIsHovered(true)}
        onMouseEnter={() => setIsHovered(false)}
      >
        <h4 className="text-2xl">Project Title</h4>
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia
          iusto laboriosam explicabo ipsa fuga facere eum labore nulla
          repudiandae rem omnis optio pariatur architecto doloremque, minus est
          assumenda vitae?
        </p>
      </article>
    </div>
  );
};

export default ProjectCard;
