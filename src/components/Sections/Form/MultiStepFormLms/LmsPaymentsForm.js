import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';

const LmsPaymentsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = [
      'Przelew',
      'Subskrypcja',
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

        {[
          { name: 'Przelew', label: 'Przelew bankowy' },
          { name: 'Subskrypcja', label: 'Subskrypcja' },
          { name: 'Przelewy24', label: 'Płatności online (Przelewy24)' },
          { name: 'PayU', label: 'Płatności online (PayU)' },
          { name: 'PayPal', label: 'Płatności online (PayPal)' },
          { name: 'DotPay', label: 'Płatności online (Dotpay)' },
          { name: 'Tpay', label: 'Płatności online (Tpay)' },
          { name: 'AutoPay', label: 'Płatności online (AutoPay)' },
        ].map((method) => (
          <label key={method.name}>
            <input type="checkbox" {...register(method.name)} />
            {method.label}
          </label>
        ))}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="inne">Inne formy płatności</label>
        <textarea id="inne" {...register('inne formy płatności')} placeholder="Inna forma płatności" />
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

export default LmsPaymentsForm;
