import { Link } from "react-scroll";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white">
        <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h2 className="text-3xl font-medium">
            <Link spy={true} smooth={true} to="home" offset={-70}>
              你好! Welcome!
            </Link>
          </h2>

          <div>
            <MobileNav />
            <DesktopNav />
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
