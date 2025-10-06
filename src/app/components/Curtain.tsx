"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Curtain() {

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
          {/* Left curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 3, ease: [0.8, 0, 0.4, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-500 via-white-500 to-red-500 z-50"
          />

          {/* Right curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, ease: [0.8, 0, 0.4, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500 via-white-500 to-red-500 z-50"
          />

      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-white text-5xl font-extrabold tracking-wide">
        WELCOME!!
      </div>
    </div>
  );
}
