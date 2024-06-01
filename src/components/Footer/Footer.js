import React from 'react';
import * as styles from './Footer.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { Facebook, Linkedin } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.first_column}>
            <StaticImage src="../../images/logo.svg" alt="Logo" width={200} />
          </div>
          <div className={styles.second_column}>
            <h3>Kontakt</h3>
            <a href="tel:+48733542926">+48733542926</a>
            <a href="mailto:nowoczesnawitryna@gmail.com">nowoczesnawitryna@gmail.com</a>
            <p>Jastrzębie-Zdrój</p>
            <p>ul. Bogoczowiec 4c</p>
            <div>
              <a href="https://www.facebook.com/profile.php?id=61556511114215" aria-label="Profil na Facebooku">
                <Facebook />
                <span>facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/dariusz-wasilewski-4041072b9/" aria-label="Profil na Linkedin">
                <Linkedin />
                <span>linkedin</span>
              </a>
            </div>
          </div>
          <div className={styles.third_column}>
            <h3>Menu</h3>
            <a href="/">Strona główna</a>
            <a href="/strony-niestandardowe">Strony niestandardowe</a>
            <a href="/strony-wordpress">Strony Wordpress</a>
            <a href="/sklepy-internetowe">Sklepy internetowe</a>
            <a href="/aplikacje-webowe">Aplikacje webowe</a>
            <a href="/blog">Blog</a>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          </div>
        </div>
        <div className={styles.copy_right}>
          <p>Copyright © 2024 Nowoczesna witryna | Powered by Dariusz Wasilewski</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
