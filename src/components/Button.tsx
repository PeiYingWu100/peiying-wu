import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  list_classes?: string[];
}

const Button = ({ href, children, list_classes }: Props) => {
  const url = new URL(href);

  return (
    <a
      href={url.href}
      className={`rounded-lg w-full py-2 px-4 text-center text-white bg-violet-400 hover:opacity-75 ${list_classes?.join(
        " "
      )}`}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Button;
