import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DownloadButton from "./DownloadButton";

interface Magazine {
  index: number;
  year: number;
  title: string;
  image: string;
  url: string;
}

interface CarouselElementProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
  magazine: Magazine;
  direction: number; // Direction of animation
}

const CarouselElement = ({
  setMagNo,
  setDwnldIsClicked,
  magazine,
  direction,
}: CarouselElementProps) => {
  const router = useRouter();

  const handleViewClick = () => {
    // Redirect based on magazine index: 0 -> latest, 1 -> old
    const route = magazine.index === 0 ? '/magazine-latest' : '/magazine-old';
    router.push(route);
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-4 justify-center text-white h-fit w-fit"
      initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
      transition={{
        x: { duration: 0.5 },
        opacity: { duration: 0.4 },
      }}
    >
      {/* Magazine Image */}
      <img
        src={magazine.image}
        alt={magazine.title}
        className="h-[50vh] sm:h-[50vh] md:h-[60vh] w-auto object-contain"
      />

      {/* Buttons */}
      <div className="flex gap-4 items-center justify-center">
        {/* View Button */}
        <motion.button
          onClick={handleViewClick}
          className="relative py-3 px-8 text-xl font-semibold rounded-full text-white bg-transparent overflow-hidden focus:outline-none shadow-[0px_5px_30px_rgba(255,255,255,0.6)] hover:shadow-[0px_5px_30px_rgba(255,255,255,0.8)] transition-all duration-400 mt-6"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, .6)",
            color: "white",
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
            transition: { duration: 0.2 },
          }}
        >
          <span className="relative z-10">View</span>
        </motion.button>

        {/* Download Button */}
        <DownloadButton
          setMagNo={setMagNo}
          magazine={magazine}
          setDwnldIsClicked={setDwnldIsClicked}
        />
      </div>
    </motion.div>
  );
};

export default CarouselElement;
