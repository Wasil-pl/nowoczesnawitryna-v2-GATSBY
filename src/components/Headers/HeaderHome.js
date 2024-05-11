import React, { useEffect, useRef } from 'react';
import * as styles from './HeaderHome.module.scss';
import Menu from '../Menu/Menu';
import TextScramble from '../../utils/TextScramble';

const HeaderHome = () => {
  let textScramble = 'stron internetowych';
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (window === undefined) return;
    const texts = ['aplikacji webowych', 'sklepów www', 'stron internetowych'];
    const subtitleElement = subtitleRef.current;
    const textEffect = new TextScramble(subtitleElement);
    let index = 0;
    const interval = setInterval(() => {
      textEffect.setText(texts[index]).then(() => {
        setTimeout(() => {
          index = (index + 1) % texts.length;
        }, 1200);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window === undefined) return;
    const video = videoRef.current;
    video.play();
  }, []);

  return (
    <header className={styles.header}>
      <Menu />

      <video ref={videoRef} className={styles.video} autoPlay muted loop>
        <source src="../../images/tlo.mp4" type="video/mp4" />
      </video>

      <div data-sal="zoom-in" data-sal-delay="300" data-sal-duration="2000" className={styles.content}>
        <h1 className={styles.title}>
          <span className={`${styles.title_part} separator`}>Cześć, nazywam się</span>
          <br />
          <span className={styles.title_name}>
            <span className={`color_primary ${styles.first_letter}`}>D</span>ariusz
            <span className={`color_primary ${styles.first_letter}`}> W</span>asilewski
          </span>
        </h1>
        <h2 className={styles.subtitle}>i specjalizuję się w tworzeniu</h2>
        <h2 className={`color_primary ${styles.text_variable}`} ref={subtitleRef}>
          {textScramble}
        </h2>
      </div>
    </header>
  );
};

export default HeaderHome;
