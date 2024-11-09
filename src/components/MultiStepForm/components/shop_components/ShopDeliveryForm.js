import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ShopDeliveryForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Klucze istotne dla tego kroku
    const relevantKeys = [
      'Kurier',
      'Paczkomaty inPost',
      'Paczkomaty Orlen',
      'Paczkomaty DPD',
      'Odbiór osobisty',
      'inne formy dostawy',
    ];

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopDeliveryMethods = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne formy dostawy'] && filteredData['inne formy dostawy'].trim() !== '') {
      shopDeliveryMethods.push(filteredData['inne formy dostawy']);
    }

    const formattedData = {
      'Formy dostawy':
        shopDeliveryMethods.length > 0 ? shopDeliveryMethods.join(', ') : 'Nie wybrano żadnych form dostawy',
    };

    updateData(formattedData); // Przekazujemy tylko dane dla "Inne formy dostawy"
    updateDefaultValues(data); // Ustawiamy domyślne wartości tylko dla tego kroku
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
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
            {...register('inne formy dostawy')}
            type="switch"
            label="Inna forma dostawy"
            placeholder="Inna forma dostawy"
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

export default ShopDeliveryForm;
