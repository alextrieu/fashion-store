import { useState } from "react";
// import headphonePhoto from "../../assets/images/1.png";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const btnOneStyle = {
    transform: isHovered ? "translateX(20px)" : "translateX(25px)",
    transition: "transform 0.3s ease-in-out",
  };

  const btnTwoStyle = {
    transform: isHovered ? "translateX(-20px)" : "translateX(-25px)",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <section className="flex flex-col items-center gap-5 p-10">
      <div className="relative">
        <i className="fa-regular fa-moon absolute -top-5 -left-8 text-2xl rotate-45"></i>
        <h1 className="text-4xl text-center font-semibold ">Find innovations only here</h1>
        <i className="fa-regular fa-moon transform scale-x-[-1] absolute top-7 -right-10 text-2xl"></i>
      </div>
      <p className="text-center text-sm">The basket store provides you with all the electronics home on products</p>
      <div className="cursor-pointer">
        <div className="flex justify-center items-center">
          <div
            style={btnOneStyle}
            className="w-20 h-20 border-gray-200 border-2 rounded-full flex items-center justify-center p-5"
          >
            <span
              className="text-black text-sm text-center"
              onMouseEnter={() => setIsHovered((prev) => !prev)}
              onMouseLeave={() => setIsHovered((prev) => !prev)}
            ></span>
          </div>{" "}
          <div
            style={btnTwoStyle}
            className="bg-custom-cream w-20 h-20 border-orange-300 border-2 rounded-full flex items-center justify-center p-5"
          >
            <span
              className="text-black text-sm text-center relative"
              onMouseEnter={() => setIsHovered((prev) => !prev)}
              onMouseLeave={() => setIsHovered((prev) => !prev)}
            >
              See More
              <i className="fa-solid fa-arrow-right-long absolute right-11 top-1 text-xl"></i>
            </span>
          </div>
        </div>
      </div>
      {/* <img src={headphonePhoto} className="rotate-45 w-32 h-32 object-cover absolute top-40 -right-14" /> */}
    </section>
  );
}
