import React from 'react';
import { useForm } from 'react-hook-form';

const WebSitesFunctionForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'system rezerwacji',
      'video lub multimedia',
      'opinie klientów',
      'formularz kontaktowy',
      'pobieranie plików',
      'mapa lokalizacji',
      'FAQ',
      'newsletter',
      'inne funkcje',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const sitesFunctions = Object.entries(filteredData)
      .filter(([_, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      sitesFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': sitesFunctions.length > 0 ? sitesFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  const options = [
    { name: 'system rezerwacji', label: 'System rezerwacji' },
    { name: 'video lub multimedia', label: 'Video lub multimedia' },
    { name: 'opinie klientów', label: 'Opinie klientów' },
    { name: 'formularz kontaktowy', label: 'Formularz kontaktowy' },
    { name: 'pobieranie plików', label: 'Pobieranie plików' },
    { name: 'mapa lokalizacji', label: 'Mapa lokalizacji' },
    { name: 'FAQ', label: 'FAQ' },
    { name: 'newsletter', label: 'Newsletter' },
  ];

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Funkcje strony */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[10px] text-[0.9rem] text-text-light">Jakie funkcje ma mieć Twoja strona?</p>
        {options.map((opt) => (
          <label key={opt.name} className="flex items-center mb-[8px]">
            <input
              type="checkbox"
              {...register(opt.name)}
              className="mr-[10px] w-[20px] h-[20px] rounded-[5px] accent-background-primary"
            />
            <span className="text-[1rem]">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Inne funkcje */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="inne_funkcje" className="mb-[2px] text-[0.9rem] text-text-light">
          Inne funkcje
        </label>
        <textarea
          id="inne_funkcje"
          {...register('inne funkcje')}
          placeholder="Inne funkcje"
          className="p-[10px] rounded-[5px] bg-background-light"
        />
      </div>

      {/* Nawigacja */}
      <div className="flex gap-[20px] justify-between md:justify-start">
        <button
          type="button"
          onClick={prevStep}
          className="button rounded-[5px] text-[0.9rem] uppercase px-[16px] py-[8px]"
        >
          Wstecz
        </button>
        <button type="submit" className="button rounded-[5px] text-[0.9rem] uppercase px-[16px] py-[8px]">
          Dalej
        </button>
      </div>
    </form>
  );
};

export default WebSitesFunctionForm;
