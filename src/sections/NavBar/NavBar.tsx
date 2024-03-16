import { Link } from "react-scroll";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isEnText, setIsEnText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnText((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white">
        <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h2 className="text-2xl font-medium w-56 h-8 inline-block">
            <Link
              spy={true}
              smooth={true}
              to="home"
              offset={-70}
              className="relative"
            >
              <span
                className={`absolute transition-opacity duration-500 w-56 ${
                  isEnText ? "opacity-100" : "opacity-0"
                }`}
              >
                Welcome! 你好!
              </span>
              <span
                className={`absolute transition-opacity duration-500 w-56 ${
                  isEnText ? "opacity-0" : "opacity-100"
                }`}
              >
                Welcome! Hello!
              </span>
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
