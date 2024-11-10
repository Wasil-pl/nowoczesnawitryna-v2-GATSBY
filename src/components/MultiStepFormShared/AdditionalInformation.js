import React, { useState } from 'react';
import * as styles from '../MultiStepForm/OrderSiteForm.module.scss';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../consts/errorMesages';
import { patterns } from '../../consts/patterns';

const AdditionalInformation = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const [blogVariant, setBlogVariant] = useState('nie');

  const handleSubmit = (data) => {
    // Klucze istotne dla tego komponentu
    const relevantKeys = [
      'ilość zakładek',
      'logo',
      'projekt',
      'Adresy stron które Ci się podobają',
      'blog',
      'Ile artykułów ma mieć blog',
    ];

    // Filtrujemy dane, aby zawierały tylko wartości z tego kroku
    const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => relevantKeys.includes(key)));

    const formattedData = {};

    if (filteredData['ilość zakładek']) {
      formattedData['Ilość zakładek'] = filteredData['ilość zakładek'];
    }

    if (filteredData.logo) {
      formattedData['Czy posiadasz logo'] = filteredData.logo;
    }

    if (filteredData.projekt) {
      formattedData['Czy masz projekt'] = filteredData.projekt;
    }

    if (filteredData['Adresy stron które Ci się podobają']) {
      formattedData['Adresy stron które Ci się podobają'] = filteredData['Adresy stron które Ci się podobają'];
    }

    if (filteredData.blog) {
      formattedData['Czy będzie blog?'] = filteredData.blog;
    }

    if (filteredData.blog === 'tak' && filteredData['Ile artykułów ma mieć blog']) {
      formattedData['Ile artykułów ma mieć blog'] = filteredData['Ile artykułów ma mieć blog'];
    } else if (defaultValues['typ strony'] === 'blog' && filteredData['Ile artykułów ma mieć blog']) {
      formattedData['Ile artykułów ma mieć blog'] = filteredData['Ile artykułów ma mieć blog'];
    } else {
      formattedData['Ile artykułów ma mieć blog'] = '0';
    }

    updateData(formattedData);
    updateDefaultValues(data);
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className={styles.form_group}>
          <Form.Label>Ile zakładek ma mieć strona?</Form.Label>
          <Form.Control
            {...register('ilość zakładek', {
              required: errorMessages.required,
              min: {
                value: patterns.shopProductTypeMinLength,
                message: errorMessages.minNumber(patterns.shopProductTypeMinLength),
              },
            })}
            type="number"
            placeholder="Ile zakładek ma mieć strona?"
            label="Ile zakładek ma mieć strona?"
            autoComplete="ilość zakładek"
            required
          />

          {errors['ilość zakładek'] && <Error>{errors['ilość zakładek']?.message}</Error>}
        </Form.Group>

        {defaultValues['typ strony'] !== 'blog' && (
          <Form.Group className={styles.form_group}>
            <Form.Label>Czy będzie blog?</Form.Label>
            <Form.Control
              {...register('blog', {
                required: errorMessages.required,
              })}
              as="select"
              placeholder="Czy będzie blog?"
              label="Czy będzie blog?"
              autoComplete="blog"
              onChange={(e) => setBlogVariant(e.target.value)}
              required
            >
              <option value="">Wybierz</option>
              <option value="nie">Nie</option>
              <option value="tak">Tak</option>
            </Form.Control>
          </Form.Group>
        )}

        {(defaultValues['typ strony'] === 'blog' || blogVariant === 'tak') && (
          <Form.Group className={styles.form_group}>
            <Form.Label>Ile artykułów ma mieć blog?</Form.Label>
            <Form.Control
              {...register('Ile artykułów ma mieć blog', {
                required: errorMessages.required,
                min: {
                  value: patterns.shopProductTypeMinLength,
                  message: errorMessages.minNumber(patterns.shopProductTypeMinLength),
                },
              })}
              type="number"
              placeholder="Ile artykułów ma mieć blog?"
              label="Ile artykułów ma mieć blog?"
              autoComplete="blog"
            />
          </Form.Group>
        )}

        <Form.Group className={styles.form_group}>
          <Form.Label>Czy posiadasz logo?</Form.Label>
          <Form.Control
            {...register('logo', {
              required: errorMessages.required,
            })}
            as="select"
            placeholder="Czy posiadasz logo?"
            label="Czy posiadasz logo?"
            autoComplete="logo"
            required
          >
            <option value="">Wybierz</option>
            <option value="tak">Tak</option>
            <option value="nie i nie potrzebuję">Nie i nie potrzebuję</option>
            <option value="nie, ale potrzebuję">Nie, ale potrzebuję</option>
          </Form.Control>
          {errors.logo && <Error>{errors.logo?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Czy posiadasz projekt?</Form.Label>
          <Form.Control
            {...register('projekt', {
              required: errorMessages.required,
            })}
            as="select"
            placeholder="Czy posiadasz projekt?"
            label="Czy posiadasz projekt?"
            autoComplete="projekt"
            required
          >
            <option value="">Wybierz</option>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </Form.Control>
          {errors.projekt && <Error>{errors.projekt?.message}</Error>}
        </Form.Group>

        <Form.Group className={styles.form_group}>
          <Form.Label>Adresy stron które Ci się podobają</Form.Label>
          <Form.Control
            {...register('Adresy stron które Ci się podobają')}
            as="textarea"
            rows={3}
            placeholder="Adresy stron które Ci się podobają"
            autoComplete="strony"
          />
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

export default AdditionalInformation;
