import React from 'react';
import * as styles from './ArticleCard.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Button, Card } from 'react-bootstrap';

const ArticleCard = ({ image, card_title, card_text, href }) => {
  return (
    <Card className={styles.card}>
      {image === 'webhosting' && (
        <StaticImage src="../../images/webhosting.webp" width={400} alt="webhosting hosting stron internetowych" />
      )}
      {image === 'cms' && (
        <StaticImage src="../../images/cms.webp" width={400} alt="cms - strony internetowe na wordpress" />
      )}
      {image === 'website' && (
        <StaticImage src="../../images/website.jpg" width={400} alt="website - strona internetowa" />
      )}
      {image === 'responsive' && (
        <StaticImage
          src="../../images/responsive.jpg"
          width={400}
          alt="responsive - rwd, responsywne strony internetowe"
        />
      )}
      {image === 'webdesign' && (
        <StaticImage src="../../images/proces.jpg" width={400} alt="webdesign - projektowanie strony internetowej" />
      )}
      {image === 'webapp' && <StaticImage src="../../images/webapp.jpg" width={400} alt="webapp - aplikacje webowe" />}
      {image === 'modernwebsite' && (
        <StaticImage src="../../images/features.jpg" width={400} alt="modernwebsite - nowoczesna strona internetowa" />
      )}
      <Card.Body>
        <Card.Title>{card_title}</Card.Title>
        <Card.Text>{card_text}</Card.Text>
        <Button variant="outline-warning" href={href} text="Czytaj więcej">
          Czytaj Więcej
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
