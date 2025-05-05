import React from 'react';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const HostingInfo = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = ['hosting', 'domena'];
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Czy posiadasz hosting?': filteredData.hosting,
      'Czy posiadasz domenę?': filteredData.domena,
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="hosting" className="mb-[2px] text-[0.9rem] text-text-light">
          Czy posiadasz hosting?
        </label>
        <select
          id="hosting"
          {...register('hosting', { required: errorMessages.required })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
        {errors.hosting && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.hosting.message}</Error>}
      </div>

      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="domena" className="mb-[2px] text-[0.9rem] text-text-light">
          Czy posiadasz domenę?
        </label>
        <select
          id="domena"
          {...register('domena', { required: errorMessages.required })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        >
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
        {errors.domena && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.domena.message}</Error>}
      </div>

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

export default HostingInfo;
