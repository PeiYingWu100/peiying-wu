import { ReactElement } from "react";

interface Props {
  id: "home" | "about" | "projects" | "contact";
  bgClasses?: string[];
  cssClasses?: string[];
  title?: string;
  children: ReactElement;
}

const Container = ({
  id,
  bgClasses = [""],
  cssClasses = [""],
  title,
  children,
}: Props) => {
  return (
    <section
      id={id}
      className={`min-h-[calc(100svh-74px)] flex flex-col justify-center item-center sm:gap-4 p-3 sm:p-16 ${bgClasses?.join(
        " "
      )}`}
    >
      <div className={`max-w-5xl mx-auto ${cssClasses?.join(" ")}`}>
        {title !== "" && (
          <h2 className="text-3xl font-medium text-center text-violet-400">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Container;
