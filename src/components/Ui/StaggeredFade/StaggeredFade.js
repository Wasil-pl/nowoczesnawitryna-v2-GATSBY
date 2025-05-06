import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const StaggeredFade = ({ text, className = '', as = 'span' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const Tag = as || 'span';
  const letters = text?.split('') || [];

  return (
    <span ref={ref} className={className}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.01, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.07 }}
          className="inline-block"
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
