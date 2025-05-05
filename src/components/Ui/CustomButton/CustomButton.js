import React from 'react';
import './CustomButton.scss';
import { Link } from 'gatsby';

const CustomButton = ({ text, link, variant = '' }) => {
  return (
    <Link to={link} className={`custom_button ${variant}`}>
      {text}
    </Link>
  );
};

export default CustomButton;
