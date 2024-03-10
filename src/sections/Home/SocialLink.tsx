import { ReactElement } from "react";

export interface ProfileLink {
  bgColor: string;
  href: string;
  children: ReactElement;
}

const SocialLink = ({ bgColor, href, children }: ProfileLink) => {
  return (
    <a
      className={`${bgColor} hover:opacity-75 p-2 text-5xl`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default SocialLink;
