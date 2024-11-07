import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SelectionDisplay from '../shared_components/SelectionDisplay';

const ShopFunctionsForm = ({ nextStep, prevStep, updateData, dataToDisplay }) => {
  const { register, handleSubmit: validate } = useForm();

  const prepareData = (data) => {
    // Przefiltrowanie danych, aby pozostawić tylko opcje z wartością true, a następnie dodanie ich do jednej tablicy
    const shopFunctions = Object.entries(data)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (data.otherFunctions && data.otherFunctions.trim() !== '') {
      shopFunctions.push(data.otherFunctions);
    }

    // Tworzymy obiekt z tablicą shop_functions, którą możemy przekazać dalej
    const formattedData = { shop_functions: shopFunctions };

    // Przekazujemy dane do funkcji updateData
    updateData(formattedData);
    nextStep();
  };

  return (
    <div>
      <SelectionDisplay dataToDisplay={dataToDisplay} />

      <Form onSubmit={validate(prepareData)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Jakie funkcje ma mieć Twój sklep?</Form.Label>
          <Form.Check {...register('userLogin')} type="switch" label="Logowanie i rejestracja użytkowników" />

          <Form.Check {...register('newsletter')} type="switch" label="Newsletter" />

          <Form.Check
            {...register('availabilityNotifications')}
            type="switch"
            label="Powiadomienia o dostępności produktów"
          />

          <Form.Check {...register('productFiltering')} type="switch" label="Filtrowanie produktów" />

          <Form.Check {...register('productComparison')} type="switch" label="Porównywarka produktów" />

          <Form.Check {...register('productReviews')} type="switch" label="Opinie i oceny produktów" />

          <Form.Check {...register('productSets')} type="switch" label="Zestawy produktów" />

          <Form.Control {...register('otherFunctions')} as="textarea" rows={3} placeholder="Inne funkcje" />
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

export default ShopFunctionsForm;
