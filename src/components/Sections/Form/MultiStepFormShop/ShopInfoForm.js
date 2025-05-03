import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
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
      <div className={styles.form_group}>
        <label htmlFor="productType">Branża / Asortyment</label>
        <textarea
          id="productType"
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
          rows={3}
          placeholder="Branża / Asortyment"
          required
        />
        {errors.productType && <Error>{errors.productType?.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="productAmount">Ilość produktów</label>
        <input
          id="productAmount"
          type="number"
          {...register('productAmount', {
            required: errorMessages.required,
            min: {
              value: patterns.shopProductAmountMin,
              message: errorMessages.minNumber(patterns.shopProductAmountMin),
            },
          })}
          placeholder="ilość produktów (w przybliżeniu)"
          required
        />
        {errors.productAmount && <Error>{errors.productAmount?.message}</Error>}
      </div>

      <div className={styles.button_wrapper}>
        <button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </button>
        <button type="submit" className={styles.button}>
          Dalej
        </button>
      </div>
    </form>
  );
};

export default ShopInfoForm;
