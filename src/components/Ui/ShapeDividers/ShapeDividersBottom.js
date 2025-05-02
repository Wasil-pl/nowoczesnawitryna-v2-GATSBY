import React from 'react';
import * as styles from './ShapeDividers.module.scss';

const ShapeDividersBottom = ({ variant = '' }) => {
  return <div className={`${styles.shape_divider_bottom} ${styles[variant]}`}></div>;
};

export default ShapeDividersBottom;
