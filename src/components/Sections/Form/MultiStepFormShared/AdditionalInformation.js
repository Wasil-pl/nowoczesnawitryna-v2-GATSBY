import React, { useState } from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
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
      <div className={styles.form_group}>
        <p>Ile zakładek ma mieć strona?</p>
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
        />
        {errors['ilość zakładek'] && <Error>{errors['ilość zakładek']?.message}</Error>}
      </div>

      {defaultValues['typ strony'] !== 'blog' && (
        <div className={styles.form_group}>
          <p>Czy będzie blog?</p>
          <select
            {...register('blog', {
              required: errorMessages.required,
            })}
            onChange={(e) => setBlogVariant(e.target.value)}
          >
            <option value="">Wybierz</option>
            <option value="nie">Nie</option>
            <option value="tak">Tak</option>
          </select>
        </div>
      )}

      {(defaultValues['typ strony'] === 'blog' || blogVariant === 'tak') && (
        <div className={styles.form_group}>
          <p>Ile artykułów ma mieć blog?</p>
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
          />
        </div>
      )}

      <div className={styles.form_group}>
        <p>Czy posiadasz logo?</p>
        <select
          {...register('logo', {
            required: errorMessages.required,
          })}
        >
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie i nie potrzebuję">Nie i nie potrzebuję</option>
          <option value="nie, ale potrzebuję">Nie, ale potrzebuję</option>
        </select>
        {errors.logo && <Error>{errors.logo?.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <p>Czy posiadasz projekt?</p>
        <select
          {...register('projekt', {
            required: errorMessages.required,
          })}
        >
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
        {errors.projekt && <Error>{errors.projekt?.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <p>Adresy stron które Ci się podobają</p>
        <textarea
          rows={3}
          placeholder="Adresy stron które Ci się podobają"
          autoComplete="strony"
          {...register('Adresy stron które Ci się podobają')}
        />
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

export default AdditionalInformation;
