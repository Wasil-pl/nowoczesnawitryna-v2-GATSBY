import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';

const LmsFunctionsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'logowanie i rejestracja użytkowników',
      'system subskrypcji płatnych kursów',
      'zarządzanie dostępem do kursów',
      'śledzenie postępów użytkowników',
      'system oceniania',
      'system nagród',
      'wiadomości i powiadomienia',
      'system wiadomości prywatnych',
      'zarządzanie użytkownikami',
      'zarządzanie kursami',
      'tworzenie kursów',
      'tworzenie testów',
      'tworzenie quizów',
      'inne funkcje',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const lmsFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      lmsFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': lmsFunctions.length > 0 ? lmsFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <p>Jakie funkcje ma mieć Twój sklep?</p>

        {[
          'logowanie i rejestracja użytkowników',
          'system subskrypcji płatnych kursów',
          'zarządzanie dostępem do kursów',
          'śledzenie postępów użytkowników',
          'system oceniania',
          'system nagród',
          'wiadomości i powiadomienia',
          'system wiadomości prywatnych',
          'zarządzanie użytkownikami',
          'zarządzanie kursami',
          'tworzenie kursów',
          'tworzenie testów',
          'tworzenie quizów',
        ].map((name) => (
          <label key={name}>
            <input type="checkbox" {...register(name)} />
            {name}
          </label>
        ))}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="inne-funkcje">Inne funkcje</label>
        <textarea {...register('inne funkcje')} id="inne-funkcje" placeholder="Inne funkcje" />
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

export default LmsFunctionsForm;
