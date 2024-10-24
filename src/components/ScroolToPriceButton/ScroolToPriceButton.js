import React from 'react';
import * as styles from './ScroolToPriceButton.module.scss';
import { Container } from 'react-bootstrap';
import { ArrowDownCircleFill } from 'react-bootstrap-icons';

const ScroolToPriceButton = () => {
  const handleScrollToPrice = () => {
    const price = document.querySelector('#price');
    price.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <button className={styles.scroll_to_price_button} onClick={handleScrollToPrice} aria-label="scroolUp">
        <ArrowDownCircleFill />
      </button>
    </Container>
  );
};

export default ScroolToPriceButton;
