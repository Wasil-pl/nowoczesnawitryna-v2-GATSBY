import React from 'react';
import * as styles from './Action.module.scss';
import { ArrowRight } from 'react-bootstrap-icons';

const Action = () => {
  return (
    <div className={styles.action}>
      <div className={styles.left_side}>
        <h3>Masz projekt?</h3>
        <h4>Potrzebujesz strony internetowej? Napisz do mnie... </h4>
      </div>
      <div className={styles.right_side}>
        <a href="#kontakt">
          <ArrowRight />
          <br />
          <span className={styles.text}>Nie czekaj – napisz już dziś!</span>
        </a>
      </div>
    </div>
  );
};

export default Action;
