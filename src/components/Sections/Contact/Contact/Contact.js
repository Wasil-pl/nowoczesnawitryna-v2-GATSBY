import React, { useState } from 'react';
import * as styles from './Contact.module.scss';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import { API_URL } from '../../../../utils/config';
import { BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    fetch(`${API_URL}/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError(true);
      }
      setLoading(false);
    });
  };

  return (
    <section id="kontakt" className={styles.contact}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          <div className={styles.form_wrapper}>
            <h3>Gotowy aby zacząć?</h3>
            <p>Skontaktuj się ze mną już dziś!</p>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form_group}>
                <label htmlFor="name">Imię</label>
                <input
                  id="name"
                  {...register('name', { required: errorMessages.required })}
                  placeholder="Imię"
                  autoComplete="name"
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
                />
                {errors.phone && <Error>{errors.phone.message}</Error>}
              </div>

              <div className={styles.form_group}>
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', {
                    required: errorMessages.required,
                    minLength: {
                      value: patterns.descryptionMinLength,
                      message: errorMessages.minLength,
                    },
                    maxLength: {
                      value: patterns.descryptionMaxLength,
                      message: errorMessages.maxLength(patterns.descryptionMaxLength),
                    },
                  })}
                  placeholder="Wiadomość"
                  autoComplete="off"
                />
                {errors.message && <Error>{errors.message.message}</Error>}
              </div>

              {loading && <div className={styles.info_alert}>Wysyłanie wiadomości...</div>}
              {success && (
                <div className={styles.success_alert}>
                  Wiadomość została wysłana pomyślnie. Odpowiem tak szybko, jak to możliwe.
                </div>
              )}
              {error && (
                <div className={styles.error_alert}>
                  Wystąpił błąd podczas wysyłania. Spróbuj ponownie. Jeśli problem się powtarza, napisz bezpośrednio na
                  e-mail lub zadzwoń. Dzięki!
                </div>
              )}

              {!loading && !success && (
                <button type="submit" className={styles.button}>
                  Wyślij
                </button>
              )}
            </form>
          </div>

          <div className={styles.info_wrapper}>
            <SectionTitle title="porozmawiajmy" subtitle="Dość o mnie, teraz chcę usłyszeć Twoją historię" />
            <div className={styles.info}>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.info_item}>
                <a href="tel:+48733542926">
                  <BsTelephoneFill />
                  <p>Telefon</p>
                  +48 733 542 926
                </a>
              </div>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.info_item}>
                <a href="mailto:nowoczesnawitryna@gmail.com">
                  <BsEnvelopeFill />
                  <p>E-mail</p>
                  nowoczesnawitryna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
