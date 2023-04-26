import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

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
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <FaArrowCircleUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} className='hidden fixed z-90 bottom-8 right-4 border-0  w-12 h-12 rounded-full drop-shadow-md primary text-white text-3xl font-bold hover:cursor-pointer hover:scale-110 transition' />
  );
}

export default ScrollButton;