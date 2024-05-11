import React from 'react';
import * as styles from './Action.module.scss';
import { ArrowRight } from 'react-bootstrap-icons';

const Action = () => {
  return (
    <div className={styles.action}>
      <div className={styles.left_side}>
        <h3>Masz projekt?</h3>
        <h4>Skontaktuj się ze mna...</h4>
      </div>
      <div className={styles.right_side}>
        <a href="#contact">
          <ArrowRight />
          <br />
          <span className={styles.text}>Nie czekaj, napisz do mnie</span>
        </a>
      </div>
    </div>
  );
};

export default Action;
