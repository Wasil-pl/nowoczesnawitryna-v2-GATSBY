import React from 'react';
import * as styles from './LP_Portfolio.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../CustomButton/CustomButton';
import Action from '../../Action/Action';

const LP_Portfolio = ({ title, coloredText, subtitle }) => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <div className={styles.wrapper}>
          <div className={`${styles.portfolio_item} ${styles.title_box}`}>
            <SectionTitle title={title} coloredText={coloredText} subtitle={subtitle} />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../../images/suzie.jpg"
              alt="www.suzie.pl - sklep internetowy"
              width={600}
              height={600}
              objectPosition="top"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Suzie</h3>
                <p>Sklep internetowy</p>
                <CustomButton text="Zobacz" link="https://www.suzie.pl" />
              </div>
            </div>
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../../images/aurytka.jpg"
              alt="aurytka.pl - sklep internetowy"
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
              src="../../../images/qualaaab.jpg"
              alt="qualaaab.pl - strona internetowa - wizytówka"
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
        </div>

        <Action kontakt_3 />
      </Container>
    </section>
  );
};

export default LP_Portfolio;
