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
      className={`flex flex-col justify-center items-center gap-4 w-full min-h-72 mb-16 flex-nowrap shadow-lg md:shadow-none p-4 md:p-0 rounded-lg ${
        IsImgRight ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <figure className="w-full md:w-5/12 flex justify-center items-center">
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={img}
          alt="test"
          width="360"
          height="170"
        />
      </figure>
      <article className="w-full md:w-7/12 min-h-60 flex flex-col justify-between">
        <div className="text-slate-700">
          <h3 className="text-violet-400 text-2xl mb-2 font-semibold">
            {title}
          </h3>
          <div>{details}</div>
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
          <p className="w-full">
            Tech: <strong className="text-slate-700">{tech}</strong>
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
