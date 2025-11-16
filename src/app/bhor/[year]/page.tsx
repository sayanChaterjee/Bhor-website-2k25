"use client";

import { notFound } from "next/navigation";
import React, { use, useRef, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import { Videos } from "@/app/assets/CloudinaryAssets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { bhorPages2023, bhorPages2024, bhorPages2025 } from "@/app/assets/bhorMagazines";

const magazines: Record<string, string[]> = {
  "2023": bhorPages2023,
  "2024": bhorPages2024,
  "2025": bhorPages2025,
};

export default function MagazinePage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = use(params);
  const pages = magazines[year];

    const bookRef = useRef<any>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoRefMobile = useRef<HTMLVideoElement | null>(null);
  
    const handlePrevPage = () => {
      if (bookRef.current) {
        bookRef.current.pageFlip().flipPrev();
      }
    };
  
    const handleNextPage = () => {
      if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
      }
    };

    useEffect(() => {
            const vid = videoRef.current;
            if (!vid) return;
            vid.playbackRate = 0.6;
            const onLoaded = () => { vid.playbackRate = 0.3; };
            vid.addEventListener("loadedmetadata", onLoaded);
            return () => vid.removeEventListener("loadedmetadata", onLoaded);
          }, []);
          useEffect(() => {
                      const vid = videoRefMobile.current;
                      if (!vid) return;
                      vid.playbackRate = 0.6;
                      const onLoaded = () => { vid.playbackRate = 0.1; };
                      vid.addEventListener("loadedmetadata", onLoaded);
                      return () => vid.removeEventListener("loadedmetadata", onLoaded);
                    }, []);

    if (!pages) return notFound(); // handle invalid years

  return (
    <div className="h-screen w-full flex items-center justify-center relative px-4 lg:px-16 overflow-hidden">

         <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 hidden lg:block"
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
                <video
                                ref={videoRefMobile}
                                className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 lg:hidden block"
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

          <div className="relative flex items-center justify-center w-full mx-auto">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrevPage}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-11 cursor-pointer"
              aria-label="Previous page"
            >
              <IoIosArrowBack className="text-xl md:text-3xl text-gray-800" />
            </button>
    
            {/* FlipBook */}
            <div className="flex-shrink-0 w-full flex justify-center items-center scale-90 md:scale-115">
              <HTMLFlipBook
                ref={bookRef} 
          width={370} 
          height={500}
          maxShadowOpacity={0.5}
          drawShadow={true}
          showCover={true}
          size='fixed'
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          startPage={0}
          className="flipbook"
          style={{}}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          usePortrait={true}
          mobileScrollSupport={true}
          swipeDistance={0}
          showPageCorners={true}
          disableFlipByClick={false}
          flippingTime={1000}
          useMouseEvents={true}
        >
          {/* <div className="page" style={{ background: 'transparent' }}>
            <div className="page-content cover">
              <img 
                src={`../book/bhor${year}/${magazines[year][0]}`} 
                alt="Bhor 2023" 
                className="pokemon-logo"
              />
            </div>
          </div> */}
    
          {magazines[year].map((item, index) => (
            <div className="page" key={index}>
              <div className="page-content">
                <div className="bhor-container">
                  <img
                    src={`/book/${item}`} 
                    alt={`bhor${year}`} 
                  />
                 
                </div>
              </div>
            </div>
          ))}
              </HTMLFlipBook>
            </div>
    
            {/* Right Arrow Button */}
            <button
              onClick={handleNextPage}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 cursor-pointer"
              aria-label="Next page"
            >
              <IoIosArrowForward className="text-xl md:text-3xl text-gray-800" />
            </button>
          </div>
        </div>
  );
}
