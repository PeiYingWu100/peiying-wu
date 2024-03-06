import { Link } from "react-scroll";

interface NavLink {
  href: string;
  name: string;
}

const NavLinks: NavLink[] = [
  { href: "home", name: "Home" },
  { href: "about", name: "About" },
  { href: "projects", name: "Projects" },
  { href: "contact", name: "Contact" },
];

interface Props {
  list_classes: string[];
  onClick: () => void;
}

const NavList = ({ list_classes, onClick }: Props) => {
  return NavLinks.map((link) => (
    <Link
      spy={true}
      smooth={true}
      key={link.href}
      to={link.href}
      onClick={onClick}
      offset={-70}
    >
      <li className={list_classes.join(" ")}>{link.name}</li>
    </Link>
  ));
};

export default NavList;
