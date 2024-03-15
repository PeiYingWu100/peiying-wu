import { ReactElement } from "react";

export interface ProfileLink {
  bgColor: string;
  href: string;
  children: ReactElement;
}

const SocialLink = ({ bgColor, href, children }: ProfileLink) => {
  const url = new URL(href);

  return (
    <a
      className={`${bgColor} hover:opacity-75 p-1 text-4xl`}
      href={url.href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default SocialLink;
