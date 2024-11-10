import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ShopPaymentsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Lista kluczy tylko dla tego komponentu
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

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
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
    updateDefaultValues(data); // Używamy przefiltrowanych danych do zapisu domyślnych wartości
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Jakie płatności ma mieć Twój sklep?</Form.Label>
          <Form.Check {...register('Przelew')} type="switch" label="Przelew bankowy" />
          <Form.Check {...register('Płatność przy odbiorze')} type="switch" label="Płatność przy odbiorze" />
          <Form.Check {...register('Przelewy24')} type="switch" label="Płatności online (Przelewy24)" />
          <Form.Check {...register('PayU')} type="switch" label="Płatności online (PayU)" />
          <Form.Check {...register('PayPal')} type="switch" label="Płatności online (PayPal)" />
          <Form.Check {...register('DotPay')} type="switch" label="Płatności online (Dotpay)" />
          <Form.Check {...register('Tpay')} type="switch" label="Płatności online (Tpay)" />
          <Form.Check {...register('AutoPay')} type="switch" label="Płatności online (AutoPay)" />
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Inne formy płatności</Form.Label>
          <Form.Control
            {...register('inne formy płatności')}
            type="textarea"
            label="Inna forma płatności"
            placeholder="Inna forma płatności"
          />
        </Form.Group>

        <Button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </Button>
        <Button type="submit" className={styles.button}>
          Dalej
        </Button>
      </Form>
    </div>
  );
};

export default ShopPaymentsForm;
