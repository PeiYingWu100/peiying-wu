import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import NavList from "./NavList";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-10 shadow-md">
        <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <Link spy={true} smooth={true} to="home">
              你好! Welcome!
            </Link>
          </h1>

          <div>
            {/* mobile */}
            <button
              className="text-3xl sm:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
            {/* desktop nav list */}
            <nav
              className="hidden sm:block space-x-8 text-xl"
              arial-label="main"
            >
              <ul className="flex gap-6">
                <NavList
                  list_classes={[
                    "hover:text-blue-600",
                    "transition",
                    "cursor-pointer",
                  ]}
                />
              </ul>
            </nav>

            {/* mobile nav list */}
            {menuOpen && (
              <div>
                <ul className="sm:hidden block absolute w-full left-0 right-0 bg-white transition shadow-md text-center text-xl">
                  <NavList
                    list_classes={[
                      "py-4",
                      "hover:bg-blue-800",
                      "hover:text-white",
                    ]}
                  />
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default NavBar;
