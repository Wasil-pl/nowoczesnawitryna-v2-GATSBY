import React from 'react';
import { useForm } from 'react-hook-form';

const ShopDeliveryForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'Kurier',
      'Paczkomaty inPost',
      'Paczkomaty Orlen',
      'Paczkomaty DPD',
      'Odbiór osobisty',
      'inne formy dostawy',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopDeliveryMethods = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (
      filteredData['inne formy dostawy'] &&
      typeof filteredData['inne formy dostawy'] === 'string' &&
      filteredData['inne formy dostawy'].trim() !== ''
    ) {
      shopDeliveryMethods.push(filteredData['inne formy dostawy']);
    }

    const formattedData = {
      'Formy dostawy':
        shopDeliveryMethods.length > 0 ? shopDeliveryMethods.join(', ') : 'Nie wybrano żadnych form dostawy',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Formy dostawy */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[10px] text-[0.9rem] text-text-light">Jakie formy dostawy ma mieć Twój sklep?</p>
        {[
          { name: 'Kurier', label: 'Kurier' },
          { name: 'Paczkomaty inPost', label: 'Paczkomat InPost' },
          { name: 'Paczkomaty Orlen', label: 'Paczkomat Orlen' },
          { name: 'Paczkomaty DPD', label: 'Paczkomat DPD' },
          { name: 'Odbiór osobisty', label: 'Odbiór osobisty' },
        ].map((opt) => (
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

      {/* Inne formy dostawy */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="inne_formy_dostawy" className="mb-[2px] text-[0.9rem] text-text-light">
          Inne formy dostawy
        </label>
        <textarea
          id="inne_formy_dostawy"
          {...register('inne formy dostawy')}
          placeholder="Inna forma dostawy"
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

export default ShopDeliveryForm;
