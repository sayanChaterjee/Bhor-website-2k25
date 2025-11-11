'use client';

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SceneOne() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <motion.div
        className="absolute inset-0 w-full h-full z-10"
        initial={{ y: 0 }}
        animate={{ y: -350 }}
        transition={{ duration: 7, delay: 1, ease: "linear" }}
      >
        <img
          src="/Sky_2.png"
          alt="Sky"
          className="w-full h-full object-cover"
        />
      </motion.div>


      {/* Sun Image */}
      <motion.div
        className="absolute top-[42%] md:top-1/3 left-0 right-0 mx-auto w-[30%] sm:w-[20vw] max-w-[500px] z-20"
        initial={{ y: 300 }}
        animate={{ y: -30 }}
        transition={{ duration: 5, delay: 1, ease: "easeOut" }}
      >
        <img
          src="/sun.png"
          alt="Sun"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Ground Layers */}
      <div className="absolute bottom-[-50] left-0 w-full h-2/3 z-30 overflow-hidden">

        <motion.img
          src="/Ground_layer1.png"
          alt="Layer 1"
          className="absolute bottom-0 left-0 w-full h-full z-30"
        />

        <motion.img 
          src="/Ground_layer2.png"
          alt="Layer 2"
          className="absolute bottom-15 left-0 w-full h-1/2 z-31"
          initial={{ y: 0 }}
          animate={{ y: -30 }}
          transition={{ duration: 3, delay: 2, ease: "easeOut" }}
        />

        <motion.img 
          src="/Ground_layer3.png"
          alt="Layer 3"
          className="absolute bottom-7 left-0 w-full h-1/3 z-32"
          initial={{ y: 0 }}
          animate={{ y: -70 }}
          transition={{ duration: 2, delay: 2, ease: "easeOut" }}
        />

        <motion.img 
          src="/Ground_layer2.png"
          alt="Layer 2"
          className="absolute bottom-[-100] left-0 w-full h-1/2 z-33"
          initial={{ y: 0 }}
          animate={{ y: -40 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        />
      </div>

        {/* Person 1 */}
      <motion.div
        className="absolute bottom-18 left-[15%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] max-w-[400px] max-h-[400px] z-40"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 160, opacity: 1 }}
        transition={{ duration: 3, delay: 3, ease: "easeOut" }}
      >

        
        <motion.img
          src="/p1.png"
          alt="Person 1"
          className="w-full h-full"
          style={{ transformOrigin: "bottom" }}
          animate={{ rotateX: [0, 30, 0] }}
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
          src="/p2.png"
          alt="Person 2"
          className="w-full h-full transform scale-x-[-1]"
          style={{ transformOrigin: "bottom" }}
          animate={{ rotateX: [0, 30, 0] }}
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
          src="/p2.png"
          alt="Person 3"
          className="w-full h-full"
          style={{ transformOrigin: "bottom" }}
          animate={{ rotateX: [0, 30, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 1.8,
          }}
        />
      </motion.div>
    </section>
  );
}

