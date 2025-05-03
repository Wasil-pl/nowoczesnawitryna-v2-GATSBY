import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';

const ShopPaymentsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'Przelew',
      'Płatność przy odbiorze',
      'Przelewy24',
      'PayU',
      'PayPal',
      'DotPay',
      'Tpay',
      'AutoPay',
      'inne formy płatności',
    ];

    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopPaymentsMethods = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne formy płatności'] && filteredData['inne formy płatności'].trim() !== '') {
      shopPaymentsMethods.push(filteredData['inne formy płatności']);
    }

    const formattedData = {
      'Formy płatności':
        shopPaymentsMethods.length > 0 ? shopPaymentsMethods.join(', ') : 'Nie wybrano żadnych form płatności',
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <p>Jakie płatności ma mieć Twój sklep?</p>
        <label>
          <input type="checkbox" {...register('Przelew')} /> Przelew bankowy
        </label>
        <label>
          <input type="checkbox" {...register('Płatność przy odbiorze')} /> Płatność przy odbiorze
        </label>
        <label>
          <input type="checkbox" {...register('Przelewy24')} /> Płatności online (Przelewy24)
        </label>
        <label>
          <input type="checkbox" {...register('PayU')} /> Płatności online (PayU)
        </label>
        <label>
          <input type="checkbox" {...register('PayPal')} /> Płatności online (PayPal)
        </label>
        <label>
          <input type="checkbox" {...register('DotPay')} /> Płatności online (Dotpay)
        </label>
        <label>
          <input type="checkbox" {...register('Tpay')} /> Płatności online (Tpay)
        </label>
        <label>
          <input type="checkbox" {...register('AutoPay')} /> Płatności online (AutoPay)
        </label>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="inneFormyPlatnosci">Inne formy płatności</label>
        <textarea id="inneFormyPlatnosci" {...register('inne formy płatności')} placeholder="Inna forma płatności" />
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

export default ShopPaymentsForm;
