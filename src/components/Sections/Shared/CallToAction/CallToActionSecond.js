import React from 'react';
import CustomButton from '../../../Ui/CustomButton/CustomButton';
import './CallToAction.scss';

const CallToActionSecond = () => {
  return (
    <div className="action2 bg-cover bg-center bg-no-repeat py-[80px] relative">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-col max-w-[700px] text-center mx-auto">
          <h2 className="text-[1.7rem] font-bold uppercase mb-[20px] text-text-light">
            Kalkulator kosztów utworzenia strony internetowej
          </h2>
          <p className="text-[1rem] text-text-light mb-[50px]">
            Skorzystaj z mojego interaktywnego kalkulatora kosztów, aby otrzymać bezpłatną wycenę swojej strony
            internetowej.
          </p>
          <CustomButton link="/formularz-szybkiej-wyceny/#form" text="Oblicz koszt swojej strony" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSecond;
