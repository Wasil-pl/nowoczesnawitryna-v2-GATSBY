import React, { useEffect, useState } from 'react';
import './ScroolUpButton.scss';
import { BsArrowUpCircleFill } from '../../Icons/Icons';

const ScroolUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4">
      {showButton && (
        <button className="scroll_up_button" onClick={handleScrollToTop} aria-label="scroolUp">
          <BsArrowUpCircleFill />
        </button>
      )}
    </div>
  );
};

export default ScroolUpButton;
