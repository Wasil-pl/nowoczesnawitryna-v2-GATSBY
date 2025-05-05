import React from 'react';
import { useForm } from 'react-hook-form';

const LmsFunctionsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'logowanie i rejestracja użytkowników',
      'system subskrypcji płatnych kursów',
      'zarządzanie dostępem do kursów',
      'śledzenie postępów użytkowników',
      'system oceniania',
      'system nagród',
      'wiadomości i powiadomienia',
      'system wiadomości prywatnych',
      'zarządzanie użytkownikami',
      'zarządzanie kursami',
      'tworzenie kursów',
      'tworzenie testów',
      'tworzenie quizów',
      'inne funkcje',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const lmsFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      lmsFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': lmsFunctions.length > 0 ? lmsFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  const options = [
    'logowanie i rejestracja użytkowników',
    'system subskrypcji płatnych kursów',
    'zarządzanie dostępem do kursów',
    'śledzenie postępów użytkowników',
    'system oceniania',
    'system nagród',
    'wiadomości i powiadomienia',
    'system wiadomości prywatnych',
    'zarządzanie użytkownikami',
    'zarządzanie kursami',
    'tworzenie kursów',
    'tworzenie testów',
    'tworzenie quizów',
  ];

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* funkcje LMS */}
      <div className="mb-[20px] flex flex-col">
        <p className="mb-[10px] text-[0.9rem] text-text-light">Jakie funkcje ma mieć Twoja strona?</p>
        {options.map((name) => (
          <label key={name} className="flex items-center mb-[8px]">
            <input
              type="checkbox"
              {...register(name)}
              className="mr-[10px] w-[20px] h-[20px] rounded-[5px] accent-background-primary"
            />
            <span className="text-[1rem]">{name}</span>
          </label>
        ))}
      </div>

      {/* inne funkcje */}
      <div className="mb-[20px] flex flex-col">
        <label htmlFor="inne-funkcje" className="mb-[10px] text-[0.9rem] text-text-light">
          Inne funkcje
        </label>
        <textarea
          id="inne-funkcje"
          {...register('inne funkcje')}
          placeholder="Inne funkcje"
          className="p-[10px] rounded-[5px] bg-background-light"
        />
      </div>

      {/* przyciski */}
      <div className="flex gap-[20px] justify-between md:justify-start">
        <button
          type="button"
          onClick={prevStep}
          className="button rounded-[5px]  text-[0.9rem] uppercase px-[16px] py-[8px] "
        >
          Wstecz
        </button>
        <button type="submit" className="button rounded-[5px]  text-[0.9rem] uppercase px-[16px] py-[8px]  ">
          Dalej
        </button>
      </div>
    </form>
  );
};

export default LmsFunctionsForm;
