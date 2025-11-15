import { motion } from "framer-motion";
import { Style_Script } from "next/font/google";
interface TextComponentProps {
  setAllAnimationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

const styleScript = Style_Script({
        subsets: ['latin'],
        weight: '400',
      });

const TextComponent = ({ setAllAnimationEnd }: TextComponentProps) => {

  return (
    <div
      className="w-full ml-auto mr-auto top-0 sm:top-[12%] overflow-hidden absolute h-fit flex flex-col justify-center gap-2 md:gap-4 items-center mt-12 lg:mt-0"
      style={{ zIndex: 40 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "100%" }}
        animate={{ opacity: 1, scale: 1, y: "0%" }}
        transition={{
          delay: 7.5,
          duration: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="text-2xl md:text-4xl text-center font-bold uppercase w-full text1  block"
      >
        <h1 className="font-extrabold uppercase tracking-wider
                       bg-white bg-clip-text text-transparent
                       drop-shadow-[0_6px_18px_rgba(99,102,241,0.12)]">
        Kalyani Government <br className="md:hidden block"/>Engineering College
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "100%" }}
        animate={{ opacity: 1, scale: 1, y: "0%" }}
        transition={{
          delay: 7.5,
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="lg:text-4xl text-3xl text-center font-bold uppercase w-full hidden text1"
      >
        {/* <h1 className="font-extrabold uppercase tracking-wider
                       bg-white bg-clip-text text-transparent
                       drop-shadow-[0_6px_18px_rgba(99,102,241,0.12)]">
        K.G.E.C
        </h1> */}
      </motion.div>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: "100%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{
            delay: 8.5,
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="lg:text-2xl text-center text-xl font-bold w-full uppercase text1 mb-2"
        >
            <h1 className="font-extrabold uppercase tracking-wider
                       bg-white bg-clip-text text-transparent
                       drop-shadow-[0_6px_18px_rgba(99,102,241,0.12)]">
          STUDENTS&apos; UNION
          </h1>
        </motion.div>

        <motion.div
          onAnimationComplete={() => {
            setAllAnimationEnd(true);
          }}
          initial={{ opacity: 0, scale: 0.5, y: "-100%" }}
          animate={{ opacity: 1, scale: 1, y: "0%" }}
          transition={{
            delay: 9.5,
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="lg:text-3xl md:text-lg text-center text-md font-2xl w-full text1 "
        >
            <h1 className={`tracking-wider
                       bg-white bg-clip-text text-transparent
                       drop-shadow-[0_6px_18px_rgba(99,102,241,0.12)] ${styleScript.className}`}>
          Presents
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default TextComponent;
