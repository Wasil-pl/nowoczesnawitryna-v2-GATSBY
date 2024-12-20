import React from 'react';
import * as styles from './MyStack.module.scss';
import { Card, Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';

const MyStack = () => {
  const myStack = [
    'HTML5',
    'Sass',
    'JavaScript',
    'TypeScript',
    'React',
    'Gatsby',
    'Bootstrap',
    'Node.js',
    'NestJS',
    'MySQL',
    'MongoDB',
    'Wordpress',
    'Woocommerce',
    'Photoshop',
  ];

  const subtitle =
    'Do mojej pracy wykorzystuję najnowsze technologie i tworzę nowoczesne strony internetowe na zamówienie we wszystkich głównych systemach CMS i frameworkach.';

  return (
    <section className={styles.my_stack}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_title}>
            <SectionTitle
              title="Technologie, których używam"
              coloredText=" w pracy"
              subtitle={subtitle}
              variant="white"
            />
          </div>
          <div className={styles.stack}>
            {myStack.map((item, index) => (
              <Card key={index} className={styles.card}>
                <Card.Title className={styles.card_title}>{item}</Card.Title>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyStack;
