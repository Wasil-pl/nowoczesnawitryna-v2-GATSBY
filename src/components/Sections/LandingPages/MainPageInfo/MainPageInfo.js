import React from 'react';
import * as styles from './MainPageInfo.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';

const MainPageInfo = () => {
  return (
    <section className={styles.main_page_info}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div>
            <SectionTitle title="Moja Oferta – Tworzenie Profesjonalnych Stron Internetowych" />
            <div className={styles.list}>
              <ul>
                <li href="/strony-internetowe/katowice">
                  <a href="/strony-internetowe/katowice">
                    <h3>Strony internetowe Katowice</h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/krakow">
                    <h3>Strony internetowe Kraków</h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/warszawa">
                    <h3>Strony internetowe Warszawa</h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/wroclaw">
                    <h3>Strony internetowe Wrocław</h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/poznan">
                    <h3>Strony internetowe Poznań</h3>
                  </a>
                </li>
                <li>
                  <a href="/strony-internetowe/gdansk">
                    <h3>Strony internetowe Gdańsk</h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageInfo;
