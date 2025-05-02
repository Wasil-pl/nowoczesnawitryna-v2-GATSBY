import React from 'react';
import * as styles from './MyStack.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';

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
      <div className="container mx-auto px-4">
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
              <div key={index} className={styles.card}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStack;
