import React from 'react';
import * as styles from './ArticleList.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Button, Card, Container } from 'react-bootstrap';

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
              <Button variant="outline-warning" href="/jak-wybrac-najlepszy-hosting-i-domene" text="Czytaj więcej">
                Czytaj Więcej
              </Button>
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <StaticImage src="../../images/cms.webp" width={400} alt="cms" />
            <Card.Body>
              <Card.Title>CMS vs strona kodowana od podstaw</Card.Title>
              <Card.Text>
                CMS vs strona kodowana od podstaw - co wybrać? Porównanie zalet i wad obu rozwiązań.
              </Card.Text>
              <Button variant="outline-warning" href="/cms-vs-strona-pisana-od-podstaw">
                Czytaj Więcej
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ArticleList;
