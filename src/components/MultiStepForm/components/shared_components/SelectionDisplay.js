import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';

const SelectionDisplay = ({ data }) => {
  console.log('dane do wyświetlenia:', data);
  return (
    <div className={styles.selection_display}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={styles.selection_display_item}>
          <span>{key}:</span>
          <span> {value}</span>
        </div>
      ))}
    </div>
  );
};

export default SelectionDisplay;
