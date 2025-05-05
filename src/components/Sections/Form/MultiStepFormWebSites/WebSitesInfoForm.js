import React from 'react';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const WebSitesInfoForm = ({ nextStep, prevStep, updateData, updateDefaultValues, defaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = ['typ strony', 'branża/tematyka', 'technologia strony'];
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Strona typu': filteredData['typ strony'],
      'Branża/tematyka': filteredData['branża/tematyka'],
      'Technologia strony': filteredData['technologia strony'],
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Technologia strony */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="technologia" className="mb-[2px] text-[0.9rem] text-text-light">
          Technologia Strony: WordPress czy HTML?
        </label>
        <select
          id="technologia"
          {...register('technologia strony', {
            required: errorMessages.required,
          })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="WordPress">WordPress</option>
          <option value="HTML/CSS/JS">HTML/CSS/JS</option>
        </select>
      </div>

      {/* Typ strony */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="typ_strony" className="mb-[2px] text-[0.9rem] text-text-light">
          Typ strony
        </label>
        <select
          id="typ_strony"
          {...register('typ strony', {
            required: errorMessages.required,
          })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="strona wizytowka">Strona wizytówka</option>
          <option value="strona firmowa">Strona firmowa</option>
          <option value="portfolio">Portfolio</option>
          <option value="portal informacyjny">Portal informacyjny</option>
          <option value="landing page">Landing page</option>
          <option value="blog">Blog</option>
        </select>
        {errors['typ strony'] && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors['typ strony'].message}</Error>
        )}
      </div>

      {/* Branża/tematyka */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="branza" className="mb-[2px] text-[0.9rem] text-text-light">
          Jaką działalność lub branżę będzie reprezentować strona?
        </label>
        <textarea
          id="branza"
          rows={3}
          placeholder="Opisz krótko, czym zajmuje się firma lub organizacja"
          {...register('branża/tematyka', {
            required: errorMessages.required,
            minLength: {
              value: patterns.descryptionMinLength,
              message: errorMessages.minLength,
            },
          })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors['branża/tematyka'] && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors['branża/tematyka'].message}</Error>
        )}
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

export default WebSitesInfoForm;
