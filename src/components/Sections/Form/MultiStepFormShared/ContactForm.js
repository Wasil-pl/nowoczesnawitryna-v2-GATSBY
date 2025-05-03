import React, { useState } from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import { API_URL } from '../../../../utils/config';
import { lms_data, shop_data, website_data } from '../../../../consts/allDataPrepare';

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
    const filteredData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => (res.status === 200 ? setSuccess(true) : setError(true)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={validate(handleSubmit)}>
      {!success && (
        <>
          <div className={styles.form_group}>
            <label htmlFor="name">Imię</label>
            <input
              id="name"
              {...register('name', { required: errorMessages.required })}
              placeholder="Imię"
              autoComplete="name"
              required
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">Adres e-mail</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: errorMessages.required,
                pattern: {
                  value: patterns.emailPattern,
                  message: errorMessages.emailPattern,
                },
              })}
              placeholder="Adres e-mail"
              autoComplete="email"
              required
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: errorMessages.required,
                min: {
                  value: patterns.phoneMinLength,
                  message: errorMessages.minNumber(patterns.phoneMinLength),
                },
              })}
              placeholder="Telefon"
              autoComplete="tel"
              required
            />
            {errors.phone && <Error>{errors.phone.message}</Error>}
          </div>
        </>
      )}

      {!success && !loading && (
        <div className={styles.button_wrapper}>
          <button type="button" onClick={prevStep} className={styles.button}>
            Wstecz
          </button>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Wysyłanie...' : 'Potwierdź i wyślij'}
          </button>
        </div>
      )}

      {success && <p className={styles.success}>Formularz został pomyślnie wysłany!</p>}
      {error && (
        <p className={styles.error}>
          Wystąpił błąd podczas wysyłania. Spróbuj ponownie. <br />
          Jeśli problem się powtarza, skontaktuj się ze mną za pomocą danych kontaktowych podanych na dole strony i
          powiadom mnie o problemie. <br /> Z góry dziękuję.
        </p>
      )}
      {loading && <p className={styles.pending}>Wysyłanie formularza...</p>}
    </form>
  );
};

export default ContactForm;
