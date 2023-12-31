import { ReactNode } from "react";
type closeButtonHeaderProps = {
  onToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  children: ReactNode;
};

const closeButtonHeader: React.FC<closeButtonHeaderProps> = ({ onToggleCart, isOpen, children }) => {
  return (
    <>
      <nav
        className={`bg-custom-cream text-black flex flex-col overflow-auto transition-transform duration-300 ease-in-out fixed top-0 left-0 h-screen w-screen z-10 ${
          isOpen ? "" : "translate-x-full"
        } transform}`}
      >
        <span
          className="text-3xl cursor-pointer top-0 left-0 right-0 fixed bg-custom-cream z-10 w-full h-16 flex items-center justify-end px-4"
          onClick={() => onToggleCart((prev) => !prev)}
        >
          <i className="fa-solid fa-xmark"></i>
        </span>
        {children}
      </nav>
    </>
  );
};

export default closeButtonHeader;
