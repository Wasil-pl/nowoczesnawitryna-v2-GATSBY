import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
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
      <div className={styles.form_group}>
        <label htmlFor="technologia">Technologia Strony: WordPress czy HTML?</label>
        <select
          id="technologia"
          {...register('technologia strony', {
            required: errorMessages.required,
          })}
          required
        >
          <option value="">Wybierz</option>
          <option value="WordPress">WordPress</option>
          <option value="HTML/CSS/JS">HTML/CSS/JS</option>
        </select>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="typ_strony">Typ strony</label>
        <select
          id="typ_strony"
          {...register('typ strony', {
            required: errorMessages.required,
          })}
          required
        >
          <option value="">Wybierz</option>
          <option value="strona wizytowka">Strona wizytówka</option>
          <option value="strona firmowa">Strona firmowa</option>
          <option value="portfolio">Portfolio</option>
          <option value="portal informacyjny">Portal informacyjny</option>
          <option value="landing page">Landing page</option>
          <option value="blog">Blog</option>
        </select>
        {errors['typ strony'] && <Error>{errors['typ strony']?.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="branza">Jaką działalność lub branżę będzie reprezentować strona?</label>
        <textarea
          id="branza"
          {...register('branża/tematyka', {
            required: errorMessages.required,
            minLength: {
              value: patterns.descryptionMinLength,
              message: errorMessages.minLength,
            },
          })}
          placeholder="Opisz krótko, czym zajmuje się firma lub organizacja, dla której jest projektowana strona."
          required
        />
        {errors['branża/tematyka'] && <Error>{errors['branża/tematyka']?.message}</Error>}
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

export default WebSitesInfoForm;
