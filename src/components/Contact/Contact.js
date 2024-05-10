import React from 'react';
import * as styles from './Contact.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../consts/errorMesages';
import { patterns } from '../../consts/patterns';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const Contact = () => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.Contact}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.form_wrapper}>
            <h3>Gotowy aby zacząć?</h3>
            <p>Skontaktuj się ze mną już dziś!</p>
            <div className={styles.form}>
              <Form onSubmit={validate(handleSubmit)}>
                <Form.Group className={styles.form_group}>
                  <Form.Label>Imię i Nazwisko</Form.Label>
                  <Form.Control
                    {...register('name', { required: errorMessages.required })}
                    placeholder="Imię i Nazwisko"
                    autoComplete="name"
                    required
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
                    autoComplete="email"
                    required
                  />
                  {errors.email && <Error>{errors.email?.message}</Error>}
                </Form.Group>

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
                    autoComplete="tel"
                  />
                  {errors.phone && <Error>{errors.phone?.message}</Error>}
                </Form.Group>

                <Form.Group className={styles.form_group}>
                  <Form.Label>Tytuł</Form.Label>
                  <Form.Control
                    {...register('title', {
                      required: errorMessages.required,
                      minLength: {
                        value: patterns.titleMinLength,
                        message: errorMessages.minLength(patterns.titleMinLength),
                      },
                    })}
                    placeholder="Tytuł"
                    autoComplete="title"
                    required
                  />
                  {errors.title && <Error>{errors.title?.message}</Error>}
                </Form.Group>

                <Form.Group className={styles.form_group}>
                  <Form.Label>Wiadomość</Form.Label>
                  <Form.Control
                    {...register('message', {
                      required: errorMessages.required,
                      minLength: {
                        value: patterns.descryptionMinLength,
                        message: errorMessages.minLength(patterns.descryptionMinLength),
                      },
                      maxLength: {
                        value: patterns.descryptionMaxLength,
                        message: errorMessages.maxLength(patterns.descryptionMaxLength),
                      },
                    })}
                    as="textarea"
                    rows={3}
                    placeholder="Wiadomość"
                    autoComplete="message"
                    required
                  />
                  {errors.message && <Error>{errors.message?.message}</Error>}
                </Form.Group>

                <Button type="submit" className={styles.button}>
                  Wyślij
                </Button>
              </Form>
            </div>
          </div>

          <div className={styles.info_wrapper}>
            <SectionTitle title="porozmawiajmy" subtitle="Dość o mnie, teraz chcę usłyszeć Twoją historię" />

            <div className={styles.info}>
              <div className={styles.info_item}>
                <a href="tel:+48733542926">
                  <TelephoneFill />
                  <p>Telefon</p>
                  +48 733 542 926
                </a>
              </div>

              <div className={styles.info_item}>
                <a href="mailto:nowoczesnawitryna@gmail.com">
                  <EnvelopeFill />
                  <p>E-mail</p>
                  nowoczesnawitryna@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
