import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SelectionDisplay from '../shared_components/SelectionDisplay';

const ShopDeliveryForm = ({ nextStep, prevStep, updateData, dataToDisplay }) => {
  console.log('dataToDisplay:', dataToDisplay);
  const { register, handleSubmit: validate } = useForm();

  const prepareData = (data) => {
    // Filtrujemy tylko te funkcje, które są zaznaczone (true)
    const shopDeliveryMethods = Object.fromEntries(Object.entries(data).filter(([key, value]) => value === true));

    if (data.inna_forma_dostawy && data.inna_forma_dostawy.trim() !== '') {
      shopDeliveryMethods.push(data.inna_forma_dostawy);
    }

    // Tworzymy obiekt z tablicą shop_functions, którą możemy przekazać dalej
    const formattedData = { shop_delivery_methods: shopDeliveryMethods };

    updateData(formattedData);
    nextStep();
  };

  return (
    <div>
      <SelectionDisplay dataToDisplay={dataToDisplay} />

      <Form onSubmit={validate(prepareData)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Jakie formy dostawy ma mieć Twój sklep?</Form.Label>
          <Form.Check {...register('Kurier')} type="switch" label="Kurier" />
          <Form.Check {...register('Paczkomaty inPost')} type="switch" label="Paczkomat InPost" />
          <Form.Check {...register('Paczkomaty Orlen')} type="switch" label="Paczkomat Orlen" />
          <Form.Check {...register('Paczkomaty DPD')} type="switch" label="Paczkomat DPD" />
          <Form.Check {...register('Odbiór osobisty')} type="switch" label="Odbiór osobisty" />
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Inne</Form.Label>
          <Form.Control
            {...register('inna_forma_dostawy')}
            type="switch"
            label="Inna forma dostawy"
            placeholder="Inna forma dostawy"
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

export default ShopDeliveryForm;
