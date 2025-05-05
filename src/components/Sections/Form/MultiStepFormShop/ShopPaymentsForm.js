import React from 'react';
import { useForm } from 'react-hook-form';

const ShopPaymentsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'Przelew',
      'Płatność przy odbiorze',
      'Przelewy24',
      'PayU',
      'PayPal',
      'DotPay',
      'Tpay',
      'AutoPay',
      'inne formy płatności',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopPaymentsMethods = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne formy płatności'] && filteredData['inne formy płatności'].trim() !== '') {
      shopPaymentsMethods.push(filteredData['inne formy płatności']);
    }

    const formattedData = {
      'Formy płatności':
        shopPaymentsMethods.length > 0 ? shopPaymentsMethods.join(', ') : 'Nie wybrano żadnych form płatności',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  const methods = [
    { name: 'Przelew', label: 'Przelew bankowy' },
    { name: 'Płatność przy odbiorze', label: 'Płatność przy odbiorze' },
    { name: 'Przelewy24', label: 'Płatności online (Przelewy24)' },
    { name: 'PayU', label: 'Płatności online (PayU)' },
    { name: 'PayPal', label: 'Płatności online (PayPal)' },
    { name: 'DotPay', label: 'Płatności online (Dotpay)' },
    { name: 'Tpay', label: 'Płatności online (Tpay)' },
    { name: 'AutoPay', label: 'Płatności online (AutoPay)' },
  ];

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Formy płatności */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[10px] text-[0.9rem] text-text-light">Jakie płatności ma mieć Twój sklep?</p>
        {methods.map((opt) => (
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

      {/* Inne formy płatności */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="inneFormyPlatnosci" className="mb-[2px] text-[0.9rem] text-text-light">
          Inne formy płatności
        </label>
        <textarea
          id="inneFormyPlatnosci"
          {...register('inne formy płatności')}
          placeholder="Inna forma płatności"
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

export default ShopPaymentsForm;
