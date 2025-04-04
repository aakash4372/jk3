import React, { useEffect, useState } from "react";
import "./css/BackToTop.css"; // optional, or use inline if you prefer

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`back-to-top ${visible ? "show" : ""}`} onClick={scrollToTop}>
      <div className="wave" />
      <span className="arrow">↑</span>
    </div>
  );
};

export default BackToTop;
