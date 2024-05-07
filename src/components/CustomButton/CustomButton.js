import React from 'react';
import * as styles from './CustomButton.module.scss';
import { Button } from 'react-bootstrap';

const CustomButton = ({ text, link }) => {
  return (
    <Button href={link} variant="outline" className={styles.button}>
      {text}
    </Button>
  );
};

export default CustomButton;
