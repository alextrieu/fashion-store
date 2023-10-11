import { useState, CSSProperties, useMemo } from "react";
import NavMenu from "./NavMenu";
import AccAccess from "./AccAccess";

export default function Header() {
  const [navClick, setNavClick] = useState(false);

  const handleNavClick = () => {
    setNavClick((prev) => !prev);
  };

  const navStyle: CSSProperties = useMemo(
    () => ({
      transform: navClick ? "translateX(0%)" : "translateX(-100%)",
      transition: "transform 0.3s ease-in-out",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      zIndex: 1,
    }),
    [navClick]
  );

  return (
    <>
      <header className="p-5 bg-custom-cream text-black">
        <div className="flex justify-between items-center">
          <div className="text-xl">
            <i className="fa-brands fa-drupal"></i>
          </div>
          <div className="flex gap-5 text-xl">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span onClick={handleNavClick}>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
        <nav style={navStyle} className=" bg-custom-cream text-black flex flex-col overflow-auto p-5">
          <NavMenu />
          <AccAccess />
        </nav>
        {navClick && (
          <span
            className="text-3xl cursor-pointer top-0 left-0 right-0 fixed bg-custom-cream z-10 w-full h-16 flex items-center justify-end px-4 border-2 border-b-neutral-200"
            onClick={handleNavClick}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        )}
      </header>
    </>
  );
}
