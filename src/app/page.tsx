"use client";

import Image from "next/image";
import { useState, useEffect, use } from "react";
import Curtain from "./components/Curtain";
import Carousel from "./components/Carousel";
import SceneOne from "./components/SceneOne";
import Border from "./components/Border";
import SceneOneMobile from "./components/SceneOneMobile";
import SecondSection from "./components/SecondSection";

export default function Home() {

  const [canScroll, setCanScroll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dwnldIsClicked, setDwnldIsClicked] = useState(false);
  const [magNo, setMagNo] = useState(0);
  const [bhorEnded, setBhorEnded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleCurtain = () => {
    document.body.style.overflow = "auto";
    setCanScroll(true);
  }

  return (
    <>
      {!canScroll &&
        <div className="absolute top-0 left-0 w-full h-full z-100">
          <Curtain onAnimationComplete={handleCurtain} />
        </div>
      }
      <div className="hidden lg:block">
      <SceneOne />
      </div>

      <div className="block lg:hidden">
      <SceneOneMobile />
      </div>


     <SecondSection 
        bhorEnded={bhorEnded}
        setBhorEnded={setBhorEnded}
        setDwnldIsClicked={setDwnldIsClicked}
        setMagNo={setMagNo}
      />
    </>
  );
}
