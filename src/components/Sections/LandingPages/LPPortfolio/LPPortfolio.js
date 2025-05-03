import React from 'react';
import * as styles from './LPPortfolio.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';
import CallToAction from '../../Shared/CallToAction/CallToAction';

const LPPortfolio = ({ title, coloredText, subtitle }) => {
  return (
    <section className={styles.portfolio}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={`${styles.portfolio_item} ${styles.title_box}`}>
            <SectionTitle title={title} coloredText={coloredText} subtitle={subtitle} />
          </div>
          <div className={styles.portfolio_item}>
            <StaticImage
              src="../../../../images/suzie.png"
              alt="www.suzie.pl - sklep internetowy"
              width={600}
              placeholder="blurred"
              layout="constrained"
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
          <div className={styles.portfolio_item}>
            <StaticImage
              src="../../../../images/j_system.png"
              alt="j-system.pl - sklep internetowy"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.overlay}>
              <div>
                <h3>j-system</h3>
                <p>Sklep internetowy</p>
                <button className={`no_button ${styles.button}`}>
                  <a href="https://j-system.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <StaticImage
              src="../../../../images/przewodnik.png"
              alt="przewodnik-skalnemiasto.pl/ - strona internetowa"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Przewodnik</h3>
                <p>Wizytówka</p>
                <button className={`no_button ${styles.button}`}>
                  <a href="https://przewodnik-skalnemiasto.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <StaticImage
              src="../../../../images/logomove.png"
              alt="logomove.pl/ - strona internetowa"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.overlay}>
              <div>
                <h3>LogoMove</h3>
                <p>Strona firmowa</p>
                <button className={`no_button ${styles.button}`}>
                  <a href="https://logomove.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_item}>
            <StaticImage
              src="../../../../images/proluxe.png"
              alt="proluxeclean.pl/ - strona internetowa"
              width={600}
              placeholder="blurred"
              layout="constrained"
            />
            <div className={styles.overlay}>
              <div>
                <h3>Proluxe Clean</h3>
                <p>Strona firmowa</p>
                <button className={`no_button ${styles.button}`}>
                  <a href="https://www.proluxeclean.pl/" target="_blank" rel="noopener noreferrer">
                    Zobacz
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <CallToAction kontakt_3 />
      </div>
    </section>
  );
};

export default LPPortfolio;
