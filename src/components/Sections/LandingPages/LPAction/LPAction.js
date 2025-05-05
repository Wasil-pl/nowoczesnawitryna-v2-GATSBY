import React from 'react';
import CustomButton from '../../../Ui/CustomButton/CustomButton';

const LPAction = () => {
  return (
    <div className="action2 bg-cover bg-center bg-no-repeat py-[80px] relative">
      <div className="container mx-auto px-4">
        <div className="wrapper flex flex-col max-w-[700px] text-center mx-auto">
          <h2 className="text-[1.7rem] font-bold uppercase mb-[20px] text-text-light">Chcesz wiedzieć więcej?</h2>
          <p className="text-[1rem] text-text-light mb-[50px]">
            Sprawdź moją ofertę i dowiedz się, jak mogę pomóc Ci w realizacji
          </p>
          <CustomButton link="/" text="Przejdź i sprawdź" />
        </div>
      </div>
    </div>
  );
};

export default LPAction;
