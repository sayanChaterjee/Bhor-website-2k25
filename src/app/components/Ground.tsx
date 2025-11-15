import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import useResponsiveScrollRatio from "./parallaxRatio";
import { Images } from '../assets/CloudinaryAssets';


const Ground = () => {

    const [scrollY, setScrollY] = useState(0);
    const { cloudScrollRatio } = useResponsiveScrollRatio();

  // Update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      
    <motion.img
          src={Images.groundLayer1}
          alt="Layer 1"
          animate={{
                  y: scrollY * cloudScrollRatio, 
                }}
          className="absolute bottom-0 left-0 w-full h-full z-30"
        />

        <motion.img 
          src={Images.groundLayer2}
          alt="Layer 2"
          className="absolute bottom-15 left-0 w-full h-1/2 z-31"
          initial={{ y: 0 }}
          animate={{ y: -30, }}
          transition={{ duration: 3, delay: 2, ease: "easeOut" }}
        />


        <motion.img 
          src={Images.groundLayer3}
          alt="Layer 3"
          className="absolute bottom-7 left-0 w-full h-1/3 z-32"
          initial={{ y: 0 }}
          animate={{ y: -70 }}
          transition={{ duration: 2, delay: 2, ease: "easeOut" }}
        />

        <motion.img 
          src={Images.groundLayer2}
          alt="Layer 2"
          className="absolute bottom-[-50] left-0 w-full h-1/2 z-33"
          animate={{
                  y: scrollY * cloudScrollRatio, 
                }}
        />
        

    </div>
  )
}

export default Ground
