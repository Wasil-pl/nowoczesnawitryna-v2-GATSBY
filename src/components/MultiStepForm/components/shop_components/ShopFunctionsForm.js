import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ShopFunctionsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Klucze istotne dla tego kroku
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

    // Filtrujemy dane, aby zawierały tylko wartości dla tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const shopFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      shopFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': shopFunctions.length > 0 ? shopFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
    };

    updateData(formattedData); // Aktualizujemy tylko bieżące dane dla tego kroku
    updateDefaultValues(data); // Ustawiamy domyślne wartości tylko dla tego kroku
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Jakie funkcje ma mieć Twój sklep?</Form.Label>
          <Form.Check
            {...register('logowanie/rejestracja użytkowników')}
            type="switch"
            label="Logowanie i rejestracja użytkowników"
          />

          <Form.Check {...register('newsletter')} type="switch" label="Newsletter" />

          <Form.Check
            {...register('powiadomienia o dostępności produktów')}
            type="switch"
            label="Powiadomienia o dostępności produktów"
          />

          <Form.Check {...register('filtrowanie produktów')} type="switch" label="Filtrowanie produktów" />

          <Form.Check {...register('porównywarka produktów')} type="switch" label="Porównywarka produktów" />

          <Form.Check {...register('opinie i oceny produktów')} type="switch" label="Opinie i oceny produktów" />

          <Form.Check {...register('zestawy produktów')} type="switch" label="Zestawy produktów" />

          <Form.Check {...register('formularz kontaktowy')} type="switch" label="Formularz kontaktowy" />

          <Form.Check {...register('program lojalnościowy')} type="switch" label="Program lojalnościowy" />

          <Form.Check {...register('dostawa z wyborem terminu')} type="switch" label="Dostawa z wyborem terminu" />

          <Form.Check {...register('rekomendacje produktów')} type="switch" label="Rekomendacje produktów" />

          <Form.Check {...register('kalkulator cen')} type="switch" label="Kalkulator cen" />

          <Form.Check {...register('system rezerwacji')} type="switch" label="System rezerwacji" />

          <Form.Check {...register('video lub multimedia')} type="switch" label="Video lub multimedia" />

          <Form.Check {...register('FAQ')} type="switch" label="FAQ" />

          <Form.Check {...register('mapa lokalizacji')} type="switch" label="Mapa lokalizacji" />
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

export default ShopFunctionsForm;
