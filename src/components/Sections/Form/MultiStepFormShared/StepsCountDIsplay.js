import React, { useEffect, useState } from 'react';

const StepsCountDisplay = ({ data, variant }) => {
  const [steps, setSteps] = useState([1]); // Początkowo tylko krok 1

  useEffect(() => {
    setSteps(switchVariant(variant));
  }, [variant]);

  const switchVariant = (variant) => {
    switch (variant) {
      case 'sklep online':
        return [1, 2, 3, 4, 5, 6, 7, 8];
      case 'strona internetowa':
        return [1, 2, 3, 4, 5, 6];
      case 'platforma lms':
        return [1, 2, 3, 4, 5, 6, 7];
      default:
        return [1];
    }
  };

  return (
    <div className="steps_count_display flex justify-center pt-[70px] pb-[50px] relative  gap-[20px]">
      {steps.map((step) => (
        <div
          key={step}
          className={`
            text-[1.5rem] font-bold  step
            ${data === step ? 'step_active text-text-primary opacity-100 scale-150' : 'opacity-50'}
          `}
        >
          {step}
        </div>
      ))}
      <div id="input_form" className="absolute -top-[50px]" />
    </div>
  );
};

export default StepsCountDisplay;
