import React, { useEffect, useRef } from 'react';
import * as styles from './HeaderHome.module.scss';
import video from '../../video/tło_30fps.mp4';
import Menu from '../Menu/Menu';

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const HeaderHome = () => {
  let textScramble = '';
  const subtitleRef = useRef(null);

  useEffect(() => {
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

  return (
    <header className={styles.header}>
      <Menu />

      <video className={styles.video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={`${styles.titlePart} separator`}>Cześć, nazywam się</span>
          <br />
          <span className={styles.titleName}>
            <span className={`colorPrimary ${styles.firstLetter}`}>D</span>ariusz
            <span className={`colorPrimary ${styles.firstLetter}`}> W</span>asilewski
          </span>
        </h1>
        <h2 className={styles.subtitle}>
          i specjalizuję się w tworzeniu
          <br />
          <span className={`colorPrimary ${styles.textVariable}`} ref={subtitleRef}>
            {' '}
            {textScramble} stron internetowych
          </span>
        </h2>
      </div>
    </header>
  );
};

export default HeaderHome;
