'use client';

import React, { useState, useEffect } from "react";
import Ground from "./Ground";
import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from '../assets/CloudinaryAssets';
import BhorAnimation from "./BhorAnimation";

export default function SceneOne({ setBhorEnded } : {
        bhorEnded: boolean;
        setBhorEnded: React.Dispatch<React.SetStateAction<boolean>>;
    }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Logo disappears when scrolled down, reappears when scrolled back up
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Sky Background with Bhor Animation */}
            <div className="absolute inset-x-0 z-30 flex justify-center pt-4 px-4 mt-45">
                <BhorAnimation setBhorEnded={setBhorEnded} />
            </div>

      {/* KGEC Logo on top of the screen */}
      <motion.div
        className="fixed top-4 md:top-11 left-22 -translate-x-1/2 z-50 mt-5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 7, ease: "easeOut" }}
      >
        <motion.img
          src="/kgecLogo.webp"
          alt="KGEC Logo"
          initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-8 h-8 md:w-12 md:h-12 object-contain"
        />
      </motion.div>

      {/* SKy Image */}
      <motion.div
        className="absolute inset-0 w-full h-full z-10"
        initial={{ y: 0 }}
        animate={{ y: -250 }}
        transition={{ duration: 7, delay: 1, ease: "linear" }}
      >
        <Image
          src={Images.sky}
          alt="Sky"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>


      {/* Sun Image */}
      <motion.div
        className="absolute top-[42%] md:top-1/3 left-0 right-0 mx-auto w-[30%] sm:w-[20vw] max-w-[500px] z-20"
        initial={{ y: 300 }}
        animate={{ y: -30 }}
        transition={{ duration: 5, delay: 1, ease: "easeOut" }}
      >
        <Image
          src={Images.sun}
          alt="Sun"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Ground Layers */}
      <div className="absolute bottom-[-50] left-0 w-full h-2/3 z-30 overflow-hidden">

        <Ground />
      </div>

      {/* Person 1 */}
      <motion.div
        className="absolute bottom-18 left-[15%] w-[200px] h-[200px] md:w-[320px] md:h-[320px] max-w-[400px] max-h-[400px] z-40"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 160, opacity: 1 }}
        transition={{ duration: 3, delay: 3, ease: "easeOut" }}
      >


        <motion.img
          src={Images.person1}
          alt="Person 1"
          className="w-full h-full"
          style={{ transformOrigin: "bottom" }}
          animate={{ rotateZ: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 1.5,
          }}
        />
      </motion.div>

      {/* Person 2 */}
      <motion.div
        className="absolute bottom-[200px] right-[10%] w-[120px] h-[120px] md:w-[230px] md:h-[230px] max-w-[250px] max-h-[250px] z-40 hidden lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: -60, opacity: 1 }}
        transition={{ duration: 3, delay: 3.5, ease: "easeOut" }}
      >
        <motion.img
          src={Images.person2}
          alt="Person 2"
          className="w-full h-full transform scale-x-[-1]"
          style={{ transformOrigin: "bottom" }}
          animate={{ rotateZ: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        />
      </motion.div>

      {/* Person 3 */}
      <motion.div
        className="absolute bottom-[250px] left-[2%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] max-w-[250px] max-h-[250px] z-40"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 50, opacity: 1 }}
        transition={{ duration: 3, delay: 3, ease: "easeOut" }}
      >


        <motion.img
          src={Images.person2}
          alt="Person 3"
          className="w-full h-full"
          style={{ transformOrigin: "bottom" }}
          animate={{ rotateZ: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 1.8,
          }}
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 z-50 pointer-events-none bg-gradient-to-b from-transparent to-black/100" />

    </section>
  );
}

