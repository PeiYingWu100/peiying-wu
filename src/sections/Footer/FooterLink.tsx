import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: Props) => {
  const url = new URL(href);

  return (
    <a
      href={url.href}
      className="text-amber-100 hover:text-amber-200"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default FooterLink;
