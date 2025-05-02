import React from 'react';
import * as styles from './ShapeDividers.module.scss';

const ShapeDividersTop = ({ variant = '' }) => {
  return <div className={`${styles.shape_divider_top} ${styles[variant]}`}></div>;
};

export default ShapeDividersTop;
