import React from 'react';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const ShopInfoForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = ['productType', 'productAmount'];
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      Branża: filteredData.productType,
      'Ilość produktów': filteredData.productAmount,
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {/* Branża / Asortyment */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="productType" className="mb-[2px] text-[0.9rem] text-text-light">
          Branża / Asortyment
        </label>
        <textarea
          id="productType"
          rows={3}
          placeholder="Branża / Asortyment"
          {...register('productType', {
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
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors.productType && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.productType.message}</Error>
        )}
      </div>

      {/* Ilość produktów */}
      <div className="mb-[20px] flex flex-col gap-[2px]">
        <label htmlFor="productAmount" className="mb-[2px] text-[0.9rem] text-text-light">
          Ilość produktów
        </label>
        <input
          id="productAmount"
          type="number"
          placeholder="ilość produktów (w przybliżeniu)"
          {...register('productAmount', {
            required: errorMessages.required,
            min: {
              value: patterns.shopProductAmountMin,
              message: errorMessages.minNumber(patterns.shopProductAmountMin),
            },
          })}
          required
          className="p-[10px] rounded-[5px] bg-background-light"
        />
        {errors.productAmount && (
          <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.productAmount.message}</Error>
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

export default ShopInfoForm;
