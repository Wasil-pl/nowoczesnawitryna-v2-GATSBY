import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../../../../consts/technologyIntroText';

export default function TechnologyIntro({ type }) {
  const item = content[type];

  return (
    <section className="relative bg-[#0f121a] py-16 border-b border-white/5">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {item.icon}
          <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
          <p className="text-gray-300 leading-relaxed text-base max-w-2xl whitespace-pre-line">{item.desc}</p>
        </motion.div>
      </div>

      {/* subtelne tło */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-[#0f121a] blur-3xl opacity-60"></div>
    </section>
  );
}
