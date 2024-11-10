import React from 'react';
import * as styles from '../MultiStepForm/OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../consts/errorMesages';
import { patterns } from '../../consts/patterns';

const LmsInfoForm = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Klucze istotne dla tego komponentu
    const relevantKeys = ['typ szkoły', 'ilość kursów', 'rodzaje materiałów'];

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Typ szkoły': filteredData['typ szkoły'],
      'Ilość kursów': filteredData['ilość kursów'],
      'Rodzaje materiałów': filteredData['rodzaje materiałów'],
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Typ szkoły</Form.Label>
          <Form.Control
            {...register('typ szkoły', {
              required: errorMessages.required,
              minLength: {
                value: patterns.shopProductTypeMinLength,
                message: errorMessages.minLength,
              },
              maxLength: {
                value: patterns.shopProductTypeMaxLength,
                message: errorMessages.maxLength(patterns.shopProductTypeMaxLength),
              },
            })}
            as="textarea"
            rows={3}
            placeholder="Typ szkoły (np. szkoła informatyczna, szkoła językowa, kursy fotograficzne itp.)"
            label="Typ szkoły"
            autoComplete="message"
            required
          />
          {errors['typ szkoły'] && <Error>{errors['typ szkoły']?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>ilość kursów</Form.Label>
          <Form.Control
            {...register('ilość kursów', {
              required: errorMessages.required,
              min: {
                value: patterns.shopProductAmountMin,
                message: errorMessages.minNumber(patterns.shopProductAmountMin),
              },
            })}
            type="number"
            placeholder="ilość kursów (w przybliżeniu)"
            label="ilość kursów"
            autoComplete="ilość kursów"
            required
          />
          {errors['ilość kursów'] && <Error>{errors['ilość kursów']?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Jakie typy materiałów będą wykorzystywane?</Form.Label>
          <Form.Control
            {...register('rodzaje materiałów', {
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
            as="textarea"
            rows={3}
            placeholder="Jakie typy materiałów będą wykorzystywane? (np. PDF, wideo, prezentacje, pliki audio)"
            label="Jakie typy materiałów będą wykorzystywane? "
            autoComplete="message"
            required
          />
          {errors['rodzaje materiałów'] && <Error>{errors['rodzaje materiałów']?.message}</Error>}
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

export default LmsInfoForm;
