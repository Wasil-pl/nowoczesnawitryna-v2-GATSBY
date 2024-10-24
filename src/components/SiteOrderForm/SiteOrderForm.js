import React, { useState } from 'react';
import * as styles from './SiteOrderForm.module.scss';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../consts/errorMesages';
import { patterns } from '../../consts/patterns';
import { API_URL } from '../../utils/config';

const SiteOrderForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showProductFields, setShowProductFields] = useState(false);
  const [showHostingFields, setShowHostingFields] = useState(false);
  const [showInspirationField, setShowInspirationField] = useState(false);
  const [showLogoNeedField, setShowLogoNeedField] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    setLoading(true);
    fetch(`${API_URL}/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setSuccess(true);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    });
  };

  return (
    <section id="formularz-zamowienia" className={styles.contact}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.form_wrapper}>
            <h3>Formularz zamówienia strony internetowej</h3>

            {loading && <Alert variant="info">Wysyłanie...</Alert>}
            {success && <Alert variant="success">Formularz został wysłany pomyślnie.</Alert>}
            {error && <Alert variant="danger">Błąd podczas wysyłania. Spróbuj ponownie.</Alert>}

            <div className={styles.form}>
              <Form onSubmit={validate(handleSubmit)}>
                {/* Rodzaj strony */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Rodzaj strony</Form.Label>
                  <Form.Control
                    as="select"
                    {...register('siteType', { required: errorMessages.required })}
                    onChange={(e) => setShowProductFields(e.target.value === 'Sklep internetowy')}
                  >
                    <option value="">Wybierz...</option>
                    <option value="Sklep internetowy">Sklep internetowy (e-commerce)</option>
                    <option value="WordPress">Strona na WordPress</option>
                    <option value="WebApp">Aplikacja webowa</option>
                    <option value="HTML">Strona w czystym HTML/CSS/JS</option>
                  </Form.Control>
                  {errors.siteType && <Error>{errors.siteType?.message}</Error>}
                </Form.Group>

                {/* Dodatkowe pola dla sklepu internetowego */}
                {showProductFields && (
                  <>
                    <Form.Group className={styles.form_group}>
                      <Form.Label>Ilość produktów</Form.Label>
                      <Form.Control
                        {...register('productCount', { required: errorMessages.required })}
                        placeholder="Wpisz ilość produktów"
                        type="number"
                      />
                      {errors.productCount && <Error>{errors.productCount?.message}</Error>}
                    </Form.Group>

                    <Form.Group className={styles.form_group}>
                      <Form.Label>Czy produkty mają być powiązane w zestawy lub serie?</Form.Label>
                      <Form.Control {...register('productGrouping')} as="select" defaultValue="">
                        <option value="">Wybierz...</option>
                        <option value="Nie">Nie, każdy produkt sprzedawany jest oddzielnie</option>
                        <option value="Zestawy">Tak, niektóre produkty będą sprzedawane jako zestawy</option>
                        <option value="Serie">
                          Tak, niektóre produkty będą częścią serii (np. ta sama linia mebli)
                        </option>
                      </Form.Control>
                    </Form.Group>
                  </>
                )}

                {/* Pytanie o projekt strony */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Czy masz już projekt strony?</Form.Label>
                  <Form.Control
                    as="select"
                    {...register('hasProject', { required: errorMessages.required })}
                    onChange={(e) => setShowInspirationField(e.target.value === 'Nie')}
                  >
                    <option value="">Wybierz...</option>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                  </Form.Control>
                  {errors.hasProject && <Error>{errors.hasProject?.message}</Error>}
                </Form.Group>

                {/* Dodatkowe pole, jeśli klient nie ma projektu */}
                {showInspirationField && (
                  <Form.Group className={styles.form_group}>
                    <Form.Label>Czy masz strony, które Ci się podobają? Jeśli tak, podaj ich adresy URL</Form.Label>
                    <Form.Control
                      {...register('inspiration')}
                      placeholder="Podaj adresy URL stron"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                )}

                {/* Pytanie o logo */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Czy masz już logo?</Form.Label>
                  <Form.Control
                    as="select"
                    {...register('hasLogo', { required: errorMessages.required })}
                    onChange={(e) => setShowLogoNeedField(e.target.value === 'Nie')}
                  >
                    <option value="">Wybierz...</option>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                  </Form.Control>
                  {errors.hasLogo && <Error>{errors.hasLogo?.message}</Error>}
                </Form.Group>

                {/* Dodatkowe pole, jeśli klient nie ma logo */}
                {showLogoNeedField && (
                  <Form.Group className={styles.form_group}>
                    <Form.Label>Czy potrzebujesz stworzenia logo?</Form.Label>
                    <Form.Control as="select" {...register('needsLogo')}>
                      <option value="">Wybierz...</option>
                      <option value="Tak">Tak</option>
                      <option value="Nie">Nie</option>
                    </Form.Control>
                  </Form.Group>
                )}

                {/* Ilość i typ podstron */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Ilość i typ podstron</Form.Label>
                  <Form.Control
                    {...register('pages')}
                    placeholder="Np. Strona główna, O nas, Kontakt"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>

                {/* Dodatkowe funkcjonalności */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Dodatkowe funkcjonalności</Form.Label>
                  <Form.Control
                    {...register('features')}
                    placeholder="Np. integracja z płatnościami, blog, rejestracja użytkowników"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>

                {/* Hosting i domena */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Czy masz hosting i domenę?</Form.Label>
                  <Form.Control
                    as="select"
                    {...register('hasHosting')}
                    onChange={(e) => setShowHostingFields(e.target.value === 'Tak')}
                  >
                    <option value="">Wybierz...</option>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                  </Form.Control>
                </Form.Group>

                {showHostingFields && (
                  <Form.Group className={styles.form_group}>
                    <Form.Label>Podaj szczegóły hostingu i domeny</Form.Label>
                    <Form.Control
                      {...register('hostingDetails')}
                      placeholder="Np. CyberFolks, nazwa domeny"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                )}

                {/* Dane kontaktowe */}
                <Form.Group className={styles.form_group}>
                  <Form.Label>Imię i Nazwisko / Nazwa firmy</Form.Label>
                  <Form.Control
                    {...register('name', { required: errorMessages.required })}
                    placeholder="Imię i Nazwisko / Nazwa firmy"
                  />
                  {errors.name && <Error>{errors.name?.message}</Error>}
                </Form.Group>

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
                  />
                  {errors.email && <Error>{errors.email?.message}</Error>}
                </Form.Group>

                <Form.Group className={styles.form_group}>
                  <Form.Label>Telefon</Form.Label>
                  <Form.Control
                    {...register('phone', { required: errorMessages.required })}
                    type="tel"
                    placeholder="Telefon"
                  />
                  {errors.phone && <Error>{errors.phone?.message}</Error>}
                </Form.Group>

                <Button type="submit" className={styles.button}>
                  Wyślij
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SiteOrderForm;
