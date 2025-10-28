import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderMotion() {
  const LINES = [
    { text: 'Tworzenie', light: false },
    { text: 'Nowoczesnych', light: false },
    { text: 'Stron', light: true },
    { text: 'Internetowych', light: true },
  ];

  // Tempo
  const DURATION = 1.1; // czas wejścia jednego wiersza
  const STAGGER = 0.25; // odstęp startu między wierszami
  const TOTAL_DELAY = (LINES.length - 1) * STAGGER + DURATION;

  return (
    <div className="content absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_300px] items-end gap-8 px-4 text-center lg:text-left">
      {/* H1: każdy wiersz osobno z dołu */}
      <h1 className="title text-[7rem] lg:text-[6rem] md:text-[4rem] font-extrabold leading-[1.2] tracking-[0.3rem] text-left">
        {LINES.map((line, i) => (
          <motion.span
            key={line.text}
            className={`block ${line.light ? 'title-light' : ''}`}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION, ease: 'easeOut', delay: i * STAGGER }}
          >
            {line.text}
          </motion.span>
        ))}

        {/* Linia: po wszystkich wierszach */}
        <motion.div
          className="line mt-4 h-[4px] bg-text-light-dark"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: TOTAL_DELAY + 0.15, duration: 0.8, ease: 'easeInOut' }}
        />
      </h1>

      {/* H2: równolegle z góry */}
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION + 0.2, ease: 'easeOut', delay: 0.1 }}
      >
        <h2 className="subtitle text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] leading-[1.3] tracking-[0.15rem] uppercase text-text-light-dark">
          Profesjonalne strony internetowe i sklepy online.
          <br />
          Świadczę usługi dla klientów
          <br />w Jastrzębiu-Zdroju, województwie śląskim oraz w całej Polsce.
        </h2>
      </motion.div>
    </div>
  );
}
