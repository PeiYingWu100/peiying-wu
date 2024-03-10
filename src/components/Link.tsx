import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Props) => {
  const url = new URL(href);

  return (
    <a className="underline text-violet-400" href={url.href} target="_blank">
      {children}
    </a>
  );
};

export default Link;
