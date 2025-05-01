import React, { useEffect, useState } from 'react';
import * as styles from './LPMyServicesAccordion.module.scss';
import './LPMyServicesAccordion.scss';
import { Accordion } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPMyServicesAccordion = ({
  title_HTML,
  description_HTML,
  title_web_apps,
  description_web_apps,
  title_wordpress,
  description_wordpress,
  title_ecommerce,
  description_ecommerce,
  title_lms,
  description_lms,
  title_logo,
  description_logo,
}) => {
  const [activeKey, setActiveKey] = useState('');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  useEffect(() => {
    if (activeKey) {
      // Dodanie opóźnienia, aby poczekać na rozwinięcie akordeonu
      const timer = setTimeout(() => {
        const element = document.getElementById(activeKey);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Opóźnienie 300ms (dostosuj w razie potrzeby)

      return () => clearTimeout(timer); // Czyszczenie timeoutu przy odmontowaniu
    }
  }, [activeKey]);

  return (
    <Accordion onSelect={handleSelect} activeKey={activeKey} className={`myservice_accordion ${styles.wrapper}`}>
      <Accordion.Item eventKey="0">
        <Accordion.Header as={'h3'}>Strony internetowe HTML</Accordion.Header>
        <Accordion.Body id="0">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>{title_HTML}</h3>
              {description_HTML.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <CustomButton text="Zobacz więcej" link="/strony-niestandardowe/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../../images/html.png"
                alt="strony kodowane od zera, strony internetowe html/css/JS"
                width={300}
              />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header as={'h3'}>Aplikacje webowe</Accordion.Header>
        <Accordion.Body id="1">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>{title_web_apps}</h3>
              {description_web_apps.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../../images/web-app.png"
                alt="aplikacje-webowe - strony internetowe na bazie aplikacji"
                width={300}
              />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header as={'h3'}>Strony Internetowe oparte na WordPress</Accordion.Header>
        <Accordion.Body id="2">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>{title_wordpress}</h3>
              {description_wordpress.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <CustomButton text="Zobacz więcej" link="/strony-wordpress/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../../images/cms.png"
                alt="strony wordpress - strony internetowe oparte na wordpress"
                width={300}
              />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header as={'h3'}>Sklepy internetowe</Accordion.Header>
        <Accordion.Body id="3">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>{title_ecommerce}</h3>
              {description_ecommerce.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage src="../../../images/ecommerce.png" alt="sklepy internetowe - sklepy online" width={300} />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header as={'h3'}>Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne</Accordion.Header>
        <Accordion.Body id="4">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>{title_lms}</h3>
              {description_lms.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <CustomButton text="Zobacz więcej" link="/strony-lms/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage
                src="../../../images/lms.png"
                alt="strony LMS - strony internetowe do prowadzenia kursów online"
                width={300}
              />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header as={'h3'}>Projektowanie Logo</Accordion.Header>
        <Accordion.Body id="5">
          <div className={styles.tab_content}>
            <div className={styles.tab_content_left}>
              <h3>{title_logo}</h3>
              {description_logo.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
            </div>
            <div className={styles.tab_content_right}>
              <StaticImage src="../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default LPMyServicesAccordion;
