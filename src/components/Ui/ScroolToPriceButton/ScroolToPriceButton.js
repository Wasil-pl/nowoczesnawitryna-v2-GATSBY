import React, { useEffect, useState } from 'react';
import './ScroolToPriceButton.scss';
import { BsCurrencyDollar } from '../../Icons/Icons';

const ScroolToPriceButton = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScrollDescryptionVisibility = () => {
      if (window.scrollY < 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScrollDescryptionVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollDescryptionVisibility);
    };
  }, []);

  const handleScrollToPrice = () => {
    const price = document.querySelector('#price');
    if (price) {
      price.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <button
        className={`scroll_to_price_button ${
          isActive ? 'scroll_to_price_button_active' : 'scroll_to_price_button_left'
        }`}
        onClick={handleScrollToPrice}
        aria-label="scrollUp"
      >
        <BsCurrencyDollar />
      </button>
    </div>
  );
};

export default ScroolToPriceButton;
