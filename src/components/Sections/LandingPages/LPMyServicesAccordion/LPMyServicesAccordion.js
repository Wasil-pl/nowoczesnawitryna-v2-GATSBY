import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import * as styles from './LPMyServicesAccordion.module.scss';
import { ChevronDownIcon, ChevronUpIcon } from '../../../Icons/Icons';

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
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex !== null) {
      const element = document.getElementById(`panel-${openIndex}`);
      if (element) {
        setTimeout(() => {
          const offset = element.getBoundingClientRect().top + window.scrollY - 200;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 300);
      }
    }
  }, [openIndex]);

  return (
    <div className={styles.wrapper}>
      {/* 1 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '0' ? null : '0')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '0'}
        >
          <h3>Strony internetowe HTML</h3>
          {openIndex === '0' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '0' && (
          <div id="panel-0">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_HTML}</h3>
                {description_HTML.map((desc, i) => (
                  <p key={i}>{desc}</p>
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
          </div>
        )}
      </div>

      {/* 2 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '1' ? null : '1')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '1'}
        >
          <h3>Aplikacje webowe</h3>
          {openIndex === '1' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '1' && (
          <div id="panel-1">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_web_apps}</h3>
                {description_web_apps.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                <CustomButton text="Zobacz więcej" link="/aplikacje-webowe/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage
                  src="../../../../images/web-app.png"
                  alt="aplikacje webowe - strony internetowe na bazie aplikacji"
                  width={300}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '2' ? null : '2')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '2'}
        >
          <h3>Strony Internetowe oparte na WordPress</h3>
          {openIndex === '2' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '2' && (
          <div id="panel-2">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_wordpress}</h3>
                {description_wordpress.map((desc, i) => (
                  <p key={i}>{desc}</p>
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
          </div>
        )}
      </div>

      {/* 4 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '3' ? null : '3')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '3'}
        >
          <h3>Sklepy internetowe</h3>
          {openIndex === '3' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '3' && (
          <div id="panel-3">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_ecommerce}</h3>
                {description_ecommerce.map((desc, i) => (
                  <p key={i}>{desc}</p>
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
          </div>
        )}
      </div>

      {/* 5 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '4' ? null : '4')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '4'}
        >
          <h3>Strony Internetowe LMS – Nowoczesne Platformy Edukacyjne</h3>
          {openIndex === '4' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '4' && (
          <div id="panel-4">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_lms}</h3>
                {description_lms.map((desc, i) => (
                  <p key={i}>{desc}</p>
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
          </div>
        )}
      </div>

      {/* 6 */}
      <div className={styles.item}>
        <button
          onClick={() => setOpenIndex(openIndex === '5' ? null : '5')}
          className={styles.accordion_button}
          aria-expanded={openIndex === '5'}
        >
          <h3>Projektowanie Logo</h3>
          {openIndex === '5' ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {openIndex === '5' && (
          <div id="panel-5">
            <div className={styles.tab_content}>
              <div className={styles.tab_content_left}>
                <h3>{title_logo}</h3>
                {description_logo.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                <CustomButton text="Zobacz więcej" link="/projektowanie-logo/" />
              </div>
              <div className={styles.tab_content_right}>
                <StaticImage src="../../../../images/logo-min-white.png" alt="projektowanie logo" width={300} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LPMyServicesAccordion;
