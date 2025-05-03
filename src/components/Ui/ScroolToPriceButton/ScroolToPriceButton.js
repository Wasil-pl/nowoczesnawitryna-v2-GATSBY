import React, { useEffect, useState } from 'react';
import * as styles from './ScroolToPriceButton.module.scss';
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
        className={`${styles.scroll_to_price_button} ${
          isActive ? styles.scroll_to_price_button_active : styles.scroll_to_price_button_left
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
