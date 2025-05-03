import React from 'react';
import * as styles from './CallToAction.module.scss';

import CustomButton from '../../../Ui/CustomButton/CustomButton';

const CallToActionSecond = () => {
  return (
    <div className={styles.action2}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <h2>Kalkulator kosztów strony internetowej</h2>
          <p>
            Skorzystaj z mojego interaktywnego kalkulatora kosztów, aby otrzymać bezpłatną wycenę swojej strony
            internetowej.
          </p>
          <CustomButton link="/formularz-szybkiej-wyceny/" text="Oblicz koszt swojej strony" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSecond;
