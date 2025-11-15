"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Images } from "../assets/CloudinaryAssets";

export default function Curtain({ onAnimationComplete } : { onAnimationComplete: () => void }) {

  return (
    <div className="relative w-screen h-screen overflow-hidden">
          {/* Left curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, ease: [0.8, 0, 0.2, 0.5] }}
            className="absolute top-0 left-0 w-1/2 h-full z-100"
          >
            <Image 
                src={Images.curtain}
                alt="Curtain"
                fill
                className="object-cover opacity-100"
            />
          </motion.div>

          {/* Right curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 5, ease: [0.8, 0, 0.2, 0.5] }}
            onAnimationComplete={onAnimationComplete}
            className="absolute top-0 right-0 w-1/2 h-full z-100"
          >
            <Image 
                src={Images.curtain}
                alt="Curtain"
                fill
                className="object-cover opacity-100 transform scale-x-[-1]"
            />
          </motion.div>

      {/* <div className="absolute lg:text-5xl text-3xl inset-0 z-0 flex flex-col items-center justify-center text-white font-extrabold tracking-wide">
        WELCOME!!
      </div> */}
    </div>
  );
}
