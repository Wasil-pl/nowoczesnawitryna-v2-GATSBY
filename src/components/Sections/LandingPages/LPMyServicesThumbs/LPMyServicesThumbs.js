import React from 'react';
import * as styles from './LPMyServicesThumbs.module.scss';
import { Tab } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPMyServicesThumbs = ({
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
    <div className={styles.thumbs_container}>
      <Tab.Group defaultIndex={0} className={styles.tabs_wrapper}>
        <Tab.List className={`mb-3 ${styles.tab_list}`}>
          <Tab className={styles.tab_button}>
            <h3>Strony internetowe HTML</h3>
          </Tab>
          <Tab className={styles.tab_button}>
            <h3>Aplikacje webowe</h3>
          </Tab>
          <Tab className={styles.tab_button}>
            <h3>Strony Internetowe oparte na WordPress</h3>
          </Tab>
          <Tab className={styles.tab_button}>
            <h3>Sklepy internetowe</h3>
          </Tab>
          <Tab className={styles.tab_button}>
            <h3>Strony internetowe LMS – Nowoczesne Platformy Edukacyjne</h3>
          </Tab>
          <Tab className={styles.tab_button}>
            <h3>Projektowanie Logo</h3>
          </Tab>
        </Tab.List>

        <Tab.Panels className={styles.tab_panels}>
          <Tab.Panel>
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
                  src="../../../../images/html.png"
                  alt="strony kodowane od zera, strony internetowe html/css/JS"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
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
                  src="../../../../images/web-app.png"
                  alt="aplikacje-webowe - strony internetowe na bazie aplikacji"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
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
                  src="../../../../images/cms.png"
                  alt="strony wordpress - strony internetowe oparte na wordpress"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_ecommerce}</h3>
                {description_ecommerce.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                <CustomButton text="Zobacz więcej" link="/sklepy-internetowe/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage
                  src="../../../../images/ecommerce.png"
                  alt="sklepy internetowe - sklepy online"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
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
                  src="../../../../images/lms.png"
                  alt="strony LMS - strony internetowe do prowadzenia kursów online"
                  width={300}
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_logo}</h3>
                {description_logo.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage src="../../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default LPMyServicesThumbs;
