import React from 'react';
import * as styles from './CallToAction.module.scss';
import { ArrowRight } from 'react-bootstrap-icons';

const CallToAction = ({ kontakt_2, kontakt_3, variant = '' }) => {
  return (
    <div className={`${styles.action} ${styles[variant]}`}>
      {!kontakt_2 && !kontakt_3 && (
        <div className={styles.left_side}>
          <h3>Nowość! Szybka wycena strony</h3>
          <h4>Wypełnij formularz, a przygotuję ofertę dostosowaną do Twoich potrzeb!</h4>
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
          <h4>
            Nie Chcesz wypełniać formularza? Skontaktuj się ze mną, a odpowiem na Twoje pytania i przygotuję ofertę
          </h4>
        </div>
      )}

      <div className={styles.right_side}>
        <a href={!kontakt_2 && !kontakt_3 ? '/formularz-szybkiej-wyceny/#form' : '/kontakt/#kontakt'}>
          <ArrowRight />
          <br />
          {!kontakt_2 && !kontakt_3 && <span className={styles.text}>Wypełnij formularz wyceny już teraz!</span>}
          {kontakt_2 && !kontakt_3 && (
            <span className={styles.text}>Napisz do mnie, a odpowiem na Twoje pytania i przygotuję ofertę</span>
          )}
          {kontakt_3 && <span className={styles.text}>Napisz, a odpowiem tak szybko jak to możliwe...</span>}
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
