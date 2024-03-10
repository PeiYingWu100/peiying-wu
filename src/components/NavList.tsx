import { Link } from "react-scroll";

interface NavLink {
  section: string;
  name: string;
}

const NavLinks: NavLink[] = [
  { section: "home", name: "Home" },
  { section: "about", name: "About" },
  { section: "projects", name: "Projects" },
  { section: "contact", name: "Contact" },
];

interface Props {
  cssClasses: string[];
  onClick: () => void;
}

const NavList = ({ cssClasses, onClick }: Props) => {
  return NavLinks.map((link) => (
    <Link
      spy={true}
      smooth={true}
      key={link.section}
      to={link.section}
      onClick={onClick}
      offset={-70}
    >
      <li className={cssClasses.join(" ")}>{link.name}</li>
    </Link>
  ));
};

export default NavList;
