import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';
import SelectionDisplay from '../shared_components/SelectionDisplay';

const ShopInfoForm = ({ nextStep, prevStep, updateData, dataToDisplay }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    updateData(data);
    nextStep();
  };

  return (
    <div>
      <SelectionDisplay dataToDisplay={dataToDisplay} />

      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Branża / Asortyment</Form.Label>
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
            placeholder="Branża / Asortyment"
            label="Branża / Asortyment"
            autoComplete="message"
            required
          />
          {errors.productType && <Error>{errors.productType?.message}</Error>}
        </Form.Group>
        <Form.Group className={styles.form_group}>
          <Form.Label>ilość produktów</Form.Label>
          <Form.Control
            {...register('productAmount', {
              required: errorMessages.required,
              min: {
                value: patterns.shopProductAmountMin,
                message: errorMessages.minNumber(patterns.shopProductAmountMin),
              },
            })}
            type="number"
            placeholder="ilość produktów (w przybliżeniu)"
            label="ilość produktów"
            autoComplete="productAmount"
            required
          />
          {errors.productAmount && <Error>{errors.productAmount?.message}</Error>}
        </Form.Group>
        <Button type="submit" className={styles.button}>
          Dalej
        </Button>
        <Button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </Button>
      </Form>
    </div>
  );
};

export default ShopInfoForm;
