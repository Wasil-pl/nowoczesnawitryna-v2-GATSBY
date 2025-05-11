import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ title, coloredText, subtitle, backgroundText, ariaLabel, variant = '' }) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
      data-sal-duration="1000"
      className={`separator sections_title`}
    >
      <h2 aria-label={ariaLabel} className={variant}>
        {title} <br />
        {coloredText && <span className="color_primary highlighted-text">{coloredText}</span>}
      </h2>
      {subtitle && <p className={variant}>{subtitle}</p>}
      {backgroundText && (
        <div
          data-sal="slide-right"
          data-sal-delay="1000"
          data-sal-easing="ease"
          data-sal-duration="1000"
          className={`background_text ${variant}`}
        >
          <span>{backgroundText}</span>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
