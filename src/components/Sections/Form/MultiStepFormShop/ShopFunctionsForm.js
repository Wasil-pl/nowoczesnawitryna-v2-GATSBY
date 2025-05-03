import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';

const ShopFunctionsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'logowanie/rejestracja użytkowników',
      'newsletter',
      'powiadomienia o dostępności produktów',
      'filtrowanie produktów',
      'porównywarka produktów',
      'opinie i oceny produktów',
      'zestawy produktów',
      'inne funkcje',
      'formularz kontaktowy',
      'program lojalnościowy',
      'dostawa z wyborem terminu',
      'rekomendacje produktów',
      'kalkulator cen',
      'system rezerwacji',
      'video lub multimedia',
      'FAQ',
      'mapa lokalizacji',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (
      filteredData['inne funkcje'] &&
      typeof filteredData['inne funkcje'] === 'string' &&
      filteredData['inne funkcje'].trim() !== ''
    ) {
      shopFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': shopFunctions.length > 0 ? shopFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <p>Jakie funkcje ma mieć Twój sklep?</p>

        <label>
          <input type="checkbox" {...register('logowanie/rejestracja użytkowników')} />
          <span>Logowanie i rejestracja użytkowników</span>
        </label>

        <label>
          <input type="checkbox" {...register('newsletter')} />
          <span>Newsletter</span>
        </label>

        <label>
          <input type="checkbox" {...register('powiadomienia o dostępności produktów')} />
          <span>Powiadomienia o dostępności produktów</span>
        </label>

        <label>
          <input type="checkbox" {...register('filtrowanie produktów')} />
          <span>Filtrowanie produktów</span>
        </label>

        <label>
          <input type="checkbox" {...register('porównywarka produktów')} />
          <span>Porównywarka produktów</span>
        </label>

        <label>
          <input type="checkbox" {...register('opinie i oceny produktów')} />
          <span>Opinie i oceny produktów</span>
        </label>

        <label>
          <input type="checkbox" {...register('zestawy produktów')} />
          <span>Zestawy produktów</span>
        </label>

        <label>
          <input type="checkbox" {...register('formularz kontaktowy')} />
          <span>Formularz kontaktowy</span>
        </label>

        <label>
          <input type="checkbox" {...register('program lojalnościowy')} />
          <span>Program lojalnościowy</span>
        </label>

        <label>
          <input type="checkbox" {...register('dostawa z wyborem terminu')} />
          <span>Dostawa z wyborem terminu</span>
        </label>

        <label>
          <input type="checkbox" {...register('rekomendacje produktów')} />
          <span>Rekomendacje produktów</span>
        </label>

        <label>
          <input type="checkbox" {...register('kalkulator cen')} />
          <span>Kalkulator cen</span>
        </label>

        <label>
          <input type="checkbox" {...register('system rezerwacji')} />
          <span>System rezerwacji</span>
        </label>

        <label>
          <input type="checkbox" {...register('video lub multimedia')} />
          <span>Video lub multimedia</span>
        </label>

        <label>
          <input type="checkbox" {...register('FAQ')} />
          <span>FAQ</span>
        </label>

        <label>
          <input type="checkbox" {...register('mapa lokalizacji')} />
          <span>Mapa lokalizacji</span>
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

export default ShopFunctionsForm;
