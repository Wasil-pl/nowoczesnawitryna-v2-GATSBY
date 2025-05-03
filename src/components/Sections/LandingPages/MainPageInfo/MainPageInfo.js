import React from 'react';
import './MainPageInfo.scss';
import * as styles from './MainPageInfo.module.scss';
import { ListGroup } from 'react-bootstrap';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';

const MainPageInfo = () => {
  return (
    <section className={styles.main_page_info}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div>
            <SectionTitle title="Moja Oferta – Tworzenie Profesjonalnych Stron Internetowych" />
            <div className={styles.list}>
              <ListGroup variant="flush" defaultActiveKey={'/strony-internetowe/katowice'}>
                <ListGroup.Item action href="/strony-internetowe/katowice">
                  <h3>Katowice</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="/strony-internetowe/krakow">
                  <h3>Kraków</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="/strony-internetowe/warszawa">
                  <h3>Warszawa</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="/strony-internetowe/wroclaw">
                  <h3>Wrocław</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="/strony-internetowe/poznan">
                  <h3>Poznań</h3>
                </ListGroup.Item>
                <ListGroup.Item action href="/strony-internetowe/gdansk">
                  <h3>Gdańsk</h3>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageInfo;
