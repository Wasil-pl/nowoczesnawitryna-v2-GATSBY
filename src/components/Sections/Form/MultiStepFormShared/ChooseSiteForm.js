import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const ChooseSiteForm = ({ nextStep, onSelectType, defaultValues, updateDefaultValues, resetAllData }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = async (data) => {
    const relevantKeys = ['siteType'];
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
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <label htmlFor="siteType">Wybierz rodzaj strony</label>
        <select
          id="siteType"
          {...register('siteType', {
            required: errorMessages.required,
          })}
          required
        >
          <option value="">Wybierz</option>
          <option value="sklep online">Sklep online</option>
          <option value="strona internetowa">Strona internetowa</option>
          <option value="platforma lms">Platforma LMS</option>
        </select>
        {errors.siteType && <Error>{errors.siteType?.message}</Error>}
      </div>

      <div className={styles.button_wrapper}>
        <button type="submit" className={styles.button}>
          Dalej
        </button>
      </div>
    </form>
  );
};

export default ChooseSiteForm;
