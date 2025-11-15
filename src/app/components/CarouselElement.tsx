'use client'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DownloadButton from "./DownloadButton";
import Image from "next/image";
import { Images } from '../assets/CloudinaryAssets';
// import CurtainReverse from './CurtainReverse';

// create a typed alias so TS treats Next's Image as a valid JSX component
// const NextImage = Image as unknown as ComponentType<any>;

interface Magazine {
  index: number;
  year: number;
  title: string;
  image: string;
  url: string;
}

interface CarouselElementProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
  magazine: Magazine;
  direction: number; // Direction of animation
}

const CarouselElement = ({
  setMagNo,
  setDwnldIsClicked,
  magazine,
  direction,
}: CarouselElementProps) => {
  const router = useRouter();

  const [viewClicked, setViewClicked] = useState(false);

const handleAnimationComplete = () => {
  // Redirect based on magazine index: 0 -> latest, 1 -> old
  const route = magazine.index === 0 ? '/magazine-latest' : '/magazine-old';
  router.push(route);


};

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-4 justify-center text-white h-fit w-fit"
      initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
      transition={{
        x: { duration: 0.5 },
        opacity: { duration: 0.4 },
      }}
    >

        {/* <div className="absolute inset-0 z-50">
          <CurtainReverse onAnimationComplete={handleAnimationComplete} />
          </div> */}

      {/* Magazine Image */}
      <Image
        src={magazine.image}
        alt={magazine.title}
        width={500}
        height={700}
        className="h-[50vh] sm:h-[50vh] md:h-[60vh] w-auto object-contain"
      />

      {/* Buttons */}
      <div className="flex gap-4 items-center justify-center">
        {/* View Button */}
        <motion.button
      onClick={() => {
        handleAnimationComplete()
        setMagNo(magazine.index);
      }}
      className="relative py-3 px-8 text-xl font-semibold rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 overflow-hidden focus:outline-none transition-all duration-300 mt-6 cursor-pointer z-10"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      <span className="relative z-10">View</span>
    </motion.button>

        {/* Download Button */}
        <DownloadButton
          setMagNo={setMagNo}
          magazine={magazine}
          setDwnldIsClicked={setDwnldIsClicked}
        />
      </div>
    </motion.div>
  );
};

export default CarouselElement;
