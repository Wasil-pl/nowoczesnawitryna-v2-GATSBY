import React from 'react';
import * as styles from '../OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const HostingInfo = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    // Klucze istotne dla tego komponentu
    const relevantKeys = ['hosting', 'domena'];

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Czy posiadasz hosting?': filteredData.hosting,
      'Czy posiadasz domenę?': filteredData.domena,
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Czy posiadasz hosting?</Form.Label>
          <Form.Control
            {...register('hosting', {
              required: errorMessages.required,
            })}
            as="select"
            placeholder="Czy posiadasz hosting?"
            label="Czy posiadasz hosting?"
            autoComplete="hosting"
            required
          >
            <option className={styles.option} value="">
              Wybierz
            </option>
            <option className={styles.option} value="tak">
              Tak
            </option>
            <option className={styles.option} value="nie">
              Nie
            </option>
          </Form.Control>
          {errors.hosting && <Error>{errors.hosting?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Czy posiadasz domenę?</Form.Label>
          <Form.Control
            {...register('domena', {
              required: errorMessages.required,
            })}
            as="select"
            placeholder="Czy posiadasz domenę?"
            label="Czy posiadasz domenę?"
            autoComplete="domena"
            required
          >
            <option className={styles.option} value="">
              Wybierz
            </option>
            <option className={styles.option} value="tak">
              Tak
            </option>
            <option className={styles.option} value="nie">
              Nie
            </option>
          </Form.Control>
          {errors.domena && <Error>{errors.domena?.message}</Error>}
        </Form.Group>

        <Button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </Button>
        <Button type="submit" className={styles.button}>
          Dalej
        </Button>
      </Form>
    </div>
  );
};

export default HostingInfo;
