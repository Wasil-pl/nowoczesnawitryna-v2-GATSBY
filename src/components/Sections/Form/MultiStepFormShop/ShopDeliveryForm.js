import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';

const ShopDeliveryForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'Kurier',
      'Paczkomaty inPost',
      'Paczkomaty Orlen',
      'Paczkomaty DPD',
      'Odbiór osobisty',
      'inne formy dostawy',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopDeliveryMethods = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (
      filteredData['inne formy dostawy'] &&
      typeof filteredData['inne formy dostawy'] === 'string' &&
      filteredData['inne formy dostawy'].trim() !== ''
    ) {
      shopDeliveryMethods.push(filteredData['inne formy dostawy']);
    }

    const formattedData = {
      'Formy dostawy':
        shopDeliveryMethods.length > 0 ? shopDeliveryMethods.join(', ') : 'Nie wybrano żadnych form dostawy',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <p>Jakie formy dostawy ma mieć Twój sklep?</p>

        <label>
          <input type="checkbox" {...register('Kurier')} />
          <span>Kurier</span>
        </label>

        <label>
          <input type="checkbox" {...register('Paczkomaty inPost')} />
          <span>Paczkomat InPost</span>
        </label>

        <label>
          <input type="checkbox" {...register('Paczkomaty Orlen')} />
          <span>Paczkomat Orlen</span>
        </label>

        <label>
          <input type="checkbox" {...register('Paczkomaty DPD')} />
          <span>Paczkomat DPD</span>
        </label>

        <label>
          <input type="checkbox" {...register('Odbiór osobisty')} />
          <span>Odbiór osobisty</span>
        </label>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="inne_formy_dostawy">Inne formy dostawy</label>
        <textarea id="inne_formy_dostawy" {...register('inne formy dostawy')} placeholder="Inna forma dostawy" />
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

export default ShopDeliveryForm;
