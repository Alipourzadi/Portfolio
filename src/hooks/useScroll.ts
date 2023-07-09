import {useState, useEffect} from "react";

export function useIsScrollingY() {
  const [isScrollingY, setIsScrollingY] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrollingY(true);
      } else {
        setIsScrollingY(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrollingY;
}
