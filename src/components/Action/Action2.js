import React from 'react';
import * as styles from './Action.module.scss';
import { Container } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

const Action2 = () => {
  return (
    <div className={styles.action2}>
      <Container>
        <div className={styles.wrapper}>
          <h2>Kalkulator kosztów strony internetowej</h2>
          <p>
            Skorzystaj z mojego interaktywnego kalkulatora kosztów, aby otrzymać bezpłatną wycenę swojej strony
            internetowej.
          </p>
          <CustomButton link="/formularz-szybkiej-wyceny/" text="Oblicz koszt swojej strony" />
        </div>
      </Container>
    </div>
  );
};

export default Action2;
