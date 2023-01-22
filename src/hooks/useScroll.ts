import { useState, useEffect, useDeferredValue } from "react";

export function useScroll() {
  //!TOdo fix any and upgrade code for up fps
  const [bodyOffset, setBodyOffset] = useState<any>(
    typeof window === "undefined" || !window.document
      ? 0
      : document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);

  const listener = () => {
    setBodyOffset(
      typeof window === "undefined" || !window.document
        ? 0
        : document.body.getBoundingClientRect()
    );
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
  };
  const debounceWrapper = useDeferredValue(listener);

  useEffect(() => {
    window.addEventListener("scroll", debounceWrapper);
    return () => {
      window.removeEventListener("scroll", debounceWrapper);
    };
  });

  return {
    scrollY,
    scrollX,
  };
}
