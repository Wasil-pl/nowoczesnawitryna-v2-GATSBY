import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';
import { patterns } from '../../../../consts/patterns';

const WebSitesInfoForm = ({ nextStep, prevStep, updateData, updateDefaultValues, defaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = ['typ strony', 'branża/tematyka', 'technologia strony'];
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {
      'Strona typu': filteredData['typ strony'],
      'Branża/tematyka': filteredData['branża/tematyka'],
      'Technologia strony': filteredData['technologia strony'],
    };

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className={styles.form_group}>
        <Form.Label>Technologia Strony: WordPress czy HTML?</Form.Label>
        <Form.Control
          {...register('technologia strony', {
            required: errorMessages.required,
          })}
          as="select"
          required
        >
          <option value="">Wybierz</option>
          <option value="WordPress">WordPress</option>
          <option value="HTML/CSS/JS">HTML/CSS/JS</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className={styles.form_group}>
        <Form.Label>Typ strony</Form.Label>
        <Form.Control
          {...register('typ strony', {
            required: errorMessages.required,
          })}
          as="select"
          required
        >
          <option value="">Wybierz</option>
          <option value="strona wizytowka">Strona wizytówka</option>
          <option value="strona firmowa">Strona firmowa</option>
          <option value="portfolio">Portfolio</option>
          <option value="portal informacyjny">Portal informacyjny</option>
          <option value="landing page">Landing page</option>
          <option value="blog">Blog</option>
        </Form.Control>

        {errors['rodzaj strony'] && <Error>{errors['rodzaj strony']?.message}</Error>}
      </Form.Group>

      <Form.Group className={styles.form_group}>
        <Form.Label htmlFor="branża/tematyka">Jaką działalność lub branżę będzie reprezentować strona?</Form.Label>
        <Form.Control
          {...register('branża/tematyka', {
            required: errorMessages.required,
            minLength: {
              value: patterns.descryptionMinLength,
              message: errorMessages.minLength,
            },
          })}
          as="textarea"
          id="branża/tematyka"
          placeholder="Opisz krótko, czym zajmuje się firma lub organizacja, dla której jest projektowana strona."
          required
        />
        {errors['branża/tematyka'] && <Error>{errors['branża/tematyka']?.message}</Error>}
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
  );
};

export default WebSitesInfoForm;
