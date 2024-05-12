import React from 'react';
import * as styles from './ArticleList.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Card, Container } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

const ArticleList = () => {
  return (
    <section className={styles.article_list}>
      <Container>
        <div className={styles.wrapper}>
          <Card className={styles.card}>
            <StaticImage src="../../images/webhosting.webp" width={400} alt="webhosting" />
            <Card.Body>
              <Card.Title>Jak wybrać najlepszy hosting i domenę</Card.Title>
              <Card.Text>
                Jak wybrać najlepszy hosting i domenę dla swojej strony internetowej? Kilka wskazówek, które pomogą Ci
                podjąć decyzję.
              </Card.Text>
              <CustomButton variant="white" link="/jak-wybrac-najlepszy-hosting-i-domene" text="Czytaj więcej" />
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <StaticImage src="../../images/cms.webp" width={400} alt="cms" />
            <Card.Body>
              <Card.Title>CMS vs strona kodowana od podstaw</Card.Title>
              <Card.Text>
                CMS vs strona kodowana od podstaw - co wybrać? Porównanie zalet i wad obu rozwiązań.
              </Card.Text>
              <CustomButton variant="white" link="/cms-vs-strona-pisana-od-podstaw" text="Czytaj więcej" />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ArticleList;
