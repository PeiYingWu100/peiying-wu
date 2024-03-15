import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SocialLink, { ProfileLink } from "./SocialLink";

const ProfileLinks: ProfileLink[] = [
  {
    bgColor: "text-slate-700",
    href: "https://www.linkedin.com/in/peiyingwu",
    children: <FaLinkedin />,
  },
  {
    bgColor: "text-slate-700",
    href: "https://github.com/PeiYingWu100",
    children: <FaGithubSquare />,
  },
];

const SocialLinks = () => {
  return (
    <>
      {ProfileLinks.map((profileLink, ind) => (
        <SocialLink
          key={ind}
          bgColor={profileLink.bgColor}
          href={profileLink.href}
        >
          {profileLink.children}
        </SocialLink>
      ))}
    </>
  );
};

export default SocialLinks;
