import React from 'react';
import { motion } from 'framer-motion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function WhyMeSection({ items }) {
  return (
    <section className="whyme-section relative bg-[#0f121a] py-20">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        {/* Nagłówek */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          Dlaczego warto wybrać mnie jako wykonawcę
        </motion.h2>

        {/* Lista kart */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center rounded-2xl p-6 bg-[#191d28] shadow-md shadow-black/40 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mb-4 flex items-center justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-gray-400 text-sm"
        >
          Szukasz strony, która naprawdę działa?{' '}
          <AniLink
            paintDrip
            duration={1.2}
            hex="#191919"
            direction="left"
            to="/kontakt/"
            className="text-primary hover:underline"
          >
            Porozmawiajmy.
          </AniLink>
        </motion.p>
      </div>

      {/* subtelne tło */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-[#0f121a] blur-3xl opacity-60"></div>
    </section>
  );
}
