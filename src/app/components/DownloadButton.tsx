import { motion } from "framer-motion";

interface DownloadButtonProps {
  setDwnldIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setMagNo: React.Dispatch<React.SetStateAction<number>>;
  magazine: Magazine;
}

interface Magazine {
  index: number;
  year: number;
  title: string;
  image: string;
  url: string;
}

const DownloadButton = ({ setMagNo, magazine, setDwnldIsClicked }: DownloadButtonProps) => {
  const handleDownload = () => {
    setDwnldIsClicked(true);
    setMagNo(magazine.index);
    // Trigger file download
    const link = document.createElement('a');
    link.href = magazine.url;
    link.download = magazine.url.split('/').pop() || 'magazine.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="relative py-3 px-8 text-xl font-semibold rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 overflow-hidden focus:outline-none transition-all duration-300 mt-6 cursor-pointer z-10"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      <span className="relative z-10">Download</span>
    </motion.button>
  );
};

export default DownloadButton;
