import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <FaArrowCircleUp
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      className="z-90 primary fixed bottom-8 right-4 hidden  h-12 w-12 rounded-full border-0 text-3xl font-bold text-white drop-shadow-md transition hover:scale-110 hover:cursor-pointer"
    />
  );
};

export default ScrollButton;
