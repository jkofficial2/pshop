import { useEffect, useState } from "react";

interface Size {
  height: number | undefined;
  width: number | undefined;
}

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<any>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup

    if (windowSize.height === window.innerHeight) {
      return window.removeEventListener("resize", handleResize);
    } else if (windowSize.width === window.innerWidth) {
      return window.removeEventListener("resize", handleResize);
    } else {
      return handleResize();
    }
  }, [windowSize.height, windowSize.width]);

  return windowSize;
};

export default useWindowSize;
