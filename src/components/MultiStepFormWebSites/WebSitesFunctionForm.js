import React from 'react';
import * as styles from '../MultiStepForm/OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const WebSitesFunctionForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Klucze istotne dla tego kroku
    const relevantKeys = [
      'system rezerwacji',
      'video lub multimedia',
      'opinie klientów',
      'formularz kontaktowy',
      'pobieranie plików',
      'mapa lokalizacji',
      'FAQ',
      'newsletter',
      'inne funkcje',
    ];

    // Filtrujemy dane, aby zawierały tylko wartości dla tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const sitesFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      sitesFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': sitesFunctions.length > 0 ? sitesFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData); // Aktualizujemy tylko bieżące dane dla tego kroku
    updateDefaultValues(data); // Ustawiamy domyślne wartości tylko dla tego kroku
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Jakie funkcje ma mieć Twoja strona?</Form.Label>

          <Form.Check {...register('system rezerwacji')} type="switch" label="System rezerwacji" />

          <Form.Check {...register('video lub multimedia')} type="switch" label="Video lub multimedia" />

          <Form.Check {...register('opinie klientów')} type="switch" label="Opinie klientów" />

          <Form.Check {...register('formularz kontaktowy')} type="switch" label="Formularz kontaktowy" />

          <Form.Check {...register('pobieranie plików')} type="switch" label="Pobieranie plików" />

          <Form.Check {...register('mapa lokalizacji')} type="switch" label="Mapa lokalizacji" />

          <Form.Check {...register('FAQ')} type="switch" label="FAQ" />

          <Form.Check {...register('newsletter')} type="switch" label="Newsletter" />
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Inne funkcje</Form.Label>
          <Form.Control {...register('inne funkcje')} as="textarea" placeholder="Inne funkcje" />
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

export default WebSitesFunctionForm;
