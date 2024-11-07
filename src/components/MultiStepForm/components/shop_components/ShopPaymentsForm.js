import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SelectionDisplay from '../shared_components/SelectionDisplay';

const ShopPaymentsForm = ({ nextStep, prevStep, updateData, dataToDisplay }) => {
  const { register, handleSubmit: validate } = useForm();

  const prepareData = (data) => {
    // Filtrujemy tylko te funkcje, które są zaznaczone (true)
    const shopPaymentsMethods = Object.fromEntries(Object.entries(data).filter(([key, value]) => value === true));

    if (data.inna_forma_platnosci && data.inna_forma_platnosci.trim() !== '') {
      shopPaymentsMethods.push(data.inna_forma_platnosci);
    }

    // Tworzymy obiekt z tablicą shop_functions, którą możemy przekazać dalej
    const formattedData = { shop_payments_methods: shopPaymentsMethods };

    // Przekazujemy przefiltrowane dane do funkcji updateData
    updateData(formattedData);
    nextStep();
  };

  return (
    <div>
      <SelectionDisplay dataToDisplay={dataToDisplay} />

      <Form onSubmit={validate(prepareData)}>
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
          <Form.Label>Inne</Form.Label>
          <Form.Control
            {...register('inna_forma_platnosci')}
            type="switch"
            label="Inna forma płatności"
            placeholder="Inna forma płatności"
          />
        </Form.Group>

        <Button type="submit" className={styles.button}>
          Dalej
        </Button>
        <Button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </Button>
      </Form>
    </div>
  );
};

export default ShopPaymentsForm;
