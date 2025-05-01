import React from 'react';
import * as styles from './Portfolio.module.scss';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LastProject = () => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <div className={styles.wrapper}>
          <div className={`${styles.portfolio_item} ${styles.title_box}`}>
            <SectionTitle
              title="Mój ostatni"
              coloredText=" projekt"
              subtitle="Zobacz moją ostatnią realizację sklpu internetowego."
            />
          </div>
          <div className={`${styles.portfolio_item} ${styles.image_box}`}>
            <StaticImage
              src="../../images/suzie_full.jpeg"
              alt="www.suzie.pl - sklep internetowy"
              width={600}
              height={1200}
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
        </div>
      </Container>
    </section>
  );
};

export default LastProject;
