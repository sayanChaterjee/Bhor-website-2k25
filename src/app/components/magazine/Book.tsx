'use client'
import React, { useState, useEffect, useRef } from 'react'
import HTMLFlipBook from "react-pageflip";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Book() {
  const bookRef = useRef<any>(null);

  const pokemonData = [
    {
      id: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    }
  ];

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

  return (
    <div className="h-screen w-full flex items-center justify-center relative px-4 lg:px-16 overflow-hidden -mt-8 md:mt-0">
      <div className="relative flex items-center justify-center w-full mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrevPage}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous page"
        >
          <IoIosArrowBack className="text-xl md:text-3xl text-gray-800" />
        </button>

        {/* FlipBook */}
        <div className="flex-shrink-0 w-full flex justify-center items-center drop-shadow-1xl scale-90 md:scale-100">
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
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover">
          <img 
            src="./book/1.jpg" 
            alt="Pokémon Logo" 
            className="pokemon-logo"
          />
        </div>
      </div>

      {pokemonData.map((pokemon, index) => (
        <div className="page" key={pokemon.id}>
          <div className="page-content">
            <div className="pokemon-container">
              <img 
                src={`/book/${index + 2}.jpg`} 
                alt={pokemon.name} 
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
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next page"
        >
          <IoIosArrowForward className="text-xl md:text-3xl text-gray-800" />
        </button>
      </div>
    </div>
  );
}

export default Book