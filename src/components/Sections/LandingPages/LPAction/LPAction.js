import React from 'react';
import * as styles from './LPAction.module.scss';

import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPAction = () => {
  return (
    <div className={styles.LPAction}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <h2>Chcesz wiedzieć więcej?</h2>
          <p>Sprawdź moją ofertę i dowiedz się, jak mogę pomóc Ci w realizacji</p>
          <CustomButton link="/" text="Przejdź i sprawdź" />
        </div>
      </div>
    </div>
  );
};

export default LPAction;
