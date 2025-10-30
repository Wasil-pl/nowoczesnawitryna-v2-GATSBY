'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

export default function AnimatedHeadLine({
  lines = [],
  subtitle = '',
  className = '',
  h1ClassName = 'title text-[4rem]  font-extrabold leading-[1.2] tracking-[0.3rem] text-left',
  h2ClassName = 'subtitle text-[1.4rem] lg:text-[1.2rem] md:text-[1rem] leading-[1.3] tracking-[0.15rem] text-text-light-dark',
  containerClassName = 'content absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_300px] items-end gap-8 px-4 text-center lg:text-left',
  lineDuration = 1.1,
  lineStagger = 0.25,
  enterFrom = 'down',
  once = true,
  showUnderline = true,
  crumbs,
  location,
  crumbLabel,
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once });

  const TOTAL_DELAY = (lines.length - 1) * lineStagger + lineDuration;
  const yStart = enterFrom === 'up' ? -80 : 80;

  const wordVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  const isHome = location?.pathname === '/';

  const showBreadcrumb = !isHome;

  return (
    <div ref={ref} className={`${containerClassName}${className ? ` ${className}` : ''}`}>
      <div>
        <h1 className={h1ClassName}>
          {lines.map((line, i) => {
            const text = typeof line === 'string' ? line : line?.text || '';
            if (!text) return null;
            const words = text.split(/\s+/);
            return (
              <motion.span
                key={`${text}-${i}`}
                className={`block ${line.light ? 'title-light' : ''}`}
                initial={{ opacity: 0, y: yStart }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: lineDuration, ease: 'easeOut', delay: i * lineStagger }}
              >
                {words.map((word, j) => (
                  <motion.span
                    key={`${word}-${j}`}
                    variants={wordVariant}
                    initial="initial"
                    style={{ '--shadow-opacity': isInView ? 0.25 : 0 }}
                    animate={isInView ? 'animate' : ''}
                    custom={j}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            );
          })}
          {showUnderline && (
            <motion.div
              className="line mt-4 h-[4px] bg-text-light-dark"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: TOTAL_DELAY + 0.15, duration: 0.8, ease: 'easeInOut' }}
            />
          )}
        </h1>
        {showBreadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 40 }} // start: niewidoczny, lekko poniżej
            animate={isInView ? { opacity: 1, y: 0 } : {}} // koniec: widoczny, na miejscu
            transition={{
              delay: TOTAL_DELAY + 0.15,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <Breadcrumb crumbs={crumbs} crumbSeparator=" > " crumbLabel={crumbLabel} />
          </motion.div>
        )}
      </div>

      {subtitle && (
        <motion.div
          className="text-left mb-10"
          initial={{ opacity: 0, y: -60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: lineDuration + 0.2, ease: 'easeOut', delay: 0.1 }}
        >
          <h2 className={h2ClassName}>{subtitle}</h2>
        </motion.div>
      )}
    </div>
  );
}
