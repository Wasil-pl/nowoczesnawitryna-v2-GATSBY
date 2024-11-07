import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const WebSitesInfoForm = ({ nextStep, prevStep, updateData }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    updateData(data);
    // nextStep();
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className={styles.form_group}>
        <Form.Label>Rodzaj strony</Form.Label>
        <Form.Control
          {...register('productType', {
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
          placeholder="Rodzaj strony"
          label="Rodzaj strony"
          autoComplete="message"
          required
        />
        {errors.productType && <Error>{errors.productType?.message}</Error>}
      </Form.Group>

      <Button type="submit" className={styles.button}>
        Dalej
      </Button>
      <Button type="button" onClick={prevStep} className={styles.button}>
        Wstecz
      </Button>
    </Form>
  );
};

export default WebSitesInfoForm;
