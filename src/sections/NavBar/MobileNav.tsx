import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import NavList from "../../components/NavList";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        className="text-3xl sm:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      {/* nav list */}
      {menuOpen && (
        <div>
          <ul className="sm:hidden block absolute w-full left-0 right-0 bg-white transition shadow-md text-center text-xl">
            <NavList
              cssClasses={["py-4", "hover:bg-violet-400", "hover:text-white"]}
              onClick={() => setMenuOpen(false)}
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
