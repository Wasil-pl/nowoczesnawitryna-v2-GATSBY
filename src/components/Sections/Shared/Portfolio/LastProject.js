import React from 'react';
import * as styles from './Portfolio.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

const LastProject = () => {
  return (
    <section className={styles.portfolio}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={`${styles.portfolio_item} ${styles.title_box}`}>
            <SectionTitle
              title="Mój ostatni"
              coloredText=" projekt"
              subtitle="Zobacz moją ostatnią realizację sklpu internetowego."
            />
          </div>
          <div className={styles.portfolio_item}>
            <StaticImage
              src="../../../../images/suzie.png"
              layout="constrained"
              alt="www.suzie.pl - sklep internetowy"
              width={600}
              placeholder="blurred"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Suzie</h3>
                <p>Sklep internetowy</p>
                <button className={`no_button ${styles.button}`}>
                  <a href="https://www.suzie.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastProject;
