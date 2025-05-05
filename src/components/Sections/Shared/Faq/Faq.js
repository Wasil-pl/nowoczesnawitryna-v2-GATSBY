import React, { useEffect, useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '../../../Icons/Icons';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { faqItems } from '../../../../consts/faqItems';
import sal from 'sal.js';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    sal(); // ← ponowna inicjalizacja animacji po zamontowaniu
  }, []);

  return (
    <section className="faq py-[100px] bg-background-lighter">
      <div className="container mx-auto px-4">
        <div className="wrapper">
          <SectionTitle
            coloredText="FAQ"
            subtitle="Najczęściej zadawane pytania dotyczące projektowania stron internetowych"
            backgroundText="FAQ"
          />

          <div className="accordion_wrapper max-w-[900px] mx-auto flex flex-col gap-[20px]">
            {faqItems.map((item, index) => (
              <div key={index}>
                <button
                  className=" bg-background-light rounded-[20px] flex justify-between items-center text-left w-full px-[20px] py-[10px]"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-[1.1rem] md:text_small font-bold uppercase font-body">{item.question}</h3>
                  {openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>

                {openIndex === index && (
                  <div className=" p-[20px] rounded-[20px] text-[1rem] text-text-dark">
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
