import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const LmsFunctionsForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const { register, handleSubmit: validate } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Klucze istotne dla tego kroku
    const relevantKeys = [
      'logowanie i rejestracja użytkowników',
      'system subskrypcji płatnych kursów',
      'zarządzanie dostępem do kursów',
      'śledzenie postępów użytkowników',
      'system oceniania',
      'system nagród',
      'wiadomości i powiadomienia',
      'system wiadomości prywatnych',
      'zarządzanie użytkownikami',
      'zarządzanie kursami',
      'tworzenie kursów',
      'tworzenie testów',
      'tworzenie quizów',
      'inne funkcje',
    ];

    // Filtrujemy dane, aby zawierały tylko wartości dla tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const lmsFunctions = Object.entries(filteredData)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    if (filteredData['inne funkcje'] && filteredData['inne funkcje'].trim() !== '') {
      lmsFunctions.push(filteredData['inne funkcje']);
    }

    const formattedData = {
      'Funkcje strony': lmsFunctions.length > 0 ? lmsFunctions.join(', ') : 'Nie wybrano żadnych funkcji',
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
            {...register('logowanie i rejestracja użytkowników')}
            type="switch"
            id="Logowanie i rejestracja użytkowników"
            label="Logowanie i rejestracja użytkowników"
          />

          <Form.Check
            {...register('system subskrypcji płatnych kursów')}
            type="switch"
            id="System subskrypcji płatnych kursów"
            label="System subskrypcji płatnych kursów"
          />

          <Form.Check
            {...register('zarządzanie dostępem do kursów')}
            type="switch"
            id="Zarządzanie dostępem do kursów"
            label="Zarządzanie dostępem do kursów"
          />

          <Form.Check
            {...register('śledzenie postępów użytkowników')}
            type="switch"
            id="Śledzenie postępów użytkowników"
            label="Śledzenie postępów użytkowników"
          />

          <Form.Check {...register('system oceniania')} type="switch" id="System oceniania" label="System oceniania" />

          <Form.Check {...register('system nagród')} type="switch" id="System nagród" label="System nagród" />

          <Form.Check
            {...register('wiadomości i powiadomienia')}
            type="switch"
            id="Wiadomości i powiadomienia"
            label="Wiadomości i powiadomienia"
          />

          <Form.Check
            {...register('system wiadomości prywatnych')}
            type="switch"
            id="System wiadomości prywatnych"
            label="System wiadomości prywatnych"
          />

          <Form.Check
            {...register('zarządzanie użytkownikami')}
            type="switch"
            id="Zarządzanie użytkownikami"
            label="Zarządzanie użytkownikami"
          />

          <Form.Check
            {...register('zarządzanie kursami')}
            type="switch"
            id="Zarządzanie kursami"
            label="Zarządzanie kursami"
          />

          <Form.Check {...register('tworzenie kursów')} type="switch" id="Tworzenie kursów" label="Tworzenie kursów" />

          <Form.Check {...register('tworzenie testów')} type="switch" id="Tworzenie testów" label="Tworzenie testów" />

          <Form.Check {...register('tworzenie quizów')} type="switch" id="Tworzenie quizów" label="Tworzenie quizów" />
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Inne funkcje</Form.Label>
          <Form.Control {...register('inne funkcje')} as="textarea" placeholder="Inne funkcje" />
        </Form.Group>

        <span className={styles.button_wrapper}>
          <Button type="button" onClick={prevStep} className={styles.button}>
            Wstecz
          </Button>
          <Button type="submit" className={styles.button}>
            Dalej
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default LmsFunctionsForm;
