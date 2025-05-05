import React from 'react';
import './ShapeDividers.scss';

const ShapeDividersTop = ({ variant = '' }) => {
  return <div className={`shape_divider_top ${variant}`}></div>;
};

export default ShapeDividersTop;
