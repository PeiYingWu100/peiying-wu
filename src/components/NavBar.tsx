import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
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

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const content = (
    <>
      <div className="lg:hidden block absolute top-14 w-full left-0 bg-white right-0 transition shadow-md">
        <ul className="text-center text-xl">
          {NavLinks.map((link) => (
            <Link spy={true} smooth={true} key={link.href} to={link.href}>
              <li className="py-4 hover:bg-blue-800 hover:text-white">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 lg:py-5 px-10 py-4">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl">你好! Welcome!</h2>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              {NavLinks.map((link) => (
                <Link spy={true} smooth={true} key={link.href} to={link.href}>
                  <li className="hover:text-blue-600 transition hover:border-b-2 border-slate-900 hover:border-blue-600 cursor-pointer">
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div>{menuOpen && content}</div>

        <button
          className="block md:hidden transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
