import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
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
      <div className={styles.form_group}>
        <label htmlFor="typ-szkoly">Typ szkoły</label>
        <textarea
          id="typ-szkoly"
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
          rows={3}
          placeholder="Typ szkoły (np. szkoła informatyczna, szkoła językowa, kursy fotograficzne itp.)"
        />
        {errors['typ szkoły'] && <Error>{errors['typ szkoły']?.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="ilosc-kursow">Ilość kursów</label>
        <input
          id="ilosc-kursow"
          type="number"
          {...register('ilość kursów', {
            required: errorMessages.required,
            min: {
              value: patterns.shopProductAmountMin,
              message: errorMessages.minNumber(patterns.shopProductAmountMin),
            },
          })}
          placeholder="ilość kursów (w przybliżeniu)"
        />
        {errors['ilość kursów'] && <Error>{errors['ilość kursów']?.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="rodzaje-materialow">Jakie typy materiałów będą wykorzystywane?</label>
        <textarea
          id="rodzaje-materialow"
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
          rows={3}
          placeholder="Jakie typy materiałów będą wykorzystywane? (np. PDF, wideo, prezentacje, pliki audio)"
        />
        {errors['rodzaje materiałów'] && <Error>{errors['rodzaje materiałów']?.message}</Error>}
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

export default LmsInfoForm;
