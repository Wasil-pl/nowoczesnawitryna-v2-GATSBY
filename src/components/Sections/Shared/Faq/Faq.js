import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '../../../Icons/Icons';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import * as styles from './Faq.module.scss';
import { faqItems } from '../../../../consts/faqItems';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faq}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <SectionTitle
            coloredText="FAQ"
            subtitle="Najczęściej zadawane pytania dotyczące projektowania stron internetowych"
            backgroundText="FAQ"
          />

          <div className={styles.accordion_wrapper}>
            {faqItems.map((item, index) => (
              <div key={index} className={styles.accordion_item}>
                <button
                  className={styles.accordion_button}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <h3>{item.question}</h3>
                  {openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>

                {openIndex === index && (
                  <div className={styles.accordion_panel}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
