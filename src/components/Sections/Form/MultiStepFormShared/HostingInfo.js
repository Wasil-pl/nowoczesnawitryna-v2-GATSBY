import React from 'react';
import * as styles from '../MultiStepForm/MultiStepForm.module.scss';
import { useForm } from 'react-hook-form';
import { Error, errorMessages } from '../../../../consts/errorMesages';

const HostingInfo = ({ nextStep, prevStep, updateData, defaultValues, updateDefaultValues }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleSubmit = (data) => {
    const relevantKeys = ['hosting', 'domena'];
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
    <form onSubmit={validate(handleSubmit)}>
      <div className={styles.form_group}>
        <label htmlFor="hosting">Czy posiadasz hosting?</label>
        <select id="hosting" {...register('hosting', { required: errorMessages.required })} required>
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
        {errors.hosting && <Error>{errors.hosting.message}</Error>}
      </div>

      <div className={styles.form_group}>
        <label htmlFor="domena">Czy posiadasz domenę?</label>
        <select id="domena" {...register('domena', { required: errorMessages.required })} required>
          <option value="">Wybierz</option>
          <option value="tak">Tak</option>
          <option value="nie">Nie</option>
        </select>
        {errors.domena && <Error>{errors.domena.message}</Error>}
      </div>

      <div className={styles.button_wrapper}>
        <button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </button>
        <button type="submit" className={styles.button}>
          Dalej
        </button>
      </div>
    </form>
  );
};

export default HostingInfo;
