import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const ChooseSiteForm = ({ nextStep, prevStep, onSelectType }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    onSelectType(data);
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Wybierz rodzaj strony</Form.Label>
          <Form.Control
            {...register('siteType', {
              required: errorMessages.required,
            })}
            as="select"
            placeholder="Wybierz rodzaj strony"
            label="Wybierz rodzaj strony"
            autoComplete="strona"
            required
          >
            <option value="sklep">Sklep</option>
            <option value="strona">Strona</option>
            <option value="lms">LMS</option>
          </Form.Control>
          {errors.siteType && <Error>{errors.siteType?.message}</Error>}
        </Form.Group>
        <Button type="submit" className={styles.button}>
          Dalej
        </Button>
      </Form>
    </div>
  );
};

export default ChooseSiteForm;
