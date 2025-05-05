import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const AdditionalInformation = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const [blogVariant, setBlogVariant] = useState('nie');

  const handleSubmit = (data) => {
    const relevantKeys = [
      'ilość zakładek',
      'logo',
      'projekt',
      'Adresy stron które Ci się podobają',
      'blog',
      'Ile artykułów ma mieć blog',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {};

    if (filteredData['ilość zakładek']) {
      formattedData['Ilość zakładek'] = filteredData['ilość zakładek'];
    }

    if (filteredData.logo) {
      formattedData['Czy posiadasz logo'] = filteredData.logo;
    }

    if (filteredData.projekt) {
      formattedData['Czy masz projekt'] = filteredData.projekt;
    }

    if (filteredData['Adresy stron które Ci się podobają']) {
      formattedData['Adresy stron które Ci się podobają'] = filteredData['Adresy stron które Ci się podobają'];
    }

    if (filteredData.blog) {
      formattedData['Czy będzie blog?'] = filteredData.blog;
    }

    if (filteredData.blog === 'tak' && filteredData['Ile artykułów ma mieć blog']) {
      formattedData['Ile artykułów ma mieć blog'] = filteredData['Ile artykułów ma mieć blog'];
    } else if (defaultValues['typ strony'] === 'blog' && filteredData['Ile artykułów ma mieć blog']) {
      formattedData['Ile artykułów ma mieć blog'] = filteredData['Ile artykułów ma mieć blog'];
    } else {
      formattedData['Ile artykułów ma mieć blog'] = '0';
    }

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Ile zakładek */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[2px] text-[0.9rem] text-text-light">Ile zakładek ma mieć strona?</p>
        <input
          type="number"
          placeholder="Ile zakładek ma mieć strona?"
          {...register('ilość zakładek', {
            required: errorMessages.required,
            min: {
              value: patterns.shopProductTypeMinLength,
              message: errorMessages.minNumber(patterns.shopProductTypeMinLength),
            },
          })}
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors['ilość zakładek'] && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors['ilość zakładek']?.message}</Error>
        )}
      </div>

      {/* Czy będzie blog? */}
      {defaultValues['typ strony'] !== 'blog' && (
        <div className="mb-[20px] flex flex-col gap-[2px]">
          <p className="mb-[2px] text-[0.9rem] text-text-light">Czy będzie blog?</p>
          <select
            {...register('blog', {
              required: errorMessages.required,
            })}
            onChange={(e) => setBlogVariant(e.target.value)}
            className="p-[10px] rounded-[5px] bg-background-light"
          >
            <option value="">Wybierz</option>
            <option value="nie">Nie</option>
            <option value="tak">Tak</option>
          </select>
        </div>
      )}

      {/* Ile artykułów */}
      {(defaultValues['typ strony'] === 'blog' || blogVariant === 'tak') && (
        <div className="mb-[20px] flex flex-col gap-[2px]">
          <p className="mb-[2px] text-[0.9rem] text-text-light">Ile artykułów ma mieć blog?</p>
          <input
            type="number"
            placeholder="Ile artykułów ma mieć blog?"
            {...register('Ile artykułów ma mieć blog', {
              required: errorMessages.required,
              min: {
                value: patterns.shopProductTypeMinLength,
                message: errorMessages.minNumber(patterns.shopProductTypeMinLength),
              },
            })}
            className="p-[10px] rounded-[5px] bg-background-light"
          />
        </div>
      )}

      {/* Logo */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[2px] text-[0.9rem] text-text-light">Czy posiadasz logo?</p>
        <select
          {...register('logo', {
            required: errorMessages.required,
          })}
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie i nie potrzebuję">Nie i nie potrzebuję</option>
          <option value="nie, ale potrzebuję">Nie, ale potrzebuję</option>
        </select>
        {errors.logo && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.logo?.message}</Error>}
      </div>

      {/* Projekt */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[2px] text-[0.9rem] text-text-light">Czy posiadasz projekt?</p>
        <select
          {...register('projekt', {
            required: errorMessages.required,
          })}
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
        {errors.projekt && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.projekt?.message}</Error>}
      </div>

      {/* Adresy stron */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <p className="mb-[2px] text-[0.9rem] text-text-light">Adresy stron które Ci się podobają</p>
        <textarea
          rows={3}
          placeholder="Adresy stron które Ci się podobają"
          autoComplete="strony"
          {...register('Adresy stron które Ci się podobają')}
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

export default AdditionalInformation;
