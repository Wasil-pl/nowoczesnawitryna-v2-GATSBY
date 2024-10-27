import React from 'react';
import * as styles from './Portfolio.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../CustomButton/CustomButton';

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <div className={styles.wrapper}>
          <div className={`${styles.portfolio_item} ${styles.title_box}`}>
            <SectionTitle title="Moje ostatnie" coloredText=" projekty" />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../images/aurytka.jpg"
              alt="aurytka.pl"
              width={600}
              height={600}
              objectPosition="top"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Aurytka</h3>
                <p>Sklep internetowy</p>
                <CustomButton text="Zobacz" link="https://aurytka.pl" />
              </div>
            </div>
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../images/qualaaab.jpg"
              alt="qualaaab.pl"
              width={600}
              height={600}
              objectPosition="top"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Qualaaab</h3>
                <p>Wizytówka</p>
                <CustomButton text="Zobacz" link="https://qualaaab.pl" />
              </div>
            </div>
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../images/red-pet.jpg"
              alt="red-pet.pl"
              width={600}
              height={600}
              objectPosition="top"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Red Pet</h3>
                <p>Sklep internetowy</p>
                <CustomButton text="Zobacz" link="https://red-pet.pl" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
