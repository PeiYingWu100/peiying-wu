import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      className="text-amber-100 hover:text-amber-200"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default FooterLink;
