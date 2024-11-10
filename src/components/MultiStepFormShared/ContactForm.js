import React, { useState } from 'react';
import * as styles from '../MultiStepForm/OrderSiteForm.module.scss';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../consts/errorMesages';
import { patterns } from '../../consts/patterns';
import { API_URL } from '../../utils/config';
import { lms_data, shop_data, website_data } from '../../consts/allDataPrepare';

const ContactForm = ({ prevStep, updateData, defaultValues, updateDefaultValues, allDataToSend, siteType }) => {
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

    let payload = {};

    if (siteType === 'sklep online') {
      payload = shop_data(allDataToSend, formattedData);
    } else if (siteType === 'strona internetowa') {
      payload = website_data(allDataToSend, formattedData);
    } else if (siteType === 'platforma lms') {
      payload = lms_data(allDataToSend, formattedData);
    }

    setLoading(true);
    fetch(`${API_URL}/send-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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
            <Form.Label>Imię</Form.Label>
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
          <span className={styles.button_wrapper}>
            <Button type="button" onClick={prevStep} className={styles.button}>
              Wstecz
            </Button>
            <Button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Wysyłanie...' : 'Potwierdź i wyślij'}
            </Button>
          </span>
        )}

        {success && <Alert variant="success">Formularz został pomyślnie wysłany!</Alert>}
        {error && (
          <Alert variant="danger">
            Wystąpił błąd podczas wysyłania. Spróbuj ponownie. <br /> Jeśli problem się powtarza, skontaktuj się ze mną
            za pomocą danych kontaktowych podanych na dole strony i powiadom mnie o problemie. <br /> Z góry dziękuję.
          </Alert>
        )}

        {loading && <Alert variant="info">Wysyłanie formularza...</Alert>}
      </Form>
    </div>
  );
};

export default ContactForm;
