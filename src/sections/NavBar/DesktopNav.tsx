import NavList from "../../components/NavList";

const DesktopNav = () => {
  return (
    <>
      <nav className="hidden sm:block space-x-8 text-xl" arial-label="main">
        <ul className="flex gap-6">
          <NavList
            cssClasses={[
              "hover:bg-violet-400",
              "hover:text-white",
              "p-4",
              "rounded-lg",
              "transition",
              "cursor-pointer",
            ]}
            onClick={() => null}
          />
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
