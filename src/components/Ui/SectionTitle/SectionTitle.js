import React from 'react';
import * as styles from './SectionTitle.module.scss';

const SectionTitle = ({ title, coloredText, subtitle, variant = '' }) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
      className={`separator ${styles.section_title}`}
    >
      <h2 className={styles[variant]}>
        {title}
        {coloredText && <span className={`color_primary`}>{coloredText}</span>}
      </h2>
      {subtitle && <p className={styles[variant]}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
