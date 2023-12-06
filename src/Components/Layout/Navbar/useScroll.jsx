import { useEffect, useRef, useState } from "react";
export function useScroll() {
  const [scrollState, setScrollState] = useState(false);
  //   Scroll To Section
  function sectionScroll(sectionId) {
    let target = document.getElementById(sectionId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  //   Navbar Scroll State
  let scrollRef = useRef(0);
  function navScrollHandler() {
    let currentPosition = window.scrollY;
    if (currentPosition >= scrollRef.current) {
      scrollRef.current = currentPosition;
      setScrollState(true);
    } else {
      scrollRef.current = currentPosition;
      setScrollState(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", navScrollHandler);
    return () => window.removeEventListener("scroll", navScrollHandler);
  }, []);
  return { scrollState, sectionScroll };
}
