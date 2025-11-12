import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ArrowButton: React.FC = () => {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-[17%] w-full flex flex-col justify-center items-center transition-opacity duration-500 opacity-100 z-[500]">
      <button
        className="z-50 p-2 absolute flex flex-col justify-center items-center bottom-10"
        onClick={handleClick}
      >
        <span className="text-2xl text-white md:text-6xl font-semibold">Scroll Down</span>
        <IoIosArrowDown className="text-2xl text-white md:text-6xl"/>
      </button>
    </div>
  );
};
export default ArrowButton;
