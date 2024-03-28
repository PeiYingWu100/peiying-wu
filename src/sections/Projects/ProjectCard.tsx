import Button from "../../components/Button";
import { Project } from "../../data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({
  project: {
    img,
    title,
    details,
    features,
    tech,
    githubLink,
    demoLink,
    IsImgRight,
  },
}: Props) => {
  const githubUrl = new URL(githubLink);
  const demoUrl = new URL(demoLink);

  return (
    <div
      role="card"
      className={`flex flex-col justify-center items-center gap-8 w-full min-h-72 mb-16 flex-nowrap shadow-lg md:shadow-none p-4 md:p-0 rounded-lg ${
        IsImgRight ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <figure className="w-full md:w-1/2 flex justify-center items-center">
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={img}
          alt="test"
          width="360"
          height="170"
        />
      </figure>
      <article className="w-full md:w-1/2 min-h-60 flex flex-col justify-between">
        <div>
          <h3 className="text-violet-400 text-2xl mb-2 font-semibold">
            {title}
          </h3>
          <div className="text-slate-700">{details}</div>
          {features && (
            <div className="p-5">
              <ul className="list-disc">
                {features.map((feature, ind) => (
                  <li key={ind}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className={`flex flex-row justify-center gap-4 ${
            features ? "" : "mt-4"
          } flex-initial flex-wrap`}
        >
          <p className="text-slate-700 w-full ">
            Tech: <strong>{tech}</strong>
          </p>
          <Button
            cssClasses={["flex-grow", "shrink-0", "basis-0"]}
            href={githubUrl.href}
          >
            Source Code
          </Button>
          <Button
            cssClasses={["flex-grow", "shrink-0", "basis-0"]}
            href={demoUrl.href}
          >
            Demo
          </Button>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
