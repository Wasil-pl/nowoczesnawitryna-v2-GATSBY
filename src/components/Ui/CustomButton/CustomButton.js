import React from 'react';
import * as styles from './CustomButton.module.scss';
import { Link } from 'gatsby';

const CustomButton = ({ text, link, variant = '' }) => {
  return (
    <Link to={link} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </Link>
  );
};

export default CustomButton;
