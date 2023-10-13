import { useState } from "react";

import IconNavbar from "./IconNavBar";
import NavMenu from "./NavMenu";
import AccAccess from "./AccAccess";
import CloseButtonHeader from "./CloseButtonHeader";

export default function Header() {
  const [navClick, setNavClick] = useState<boolean>(false);
  const [cartClick, setCartClick] = useState<boolean>(false);

  return (
    <>
      <header className="p-5 bg-custom-cream text-black">
        <IconNavbar setNavClick={setNavClick} setCartClick={setCartClick} />

        <CloseButtonHeader onToggleCart={setNavClick} isOpen={navClick}>
          <NavMenu />
          <AccAccess />
        </CloseButtonHeader>

        <CloseButtonHeader onToggleCart={setCartClick} isOpen={cartClick}>
          <p className="mt-14">hello</p>
        </CloseButtonHeader>
      </header>
    </>
  );
}
