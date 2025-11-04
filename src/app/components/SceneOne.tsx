"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SceneOne() {

  return (
    <section className="relative w-full">

      {/* Sky IMAGE — scrolls behind */}
      <div className="sticky top-0 left-0 z-0 w-full">
        <motion.img
          src="/Sky_2.png"
          alt="Lower Layer"
          initial={{ y: 0 }}
          animate={{ y: -300 }}
          transition={{ duration: 7, delay: 3 }}
          className=""
        />
      </div>

        {/* Sun Image */}
        <motion.img src="/sun.png" alt="Sun" initial={{ y: -100 }} animate={{ y: -300 }} transition={{ duration: 5, delay: 2 }} className="fixed bottom-[-50] place-self-center z-20 object-cover" />

        {/* Ground Layers */}
        <div>
        <img src="/Ground_layer1.png" alt="Layer 1" className="fixed bottom-0 w-full z-20 object-cover" />
        <motion.img src="/Ground_layer2.png" alt="Layer 2" initial={{ y: 20 }} animate={{ y: -20 }} transition={{ duration: 3, delay: 2 }} className="fixed bottom-0 w-full z-20 object-cover" />
        <motion.img src="/Ground_layer3.png" alt="Layer 3" initial={{ y: 40 }} animate={{ y: -30 }} transition={{ duration: 2, delay: 2 }} className="fixed bottom-0 w-full z-20 object-cover" />
        <motion.img src="/Ground_layer2.png" alt="Layer 4" initial={{ y: 40 }} animate={{ y: -20 }} transition={{ duration: 1, delay: 2 }} className="fixed bottom-[-200] w-full z-20 object-cover" />

        </div>

      {/* Person 1 */}
      <div>
        <motion.img
            src="/p1.png"
            alt="Person 1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5, delay: 7 }}
            className="fixed bottom-[6vh] left-[6vw] w-[24vw] max-w-[320px] z-30"
        />
      </div>

      {/* Person 2 */}
      <div>
        <motion.img 
            src="/p2.png"
            alt="Person 2"
            initial={{ x: -100, opacity: 0 }}
            animate= {{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 7 }}
            className="fixed bottom-[15vh] left-[60vw] w-[24vw] max-w-[320px] z-30 transform scale-x-[-1]"
        />
      </div>

    </section>
  );
}
