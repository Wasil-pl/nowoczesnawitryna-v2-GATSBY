import React from 'react';
import * as styles from './Footer.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { FacebookIcon, LinkedInIcon } from '../Icons/Icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container mx-auto px-4 ${styles.container}`}>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <StaticImage
              src="../../images/logo_footer.png"
              alt="Logo - tworzenie stron internetowych"
              width={200}
              quality={100}
            />
          </div>
          <div className={styles.second_column}>
            <h3>Kontakt</h3>
            <a href="tel:+48733542926">+48733542926</a>
            <a href="mailto:nowoczesnawitryna@gmail.com">nowoczesnawitryna@gmail.com</a>
            <p>Jastrzębie-Zdrój</p>
            <p>ul. Bogoczowiec 4c</p>
            <div className={styles.social_media}>
              <a href="https://www.facebook.com/profile.php?id=61556511114215" aria-label="Profil na Facebooku">
                <FacebookIcon />
                <span>facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/dariusz-wasilewski-4041072b9/" aria-label="Profil na Linkedin">
                <LinkedInIcon />
                <span>linkedin</span>
              </a>
            </div>
          </div>
          <div className={styles.third_column}>
            <h3>Menu</h3>
            <a href="/">Strona główna</a>
            <a href="/formularz-szybkiej-wyceny/">Formularz wyceny</a>
            <a href="/strony-niestandardowe/">Strony HTML/CSS/JS</a>
            <a href="/strony-wordpress/">Strony Wordpress</a>
            <a href="/sklepy-internetowe/">Sklepy internetowe</a>
            <a href="/strony-lms/">Strony LMS</a>
            <a href="/aplikacje-webowe/">Aplikacje webowe</a>
            <a href="/projektowanie-logo/">Projektowanie logo</a>
            <a href="/kontakt/">Kontakt</a>
            <a href="/blog/">Blog</a>
            <a href="/polityka-prywatnosci/">Polityka prywatności</a>
          </div>
        </div>
        <div className={styles.copy_right}>
          <p>Copyright © 2024 Nowoczesna witryna | Powered by Dariusz Wasilewski</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
