import React, { useEffect, useState } from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';

const StepsCountDisplay = ({ data, variant }) => {
  const [steps, setSteps] = useState([1]); // Początkowo tylko krok 1

  useEffect(() => {
    setSteps(switchVariant(variant));
  }, [variant]);

  const switchVariant = (variant) => {
    switch (variant) {
      case 'sklep online':
        return [1, 2, 3, 4, 5, 6, 7, 8];
      case 'strona internetowa':
        return [1, 2, 3, 4, 5, 6];
      case 'platforma lms':
        return [1, 2, 3, 4, 5, 6, 7];
      default:
        return [1];
    }
  };

  return (
    <div className={styles.steps_count_display}>
      {steps.map((step) => (
        <div key={step} className={`${styles.step} ${data === step ? styles.step_active : ''}`}>
          {step}
        </div>
      ))}
      <div id="input_form" className={styles.element_to_scroll} />
    </div>
  );
};

export default StepsCountDisplay;
