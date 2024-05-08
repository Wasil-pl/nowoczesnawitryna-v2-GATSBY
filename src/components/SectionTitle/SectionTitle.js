import React from 'react';
import * as styles from './SectionTitle.module.scss';

const SectionTitle = ({ title, coloredText, subtitle, variant = '' }) => {
  return (
    <div className={`separator ${styles.sectionTitle}`}>
      <h2 className={styles[variant]}>
        {title} <span className="colorPrimary">{coloredText}</span>
      </h2>
      {subtitle && <p className={`${styles[variant]} ${styles.subtitle}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
