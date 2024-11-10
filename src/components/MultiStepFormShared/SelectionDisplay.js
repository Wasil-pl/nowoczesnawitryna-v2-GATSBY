import React from 'react';
import * as styles from '../MultiStepForm/OrderSiteForm.module.scss';

const SelectionDisplay = ({ data }) => {
  return (
    <div className={styles.selection_display}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={styles.selection_display_item}>
          <span className={styles.item_title}>{key}:</span>
          <span> {value}</span>
        </div>
      ))}
    </div>
  );
};

export default SelectionDisplay;
