import React from 'react';
import * as styles from './ArticleCard.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ArticleCard = ({ image, card_title, card_text, href }) => {
  return (
    <div className={styles.card}>
      {image === 'webhosting' && (
        <StaticImage
          src="../../../../images/webhosting.webp"
          width={400}
          alt="webhosting hosting stron internetowych"
        />
      )}
      {image === 'cms' && (
        <StaticImage src="../../../../images/cms.webp" width={400} alt="cms - strony internetowe na wordpress" />
      )}
      {image === 'website' && (
        <StaticImage src="../../../../images/website.jpg" width={400} alt="website - strona internetowa" />
      )}
      {image === 'responsive' && (
        <StaticImage
          src="../../../../images/responsive.jpg"
          width={400}
          alt="responsive - rwd, responsywne strony internetowe"
        />
      )}
      {image === 'webdesign' && (
        <StaticImage
          src="../../../../images/proces.jpg"
          width={400}
          alt="webdesign - projektowanie strony internetowej"
        />
      )}
      {image === 'webapp' && (
        <StaticImage src="../../../../images/webapp.jpg" width={400} alt="webapp - aplikacje webowe" />
      )}
      {image === 'modernwebsite' && (
        <StaticImage
          src="../../../../images/features.jpg"
          width={400}
          alt="modernwebsite - nowoczesna strona internetowa"
        />
      )}
      <div className={styles.card_body}>
        <h3>{card_title}</h3>
        <p>{card_text}</p>
        <button href={href} text="Czytaj więcej">
          Czytaj Więcej
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
