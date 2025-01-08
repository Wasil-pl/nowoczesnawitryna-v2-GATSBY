import React from 'react';
import * as styles from './LP_Action.module.scss';
import { Container } from 'react-bootstrap';
import CustomButton from '../../CustomButton/CustomButton';

const LP_Action = () => {
  return (
    <div className={styles.LP_Action}>
      <Container>
        <div className={styles.wrapper}>
          <h2>Chcesz wiedzieć więcej?</h2>
          <p>Sprawdź moją ofertę i dowiedz się, jak mogę pomóc Ci w realizacji</p>
          <CustomButton link="/" text="Przejdź i sprawdź" />
        </div>
      </Container>
    </div>
  );
};

export default LP_Action;
