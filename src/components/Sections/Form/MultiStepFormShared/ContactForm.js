import React, { useState } from 'react';
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
          <div className="mb-[20px] flex flex-col gap-[2px]">
            <label htmlFor="name" className="mb-[2px] text-[0.9rem] text-text-light">
              Imię
            </label>
            <input
              id="name"
              {...register('name', { required: errorMessages.required })}
              placeholder="Imię"
              autoComplete="name"
              required
              className="p-[10px] rounded-[5px] bg-background-light"
            />
            {errors.name && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.name.message}</Error>}
          </div>

          <div className="mb-[20px] flex flex-col gap-[2px]">
            <label htmlFor="email" className="mb-[2px] text-[0.9rem] text-text-light">
              Adres e-mail
            </label>
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
              className="p-[10px] rounded-[5px] bg-background-light"
            />
            {errors.email && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.email.message}</Error>}
          </div>

          <div className="mb-[20px] flex flex-col gap-[2px]">
            <label htmlFor="phone" className="mb-[2px] text-[0.9rem] text-text-light">
              Telefon
            </label>
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
              className="p-[10px] rounded-[5px] bg-background-light"
            />
            {errors.phone && <Error className="text-text-danger text-[0.8rem] mt-[5px]">{errors.phone.message}</Error>}
          </div>
        </>
      )}

      {!success && !loading && (
        <div className="flex gap-[20px] justify-between md:justify-start">
          <button
            type="button"
            onClick={prevStep}
            className="button rounded-[5px] text-[0.9rem] uppercase px-[16px] py-[8px]"
          >
            Wstecz
          </button>
          <button
            type="submit"
            className="button rounded-[5px] text-[0.9rem] uppercase px-[16px] py-[8px]"
            disabled={loading}
          >
            Potwierdź i wyślij
          </button>
        </div>
      )}

      {success && (
        <p className="mb-[20px] p-[20px] rounded-[5px] bg-background-light text-text-success">
          Formularz został pomyślnie wysłany!
        </p>
      )}
      {error && (
        <p className="mb-[20px] p-[20px] rounded-[5px] bg-background-light text-text-danger">
          Wystąpił błąd podczas wysyłania. Spróbuj ponownie. <br />
          Jeśli problem się powtarza, skontaktuj się ze mną za pomocą danych kontaktowych podanych na dole strony i
          powiadom mnie o problemie. <br /> Z góry dziękuję.
        </p>
      )}
      {loading && (
        <p className="mb-[20px] p-[20px] rounded-[5px] bg-background-light text-text-dark">Wysyłanie formularza...</p>
      )}
    </form>
  );
};

export default ContactForm;
