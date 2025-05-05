import React from 'react';
import { useForm } from 'react-hook-form';

const ShopFunctionsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'logowanie/rejestracja użytkowników',
      'newsletter',
      'powiadomienia o dostępności produktów',
      'filtrowanie produktów',
      'porównywarka produktów',
      'opinie i oceny produktów',
      'zestawy produktów',
      'inne funkcje',
      'formularz kontaktowy',
      'program lojalnościowy',
      'dostawa z wyborem terminu',
      'rekomendacje produktów',
      'kalkulator cen',
      'system rezerwacji',
      'video lub multimedia',
      'FAQ',
      'mapa lokalizacji',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (
      filteredData['inne funkcje'] &&
      typeof filteredData['inne funkcje'] === 'string' &&
      filteredData['inne funkcje'].trim() !== ''
    ) {
      shopFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': shopFunctions.length > 0 ? shopFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  const options = [
    { name: 'logowanie/rejestracja użytkowników', label: 'Logowanie i rejestracja użytkowników' },
    { name: 'newsletter', label: 'Newsletter' },
    { name: 'powiadomienia o dostępności produktów', label: 'Powiadomienia o dostępności produktów' },
    { name: 'filtrowanie produktów', label: 'Filtrowanie produktów' },
    { name: 'porównywarka produktów', label: 'Porównywarka produktów' },
    { name: 'opinie i oceny produktów', label: 'Opinie i oceny produktów' },
    { name: 'zestawy produktów', label: 'Zestawy produktów' },
    { name: 'formularz kontaktowy', label: 'Formularz kontaktowy' },
    { name: 'program lojalnościowy', label: 'Program lojalnościowy' },
    { name: 'dostawa z wyborem terminu', label: 'Dostawa z wyborem terminu' },
    { name: 'rekomendacje produktów', label: 'Rekomendacje produktów' },
    { name: 'kalkulator cen', label: 'Kalkulator cen' },
    { name: 'system rezerwacji', label: 'System rezerwacji' },
    { name: 'video lub multimedia', label: 'Video lub multimedia' },
    { name: 'FAQ', label: 'FAQ' },
    { name: 'mapa lokalizacji', label: 'Mapa lokalizacji' },
  ];

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Funkcje sklepu */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[10px] text-[0.9rem] text-text-light">Jakie funkcje ma mieć Twój sklep?</p>
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

export default ShopFunctionsForm;
