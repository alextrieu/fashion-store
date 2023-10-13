import { Link } from "react-router-dom";

type IconNavbarProps = {
  setNavClick: React.Dispatch<React.SetStateAction<boolean>>;
  setCartClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const IconNavbar: React.FC<IconNavbarProps> = ({ setNavClick, setCartClick }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-xl flex gap-5">
          <span onClick={() => setNavClick((prev: boolean) => !prev)}>
            <i className="fa-solid fa-bars"></i>
          </span>
          <Link to={"/"}>
            <i className="fa-brands fa-drupal"></i>
          </Link>
        </div>
        <div className="flex gap-5 text-xl">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span onClick={() => setCartClick((prev: boolean) => !prev)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default IconNavbar;
