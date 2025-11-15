import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ArrowButtonProps {
    setArrowClicked: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ setArrowClicked }) => {

  const handleClick = () => {
    setArrowClicked(true);
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-[5%] w-full flex flex-col justify-center items-center transition-opacity duration-500 opacity-100 z-[500]">
      <button
        className="z-50 p-2 absolute flex flex-col justify-center items-center bottom-10 cursor-pointer animate-bounce"
        onClick={handleClick}
      >
        
        <IoIosArrowDown className="text-2xl text-white md:text-5xl"/>
      </button>
    </div>
  );
};
export default ArrowButton;
