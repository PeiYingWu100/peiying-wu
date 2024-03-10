import { ReactElement } from "react";

interface Props {
  id: "home" | "about" | "projects" | "contact";
  backGroundClasses?: string[];
  classesList?: string[];
  title?: string;
  children: ReactElement;
}

const Container = ({
  id,
  backGroundClasses = [""],
  classesList = [""],
  title,
  children,
}: Props) => {
  return (
    <section
      id={id}
      className={`min-h-[calc(100svh-74px)] flex flex-col justify-center item-center sm:gap-4 p-3 sm:p-16 ${backGroundClasses?.join(
        " "
      )}`}
    >
      <div className={`max-w-5xl mx-auto ${classesList?.join(" ")}`}>
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
