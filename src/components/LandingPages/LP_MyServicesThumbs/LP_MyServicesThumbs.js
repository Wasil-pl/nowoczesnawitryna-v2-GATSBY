import React from 'react';
import * as styles from './LP_MyServicesThumbs.module.scss';
import './LP_MyServicesThumbs.css';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../CustomButton/CustomButton';

const LP_MyServicesThumbs = ({
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
  return (
    <div className={styles.thums_container}>
      <Tabs defaultActiveKey="1" variant="underline" justify className={` mb-3 ${styles.tabs_wrapper}`}>
        <Tab eventKey="1" title="Strony internetowe HTML">
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
        </Tab>
        <Tab eventKey="2" title="Aplikacje webowe">
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
        </Tab>
        <Tab eventKey="3" title="Strony Internetowe oparte na WordPress">
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
        </Tab>
        <Tab eventKey="4" title="Sklepy internetowe">
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
        </Tab>
        <Tab eventKey="5" title="Strony internetowe LMS – Nowoczesne Platformy Edukacyjne">
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
        </Tab>
        <Tab eventKey="6" title="Projektowanie Logo">
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
        </Tab>
      </Tabs>
    </div>
  );
};

export default LP_MyServicesThumbs;
