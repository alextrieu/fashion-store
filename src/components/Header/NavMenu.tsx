export default function NavMenu() {
  return (
    <>
      <ul className="list-none flex flex-col gap-4 mt-16 px-5">
        <li className="font-bold cursor-pointer">NEW</li>
        <li className="flex justify-between items-center cursor-pointer">
          <span className="font-bold">FEATURED</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>
        <li className="flex justify-between items-center cursor-pointer">
          <span className="font-bold">EARRINGS</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>
        <li className="flex justify-between items-center cursor-pointer">
          <span className="font-bold">RINGS</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>
        <li className="flex justify-between items-center cursor-pointer">
          <span className="font-bold">NECKLACES</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>
        <li className="flex justify-between items-center cursor-pointer">
          <span className="font-bold">BRACELETS</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>
        <li className="cursor-pointer">
          <span className="font-bold">MEN'S</span>
        </li>
        <li className="cursor-pointer">
          <span className="font-bold">DIAMONDS</span>
        </li>
      </ul>
      <hr className="border-t mt-5 mb-5 border-black" />
      <ul className="list-none flex flex-col gap-4 px-5">
        <li className="cursor-pointer">Stores & Services</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Help</li>
      </ul>
      <hr className="border-t mt-5 mb-5 border-black" />
    </>
  );
}
