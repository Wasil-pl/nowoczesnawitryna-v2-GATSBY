import React from 'react';
import * as styles from '../MultiStepForm/OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../consts/errorMesages';

const ChooseSiteForm = ({ nextStep, onSelectType, defaultValues, updateDefaultValues, resetAllData }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = async (data) => {
    // Klucz istotny dla tego komponentu
    const relevantKeys = ['siteType'];

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Rodzaj strony': filteredData.siteType,
    };

    await resetAllData();
    onSelectType(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label htmlFor="siteType">Wybierz rodzaj strony</Form.Label>
          <Form.Control
            {...register('siteType', {
              required: errorMessages.required,
            })}
            as="select"
            placeholder="Wybierz rodzaj strony"
            label="Wybierz rodzaj strony"
            id="siteType"
            required
          >
            <option value="">Wybierz</option>
            <option value="sklep online">Sklep online</option>
            <option value="strona internetowa">Strona internetowa</option>
            <option value="platforma lms">Platforma LMS</option>
          </Form.Control>
          {errors.siteType && <Error>{errors.siteType?.message}</Error>}
        </Form.Group>

        <span className={styles.button_wrapper}>
          <Button type="submit" className={styles.button}>
            Dalej
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default ChooseSiteForm;
