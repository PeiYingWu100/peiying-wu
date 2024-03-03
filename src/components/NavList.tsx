import { Link } from "react-scroll";

interface NavLink {
  href: string;
  name: string;
}

const NavLinks: NavLink[] = [
  { href: "home", name: "Home" },
  { href: "about", name: "About" },
  { href: "project", name: "Project" },
  { href: "contact", name: "Contact" },
];

interface Props {
  list_classes: string[];
}

const NavList = ({ list_classes }: Props) => {
  return NavLinks.map((link) => (
    <Link spy={true} smooth={true} key={link.href} to={link.href}>
      <li className={list_classes.join(" ")}>{link.name}</li>
    </Link>
  ));
};

export default NavList;
