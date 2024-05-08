import React from 'react';
import * as styles from './MyStack.module.scss';
import { Card, Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';

const MyStack = () => {
  const myStack = [
    'HTML5',
    'Sass',
    'JavaScript',
    'React',
    'Gatsby',
    'Bootstrap',
    'Node.js',
    'MySQL',
    'Wordpress',
    'Woocommerce',
    'Photoshop',
  ];

  const subtitle =
    'Do tworzenia stron wykorzystuję najnowsze technologie i tworzę strony internetowe na zamówienie we wszystkich głównych systemach CMS i frameworkach.';

  return (
    <div className={styles.MyStack}>
      <Container>
        <div className={styles.wrapper}>
          <SectionTitle
            title="Technologie, których używam"
            coloredText=" w pracy"
            subtitle={subtitle}
            variant="white"
          />
          <div className={styles.stack}>
            {myStack.map((item, index) => (
              <Card key={index} className={styles.card}>
                <Card.Title className={styles.cardTitle}>{item}</Card.Title>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyStack;
