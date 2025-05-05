import React from 'react';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const LmsInfoForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = ['typ szkoły', 'ilość kursów', 'rodzaje materiałów'];
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Typ szkoły': filteredData['typ szkoły'],
      'Ilość kursów': filteredData['ilość kursów'],
      'Rodzaje materiałów': filteredData['rodzaje materiałów'],
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Typ szkoły */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="typ-szkoly" className="mb-[2px] text-[0.9rem] text-text-light">
          Typ szkoły
        </label>
        <textarea
          id="typ-szkoly"
          rows={3}
          placeholder="Typ szkoły (np. szkoła informatyczna, szkoła językowa, kursy fotograficzne itp.)"
          {...register('typ szkoły', {
            required: errorMessages.required,
            minLength: {
              value: patterns.shopProductTypeMinLength,
              message: errorMessages.minLength,
            },
            maxLength: {
              value: patterns.shopProductTypeMaxLength,
              message: errorMessages.maxLength(patterns.shopProductTypeMaxLength),
            },
          })}
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors['typ szkoły'] && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors['typ szkoły']?.message}</Error>
        )}
      </div>

      {/* Ilość kursów */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="ilosc-kursow" className="mb-[2px] text-[0.9rem] text-text-light">
          Ilość kursów
        </label>
        <input
          id="ilosc-kursow"
          type="number"
          placeholder="ilość kursów (w przybliżeniu)"
          {...register('ilość kursów', {
            required: errorMessages.required,
            min: {
              value: patterns.shopProductAmountMin,
              message: errorMessages.minNumber(patterns.shopProductAmountMin),
            },
          })}
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors['ilość kursów'] && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors['ilość kursów']?.message}</Error>
        )}
      </div>

      {/* Rodzaje materiałów */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="rodzaje-materialow" className="mb-[2px] text-[0.9rem] text-text-light">
          Jakie typy materiałów będą wykorzystywane?
        </label>
        <textarea
          id="rodzaje-materialow"
          rows={3}
          placeholder="Jakie typy materiałów będą wykorzystywane? (np. PDF, wideo, prezentacje, pliki audio)"
          {...register('rodzaje materiałów', {
            required: errorMessages.required,
            minLength: {
              value: patterns.descryptionMinLength,
              message: errorMessages.minLength,
            },
            maxLength: {
              value: patterns.descryptionMaxLength,
              message: errorMessages.maxLength(patterns.descryptionMaxLength),
            },
          })}
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors['rodzaje materiałów'] && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors['rodzaje materiałów']?.message}</Error>
        )}
      </div>

      {/* Nawigacja */}
      <div className="flex gap-[20px] justify-between md:justify-start">
        <button
          type="button"
          onClick={prevStep}
          className="button rounded-[5px]  text-[0.9rem] uppercase px-[16px] py-[8px]  "
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

export default LmsInfoForm;
