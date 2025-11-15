import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import BhorAnimation from "./BhorAnimation";
import AutoCarousel from "./Carousel";
import useResponsiveScrollRatio from "./parallaxRatio";
import BhorSvgFirst from "./BhorSvgFirst";
import BhorSvgSecond from "./BhorSvgSecond";
import BhorSVG2025 from "./BhorSVG2025";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Videos } from '../assets/CloudinaryAssets';
// import CurtainReverse from "./CurtainReverse";

interface SecondSectionProps {
  bhorEnded: boolean;
  setBhorEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setViewClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
}

const SecondSection = ({
  setMagNo,
  setViewClicked,
  setDwnldIsClicked,
  bhorEnded,
  setBhorEnded,
}: SecondSectionProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasAppeared, setHasAppeared] = useState(false); // Track if the animation has already been triggered
  const { smallScreen } = useResponsiveScrollRatio();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasChanged, setHasChanged] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // 50% of the section should be visible
  });


  // Set the state when the section first comes into view
  useEffect(() => {
    if (inView && !hasAppeared) {
      setHasAppeared(true);
    }
  }, [inView, hasAppeared]);

  useEffect(() => {
    if (currentIndex !== 0) {
      setHasChanged(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.playbackRate = 0.6;
    const onLoaded = () => { vid.playbackRate = 0.3; };
    vid.addEventListener("loadedmetadata", onLoaded);
    return () => vid.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <div
      ref={ref}
      className="h-screen w-full flex flex-row justify-center items-center relative bg-black overflow-hidden"
    >

      {/* Black shadow gradient (full section) */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-100 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-50" /> */}

      {/* Black shadow at top only */}
      <div className="absolute top-0 left-0 w-full h-32 z-50 pointer-events-none bg-gradient-to-b from-black/100 to-transparent" />

      {/* Background video - put file at public/videos/bg.mp4 or replace src with remote URL */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster="/videos/bg-poster.jpg"
      >
        <source src={Videos.SecondSectionBG} type="video/mp4" />
      </video>

      {/* <CurtainReverse /> */}

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
              style={{ opacity: 1 }}
              transition={{ duration: 3.2 }}
              className="z-10"
            >
              {currentIndex == 0 ? <BhorSvgFirst /> : currentIndex == 1 ? <BhorSvgSecond /> : <BhorSVG2025 />}
            </motion.div>
          )}
        </div>
      )}
      <div className="pt-0 lg:pt-[14vh] h-screen w-fit mb-20">
        <AutoCarousel
          setMagNo={setMagNo}
          setViewClicked={setViewClicked}
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
