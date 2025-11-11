import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import CarouselElement from "./CarouselElement";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Magazines = [
  {
    index: 0,
    year: 2023,
    title: "Bhor 2023",
    image: '/bhorCover2023.png',
    url: "/magazineview2023",
  },
  {
    index: 1,
    year: 2024,
    title: "Bhor 2024",
    image: '/bhorCover2024.png',
    url: "/magazineview2024",
  },
];


interface AutoCarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
  bhorEnded: boolean;
  hasAppeared: boolean;
}

const AutoCarousel = ({
  setMagNo,
  setDwnldIsClicked,
  hasAppeared,
  currentIndex,
  setCurrentIndex,
  bhorEnded,
}: AutoCarouselProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for left-to-right, -1 for right-to-left

  useEffect(() => {
    if (isHovered || !hasAppeared || !bhorEnded) return;

    setDirection(1);
    const interval = setInterval(() => {
      setDirection(-1); // Always slide left-to-right for auto transitions
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, bhorEnded, setCurrentIndex, hasAppeared]);

  const handleNext = () => {
    setDirection(-1); // Left-to-right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Magazines.length);
  };

  const handlePrev = () => {
    setDirection(1); // Right-to-left
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Magazines.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative overflow-hidden h-[100%] w-[100vw] md:w-[50vw] flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        {Magazines.map((magazine, index) =>
          index === currentIndex ? (
            <CarouselElement
              setMagNo={setMagNo}
              setDwnldIsClicked={setDwnldIsClicked}
              key={index}
              magazine={magazine}
              direction={direction}
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="z-[2] absolute left-20 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-600"
      >
        <IoIosArrowBack className="text-2xl" />
      </button>
      <button
        onClick={handleNext}
        className="z-[2] absolute right-20 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-gray-600"
      >
        <IoIosArrowForward className="text-2xl" />
      </button>
    </div>
  );
};

export default AutoCarousel;
