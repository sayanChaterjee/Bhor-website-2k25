import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BhorAnimation from "./BhorAnimation";
import AutoCarousel from "./Carousel";
import useResponsiveScrollRatio from "./parallaxRatio";
import BhorSvgFirst from "./BhorSvgFirst";
import BhorSvgSecond from "./BhorSvgSecond";
import { motion } from "framer-motion";

interface SecondSectionProps {
  bhorEnded: boolean;
  setBhorEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
}

const SecondSection = ({
  setMagNo,
  setDwnldIsClicked,
  bhorEnded,
  setBhorEnded,
}: SecondSectionProps) => {
  const [hasAppeared, setHasAppeared] = useState(false); // Track if the animation has already been triggered
  const { smallScreen } = useResponsiveScrollRatio();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasChanged, setHasChanged] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // 50% of the section should be visible
  });

  // Set the state when the section first comes into view
  if (inView && !hasAppeared) {
    setHasAppeared(true);
  }

  useEffect(() => {
    if (currentIndex !== 0) {
      setHasChanged(true);
    }
  }, [currentIndex]);

  return (
    <div
      ref={ref}
      className="h-screen w-full flex flex-row justify-center items-center relative bg-black overflow-hidden"
    >
      
      <div className="h-full w-full absolute overflow-hidden ">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-60%" }}
          transition={{
            duration: 15,
            delay: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className=" main-gradient -z-40 absolute bottom-0  flex justify-center items-center"
        />
      </div>
      <div className="-z-10 ">
      
      </div>
      {!smallScreen && (
        <div className="h-screen w-[50vw] flex flex-col justify-center items-center">
          {hasAppeared && !bhorEnded ? (
            <BhorAnimation setBhorEnded={setBhorEnded} />
          ) : (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 1 }}
              animate={hasChanged ? { opacity: [0, 1] } : { opacity: 1 }}
              transition={{ duration: 3.2 }}
            >
              {currentIndex == 0 ? <BhorSvgFirst /> : <BhorSvgSecond />}
            </motion.div>
          )}
        </div>
      )}
      <div className="pt-0 lg:pt-[14vh] h-screen w-fit mb-20">
        <AutoCarousel
          setMagNo={setMagNo}
          setDwnldIsClicked={setDwnldIsClicked}
          hasAppeared={hasAppeared}
          bhorEnded={bhorEnded}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default SecondSection;
function useImagePreloader() {
  throw new Error("Function not implemented.");
}

