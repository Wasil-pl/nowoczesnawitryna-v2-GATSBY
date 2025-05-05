import React, { useEffect } from 'react';
import './Testiniomals.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import CallToAction from '../../Shared/CallToAction/CallToAction';
import { StarIcon } from '../../../Icons/Icons';
import sal from 'sal.js';

const testimonials = [
  {
    text: `"Jestem zachwycona współpracą! Sklep internetowy został wykonany w błyskawicznym tempie, zgodnie z moimi prośbami. Wizualnie - nie mogłam sobie tego lepiej wyobrazić! Kontakt i współpraca na najlepszym poziomie! Polecam!"`,
    author: 'Katarzyna Mokrzycka',
  },
  {
    text: `"Usługa wykonania strony internetowej wykonana szybko i profesjonalnie. Współpraca z p. Dariuszem to sama przyjemność. Wszystkie uwagi wdrażane na bieżąco. Strona bardzo ładna, intuicyjna. POLECAM!!!!"`,
    author: 'Artur Przybyla',
  },
  {
    text: `"Serdecznie dziękuję za współpracę i polecam tym, którzy mają przed sobą przebrnięcie przez stworzenie własnej strony internetowej. Ważne punkty, które wpłynęły na moją opinię to bardzo uczciwa cena i łatwo dostępny kontakt z Panem Dariuszem. Jego zaangażowanie i wiedza widoczne były już w pierwszych mailach, w trakcie procesu tylko się to potwierdzało."`,
    author: 'Weronika Elveren',
  },
];

const Testiniomals = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <section className="testiniomals bg-cover bg-center bg-fixed pt-[100px] pb-[150px] mt-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex">
          <SectionTitle
            coloredText="Niezdecydowany?"
            subtitle="Zobacz co sądzą o mnie moi klienci"
            backgroundText="Opinie"
            variant="sections_title_white"
            ariaLabel="Niezdecydowany? Zobacz co sądzą o mnie moi klienci"
          />
        </div>

        <div className="flex flex-col items-end mt-[30px] md:items-end lg:items-end">
          {testimonials.map(({ text, author }, i) => (
            <div
              key={i}
              className="testimonial max-w-[600px] w-full my-[10px]
                         border-t-2 border-background-lighter
                         pt-[20px]"
            >
              <div className="flex text-primary">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <StarIcon key={idx} className="w-[20px] h-[20px]" />
                  ))}
              </div>
              <div className="text-text-light my-[20px]">
                <p>{text}</p>
                <p className="text-[0.8rem]">- {author}</p>
              </div>
            </div>
          ))}

          <div className="testimonial max-w-[600px] w-full my-[10px] pt-[20px]">
            <div className="text-text-light my-[20px]">
              <a
                href="https://maps.app.goo.gl/2UKkcFvoNswxPgof9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold no-underline"
              >
                Zobacz wszystkie opinie na Google
              </a>
            </div>
          </div>
        </div>

        <CallToAction kontakt_2 variant="bottom" />
      </div>
    </section>
  );
};

export default Testiniomals;
