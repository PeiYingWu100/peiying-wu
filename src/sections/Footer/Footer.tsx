import { IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-scroll";
import NavList from "../../components/NavList";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-violet-400 p-4">
      <section className="max-w-5xl mx-auto p-4 text-white">
        <nav className="block space-x-8 text-xl" arial-label="main">
          <ul className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <li>
              <Link
                spy={true}
                smooth={true}
                to="home"
                offset={-70}
                className="cursor-pointer"
              >
                <IoIosArrowDropupCircle className="animate-bounce w-8 h-8" />
              </Link>
            </li>
            <NavList
              cssClasses={[
                "cursor-pointer",
                "hover:underline",
                "hover:decoration-2",
              ]}
              onClick={() => null}
            />
          </ul>
        </nav>
        <p className="text-center mt-4">
          Developed with{" "}
          <FooterLink href="https://www.typescriptlang.org/">
            TypeScript
          </FooterLink>
          , <FooterLink href="https://react.dev/">React.js</FooterLink>, and{" "}
          <FooterLink href="https://tailwindcss.com/">Tailwind CSS</FooterLink>,
          and deployed on{" "}
          <FooterLink href="https://vercel.com/">Vercel</FooterLink>.
          <br />
          Copyright © 2024.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
