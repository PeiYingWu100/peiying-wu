import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
    <a className="underline text-violet-400" href={href} target="_blank">
      {children}
    </a>
  );
};

export default Link;
