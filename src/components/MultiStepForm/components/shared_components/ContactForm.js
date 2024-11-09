import React, { useState } from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import { API_URL } from '../../../../utils/config';

const ContactForm = ({ prevStep, updateData, defaultValues, updateDefaultValues, allDataToSend }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = async (data) => {
    // Klucze istotne dla tego komponentu
    const relevantKeys = ['name', 'email', 'phone'];

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Imię i Nazwisko': filteredData.name,
      'Adres e-mail': filteredData.email,
      Telefon: filteredData.phone,
    };

    await updateData(formattedData);
    updateDefaultValues(data);

    const allDataComplete = {
      PodstawoweInformacje: {
        'Rodzaj strony': allDataToSend['Rodzaj strony'],
        Branża: allDataToSend['Branża'],
        'Ilość produktów': allDataToSend['Ilość produktów'],
        'Ilość zakładek': allDataToSend['Ilość zakładek'],
        'Czy będzie blog?': allDataToSend['Czy będzie blog?'],
        'Ile artykułów ma mieć blog': allDataToSend['Ile artykułów ma mieć blog'],
      },
      FunkcjeSklepu: {
        'Funkcje strony': allDataToSend['Funkcje strony'],
      },
      PlatnosciIDostawa: {
        'Formy płatności': allDataToSend['Formy płatności'],
        'Formy dostawy': allDataToSend['Formy dostawy'],
      },
      InneInformacje: {
        'Czy posiadasz logo': allDataToSend['Czy posiadasz logo'],
        'Czy masz projekt': allDataToSend['Czy masz projekt'],
        'Adresy stron które Ci się podobają': allDataToSend['Adresy stron które Ci się podobają'],
        'Czy posiadasz hosting?': allDataToSend['Czy posiadasz hosting?'],
        'Czy posiadasz domenę?': allDataToSend['Czy posiadasz domenę?'],
      },
      DaneKontaktowe: formattedData,
    };

    setLoading(true);
    fetch(`${API_URL}/send-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allDataComplete),
    })
      .then((response) => {
        if (response.status === 200) {
          setSuccess(true);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        {!success && (
          <Form.Group className={styles.form_group}>
            <Form.Label>Imię i Nazwisko</Form.Label>
            <Form.Control
              {...register('name', { required: errorMessages.required })}
              placeholder="Imię"
              autoComplete="name"
              label="Imię"
              required
            />
            {errors.name && <Error>{errors.name?.message}</Error>}
          </Form.Group>
        )}

        {!success && (
          <Form.Group className={styles.form_group}>
            <Form.Label>Adres e-mail</Form.Label>
            <Form.Control
              {...register('email', {
                required: errorMessages.required,
                pattern: {
                  value: patterns.emailPattern,
                  message: errorMessages.emailPattern,
                },
              })}
              type="email"
              placeholder="Adres e-mail"
              autoComplete="email"
              label="Adres e-mail"
              required
            />
            {errors.email && <Error>{errors.email?.message}</Error>}
          </Form.Group>
        )}

        {!success && (
          <Form.Group className={styles.form_group}>
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              {...register('phone', {
                required: errorMessages.required,
                min: {
                  value: patterns.phoneMinLength,
                  message: errorMessages.minNumber(patterns.phoneMinLength),
                },
              })}
              type="tel"
              placeholder="Telefon"
              label="Telefon"
              autoComplete="tel"
            />
            {errors.phone && <Error>{errors.phone?.message}</Error>}
          </Form.Group>
        )}

        {!(success || loading) && (
          <span>
            <Button type="button" onClick={prevStep} className={styles.button}>
              Wstecz
            </Button>
            <Button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Wysyłanie...' : 'Potwierdź i wyślij'}
            </Button>
          </span>
        )}

        {success && (
          <Alert variant="success" className={styles.success_message}>
            Formularz został pomyślnie wysłany!
          </Alert>
        )}
        {error && (
          <Alert variant="danger" className={styles.error_message}>
            Wystąpił błąd podczas wysyłania. Spróbuj ponownie. <br /> Jeśli problem się powtarza, skontaktuj się ze mną
            za pomocą danych kontaktowych podanych na dole strony i powiadom mnie o problemie. <br /> Z góry dziękuję.
          </Alert>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
