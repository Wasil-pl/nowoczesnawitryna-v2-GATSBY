// Contact.jsx
import React, { useState } from 'react';
import SectionTitle from '../../../Ui/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import { API_URL } from '../../../../utils/config';
import { EnvelopeFillIcon, TelephoneFillIcon } from '../../../Icons/Icons';
import './Contact.scss';

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
      response.status === 200 ? setSuccess(true) : setError(true);
      setLoading(false);
    });
  };

  return (
    <section id="kontakt" className="contact mt-[200px] mb-[100px] md:my-[200px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-row flex-wrap gap-[40px]">
          {/* Formularz */}
          <div className="form_wrapper flex-[1_1_calc(50%-20px)] px-[60px] py-[40px] bg-background-dark text-text-light">
            <h3 className="text-[2rem] mb-[20px] font-bold">Gotowy aby zacząć?</h3>
            <p className="mb-[30px]">Skontaktuj się ze mną już dziś!</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Imię */}
              <div className="mb-[20px] flex flex-col gap-[2px]">
                <label htmlFor="name">Imię</label>
                <input
                  id="name"
                  {...register('name', { required: errorMessages.required })}
                  placeholder="Imię"
                  autoComplete="name"
                  className="border p-2 text-text-dark"
                />
                {errors.name && <Error className="text-text-danger text-[0.8rem]">{errors.name.message}</Error>}
              </div>

              {/* E-mail */}
              <div className="mb-[20px] flex flex-col gap-[2px]">
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
                  className="border p-2 text-text-dark"
                />
                {errors.email && <Error className="text-text-danger text-[0.8rem]">{errors.email.message}</Error>}
              </div>

              {/* Telefon */}
              <div className="mb-[20px] flex flex-col gap-[2px]">
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
                  className="border p-2 text-text-dark"
                />
                {errors.phone && <Error className="text-text-danger text-[0.8rem]">{errors.phone.message}</Error>}
              </div>

              {/* Wiadomość */}
              <div className="mb-[20px] flex flex-col gap-[2px]">
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
                  className="border p-2 text-text-dark"
                />
                {errors.message && <Error className="text-text-danger text-[0.8rem]">{errors.message.message}</Error>}
              </div>

              {/* Status */}
              {loading && <div className="mb-[20px]">Wysyłanie wiadomości...</div>}
              {success && (
                <div className="mb-[20px] text-text-success">
                  Wiadomość została wysłana pomyślnie. Odpowiem tak szybko, jak to możliwe.
                </div>
              )}
              {error && (
                <div className="mb-[20px] text-text-danger">
                  Wystąpił błąd podczas wysyłania. Spróbuj ponownie. Jeśli problem się powtarza, napisz bezpośrednio na
                  e-mail lub zadzwoń. Dzięki!
                </div>
              )}

              {/* Przycisk */}
              {!loading && !success && (
                <button
                  type="submit"
                  className="button
                             block mx-auto
                             rounded-[5px] text-[1rem] uppercase
                             px-[20px] py-[10px]
                             border border-background-primary
                             text-text-light
                             hover:text-primary hover:border-primary"
                >
                  Wyślij
                </button>
              )}
            </form>
          </div>

          {/* Kontakt */}
          <div className="info_wrapper flex-[1_1_calc(50%-20px)] px-[60px] py-[40px]">
            <SectionTitle title="porozmawiajmy" subtitle="Dość o mnie, teraz chcę usłyszeć Twoją historię" />
            <div className="info flex flex-col items-center">
              {[
                {
                  Icon: TelephoneFillIcon,
                  label: 'Telefon',
                  value: '+48 733 542 926',
                  href: 'tel:+48733542926',
                },
                {
                  Icon: EnvelopeFillIcon,
                  label: 'E-mail',
                  value: 'nowoczesnawitryna@gmail.com',
                  href: 'mailto:nowoczesnawitryna@gmail.com',
                },
              ].map(({ Icon, label, value, href }, i) => (
                <div
                  key={i}
                  data-sal="slide-left"
                  data-sal-delay="100"
                  data-sal-duration="1000"
                  className="info_item text-center mb-[50px]"
                >
                  <a href={href} className="flex flex-col items-center text-text-dark hover:text-primary">
                    <Icon width={45} height={45} />
                    <p className="text-[24px] my-[10px]">{label}</p>
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
