import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';

const SelectionDisplay = ({ dataToDisplay }) => {
  return (
    <div className={styles.selection_display}>
      {dataToDisplay.map((item, index) => (
        <div key={index} className={styles.selection_item}>
          <span className={styles.selection_label}>{item.label}:</span>
          <span className={styles.selection_value}> {item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default SelectionDisplay;
