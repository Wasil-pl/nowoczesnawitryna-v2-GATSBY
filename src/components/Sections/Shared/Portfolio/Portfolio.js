import React from 'react';
import * as styles from './Portfolio.module.scss';

import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={`${styles.portfolio_item} ${styles.title_box}`}>
            <SectionTitle
              title="Moje ostatnie"
              coloredText=" projekty"
              subtitle="Zobacz moje ostatnie realizacje stron internetowych i sklepów online."
            />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../images/suzie.jpg"
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
              src="../../images/aurytka.jpg"
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
              src="../../images/qualaaab.jpg"
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
      </div>
    </section>
  );
};

export default Portfolio;
