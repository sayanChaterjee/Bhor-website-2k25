import { useEffect, useState } from "react";

const useResponsiveScrollRatio = () => {
  const [cloudScrollRatio, setcloudScrollRatio] = useState(0.3); // Default value
  const [buildingScrollRatio, setBuildingScrollRatio] = useState(0.3); // Default value
  const [smallScreen, setSmallScreen] = useState(false);

  const updateScrollRatio = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      // lg and up
      setBuildingScrollRatio(0.24);
      setcloudScrollRatio(0.18); // Set desired ratio for large screens
    } else if (width >= 768) {
      // md and up
      setBuildingScrollRatio(0.21);
      setcloudScrollRatio(0.15); // Set desired ratio for medium screens
    } else if (width >= 640) {
      // sm and up
      setSmallScreen(true);
      setBuildingScrollRatio(0.17);
      setcloudScrollRatio(0.12); // Set desired ratio for small screens
    } else {
      // Smaller than sm
      setSmallScreen(true);
      setBuildingScrollRatio(0.12);
      setcloudScrollRatio(0.1); // Set desired ratio for extra small screens
    }
  };

  useEffect(() => {
    // Set initial scroll ratio on load
    updateScrollRatio();

    // Listen for window resize events
    window.addEventListener("resize", updateScrollRatio);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScrollRatio);
    };
  }, []);

  return { cloudScrollRatio, buildingScrollRatio, smallScreen };
};

export default useResponsiveScrollRatio;
