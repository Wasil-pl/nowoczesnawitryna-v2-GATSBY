import React from 'react';
import * as styles from './SectionTitle.module.scss';

const SectionTitle = ({ title, coloredText, variant = '' }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={`separator ${styles[variant]}`}>
        {title} <span className="colorPrimary">{coloredText}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
