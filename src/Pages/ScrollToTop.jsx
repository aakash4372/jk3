import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto"; // Disable smooth scrolling
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
  }, [pathname]);

  return null;
};

export default ScrollToTop;
