import React from 'react';
import * as styles from './LP_AboutMe.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LP_AboutMe = ({ description }) => {
  return (
    <section id="omnie" className={styles.about_me}>
      <Container>
        <SectionTitle title="Kilka słów" coloredText=" o mnie" />

        <div className={styles.wrapper}>
          <div data-sal="slide-right" data-sal-delay="100" data-sal-duration="1000" className={styles.first_column}>
            <StaticImage
              src="../../../images/aboutMe.webp"
              alt="Dariusz Wasilewski full-stack web developer"
              placeholder="blurred"
              width={400}
              className={styles.image}
            />
          </div>
          <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.second_column}>
            <h3>Cześć</h3>
            <p>{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LP_AboutMe;
