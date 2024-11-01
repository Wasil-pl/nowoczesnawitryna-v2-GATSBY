import React from 'react';
import * as styles from './Action.module.scss';
import { ArrowRight } from 'react-bootstrap-icons';

const Action = ({ kontakt_2, kontakt_3, variant = '' }) => {
  return (
    <div className={`${styles.action} ${styles[variant]}`}>
      {!kontakt_2 && !kontakt_3 && (
        <div className={styles.left_side}>
          <h3>Masz projekt?</h3>
          <h4>Potrzebujesz strony internetowej? Napisz do mnie, a razem go zrealizujemy!</h4>
        </div>
      )}

      {kontakt_2 && !kontakt_3 && (
        <div className={styles.left_side}>
          <h3>Interesuje Cię współpraca?</h3>
          <h4>Odpowiem na Twoje pytania i pomogę wybrać najlepsze rozwiązanie. Skontaktuj się ze mną!</h4>
        </div>
      )}

      {kontakt_3 && (
        <div className={styles.left_side}>
          <h3>Masz pytania?</h3>
          <h4>Jestem tutaj, aby pomóc! Skontaktuj się, jeśli chcesz dowiedzieć się więcej o mojej ofercie.</h4>
        </div>
      )}

      <div className={styles.right_side}>
        <a href="/kontakt">
          <ArrowRight />
          <br />
          {!kontakt_2 && !kontakt_3 && <span className={styles.text}>Nie czekaj – zacznijmy współpracę już dziś!</span>}
          {kontakt_2 && !kontakt_3 && (
            <span className={styles.text}>Skontaktuj się – chętnie odpowiem na Twoje pytania!</span>
          )}
          {kontakt_3 && <span className={styles.text}>Skontaktuj się, aby dowiedzieć się więcej!</span>}
        </a>
      </div>
    </div>
  );
};

export default Action;
