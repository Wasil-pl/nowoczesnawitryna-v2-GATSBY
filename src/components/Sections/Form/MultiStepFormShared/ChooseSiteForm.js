import React from 'react';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const ChooseSiteForm = ({ nextStep, onSelectType, defaultValues, updateDefaultValues, resetAllData }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = async (data) => {
    const relevantKeys = ['siteType'];
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Rodzaj strony': filteredData.siteType,
    };

    await resetAllData();
    onSelectType(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Wybór typu strony */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="siteType" className="mb-[2px] text-[0.9rem] text-text-light">
          Wybierz rodzaj strony
        </label>
        <select
          id="siteType"
          {...register('siteType', { required: errorMessages.required })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="sklep online">Sklep online</option>
          <option value="strona internetowa">Strona internetowa</option>
          <option value="platforma lms">Platforma LMS</option>
        </select>
        {errors.siteType && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.siteType.message}</Error>
        )}
      </div>

      {/* Przycisk Dalej */}
      <div className="flex gap-[20px] justify-between md:justify-start">
        <button type="submit" className="button rounded-[5px] text-[0.9rem] uppercase px-[16px] py-[8px]">
          Dalej
        </button>
      </div>
    </form>
  );
};

export default ChooseSiteForm;
