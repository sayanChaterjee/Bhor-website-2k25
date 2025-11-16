"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Curtain from "./components/Curtain";
// import CurtainReverse from "./components/CurtainReverse";
import SceneOne from "./components/SceneOne";
import SceneOneMobile from "./components/SceneOneMobile";
import SecondSection from "./components/SecondSection";
import TextComponent from "./components/TextComponent";
import DownArrow from "./components/DownArrow";

export default function Home() {
  const [canScroll, setCanScroll] = useState(false);
  const [dwnldIsClicked, setDwnldIsClicked] = useState(false);
  const [viewClicked, setViewClicked] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const [magNo, setMagNo] = useState(0);
  const [bhorEnded, setBhorEnded] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [allAnimationEnd, setAllAnimationEnd] = useState(false);

  console.log(arrowClicked);

  const Router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleCurtain = () => {
    document.body.style.overflow = "auto";
    setCanScroll(true);
  };

  useEffect(() => {
    if (viewClicked) {
      setShowCurtain(true);

      const timeoutId = setTimeout(() => {
        if (magNo === 0) {
          Router.push("/magazine-latest");
        } else if (magNo === 1) {
          Router.push("/magazine-old");
        }
      }, 1);

      return () => clearTimeout(timeoutId);
    }
  }, [viewClicked, dwnldIsClicked, magNo, Router, showCurtain]);

  return (
    <div className="bg-[#001d41] snap-y snap-mandatory">
      {!canScroll && (
        <div className="absolute top-0 left-0 w-full h-full z-[100]">
          <Curtain onAnimationComplete={handleCurtain} />
        </div>
      )}

      <div className="snap-center">
      <div className="hidden lg:block">
        <SceneOne bhorEnded={bhorEnded} setBhorEnded={setBhorEnded} />
      </div>

      <div className="block lg:hidden">
        <SceneOneMobile bhorEnded={bhorEnded} setBhorEnded={setBhorEnded} />
      </div>

      <TextComponent setAllAnimationEnd={setAllAnimationEnd} />

      {/* {showCurtain && (
        <div className="absolute inset-0 z-100 pointer-events-none">
          <CurtainReverse
            setViewClicked={setViewClicked}
            setShowCurtain={setShowCurtain}
          />
        </div>
      )} */}

      {/* Black shadow effect
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      /> */}

      {allAnimationEnd && (
        <>
          <DownArrow setArrowClicked={setArrowClicked} />
          </>)}
          </div>

          <div className="snap-center">
            <SecondSection
              bhorEnded={bhorEnded}
              setBhorEnded={setBhorEnded}
              setViewClicked={setViewClicked}
              setDwnldIsClicked={setDwnldIsClicked}
              setMagNo={setMagNo}
            />
            </div>
      
</div>
);
}
