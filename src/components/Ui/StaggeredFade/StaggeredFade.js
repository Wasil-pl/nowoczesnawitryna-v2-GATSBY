import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const StaggeredFade = ({ text, className = '', as = 'span' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07 },
    }),
  };

  const Tag = motion[as] || motion.span; // Use motion.span as default if 'as' is not a valid tag
  const letters = text?.split('') || [];

  return (
    <Tag ref={ref} initial="hidden" animate={isInView ? 'show' : ''} className={className}>
      {letters.map((char, i) => (
        <motion.span key={i} variants={variants} custom={i}>
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};
