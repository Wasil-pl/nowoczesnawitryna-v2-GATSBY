import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';

const WebSitesFunctionForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'system rezerwacji',
      'video lub multimedia',
      'opinie klientów',
      'formularz kontaktowy',
      'pobieranie plików',
      'mapa lokalizacji',
      'FAQ',
      'newsletter',
      'inne funkcje',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const sitesFunctions = Object.entries(filteredData)
      .filter(([_, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      sitesFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': sitesFunctions.length > 0 ? sitesFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <p>Jakie funkcje ma mieć Twoja strona?</p>

        <label>
          <input type="checkbox" {...register('system rezerwacji')} /> System rezerwacji
        </label>

        <label>
          <input type="checkbox" {...register('video lub multimedia')} /> Video lub multimedia
        </label>

        <label>
          <input type="checkbox" {...register('opinie klientów')} /> Opinie klientów
        </label>

        <label>
          <input type="checkbox" {...register('formularz kontaktowy')} /> Formularz kontaktowy
        </label>

        <label>
          <input type="checkbox" {...register('pobieranie plików')} /> Pobieranie plików
        </label>

        <label>
          <input type="checkbox" {...register('mapa lokalizacji')} /> Mapa lokalizacji
        </label>

        <label>
          <input type="checkbox" {...register('FAQ')} /> FAQ
        </label>

        <label>
          <input type="checkbox" {...register('newsletter')} /> Newsletter
        </label>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="inne_funkcje">Inne funkcje</label>
        <textarea id="inne_funkcje" {...register('inne funkcje')} placeholder="Inne funkcje" />
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

export default WebSitesFunctionForm;
