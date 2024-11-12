import React, { useState } from 'react';
import * as styles from './OrderSiteForm.module.scss';
import './OrderSiteForm.css';
import { Container } from 'react-bootstrap';
import ChooseSiteForm from '../MultiStepFormShared/ChooseSiteForm';
import ShopInfoForm from '../MultiStepFormShop/ShopInfoForm';
import ShopFunctionsForm from '../MultiStepFormShop/ShopFunctionsForm';
import ShopPaymentsForm from '../MultiStepFormShop/ShopPaymentsForm';
import AdditionalInformation from '../MultiStepFormShared/AdditionalInformation';
import ShopDeliveryForm from '../MultiStepFormShop/ShopDeliveryForm';
import WebSitesFunctionForm from '../MultiStepFormWebSites/WebSitesFunctionForm';
import WebSitesInfoForm from '../MultiStepFormWebSites/WebSitesInfoForm';
import HostingInfo from '../MultiStepFormShared/HostingInfo';
import ContactForm from '../MultiStepFormShared/ContactForm';
import LmsInfoForm from '../MultiStepFormLms/LmsInfoForm';
import LmsFunctionForm from '../MultiStepFormLms/LmsFunctionForm';
import LmsPaymentsForm from '../MultiStepFormLms/LmsPaymentsForm';
import SectionTitle from '../SectionTitle/SectionTitle';
import StepsCountDIsplay from '../MultiStepFormShared/StepsCountDIsplay';
import SelectionDisplay from '../MultiStepFormShared/SelectionDisplay';
import Action from '../Action/Action';

export const OrderSiteForm = () => {
  const [step, setStep] = useState(1);
  const [selectedSiteType, setSelectedSiteType] = useState(null);
  const [formData, setFormData] = useState({});
  const [defaultValues, setDefaultValues] = useState({});

  const nextStep = () => {
    setStep(step + 1);
    const element = document.getElementById('input_form');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const prevStep = () => {
    setStep(step - 1);
    const element = document.getElementById('input_form');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleTypeSelection = (type) => {
    setSelectedSiteType(type);
    setFormData((prevData) => ({ ...prevData, ...type }));
    nextStep();
  };

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const resetAllData = () => {
    setFormData({});
    setDefaultValues({});
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ChooseSiteForm
            onSelectType={handleTypeSelection}
            nextStep={nextStep}
            defaultValues={defaultValues}
            updateDefaultValues={setDefaultValues}
            resetAllData={resetAllData}
          />
        );

      case 2:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <ShopInfoForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'strona internetowa') {
          return (
            <WebSitesInfoForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'platforma lms') {
          return (
            <LmsInfoForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        break;

      case 3:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <ShopFunctionsForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'strona internetowa') {
          return (
            <WebSitesFunctionForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'platforma lms') {
          return (
            <LmsFunctionForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        break;

      case 4:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <ShopPaymentsForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'strona internetowa') {
          return (
            <AdditionalInformation
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'platforma lms') {
          return (
            <LmsPaymentsForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        break;

      case 5:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <ShopDeliveryForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'strona internetowa') {
          return (
            <HostingInfo
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'platforma lms') {
          return (
            <AdditionalInformation
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        break;

      case 6:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <AdditionalInformation
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'strona internetowa') {
          return (
            <ContactForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
              allDataToSend={formData}
              siteType={'strona internetowa'}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'platforma lms') {
          return (
            <HostingInfo
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        break;

      case 7:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <HostingInfo
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
            />
          );
        }

        if (selectedSiteType['Rodzaj strony'] === 'platforma lms') {
          return (
            <ContactForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
              allDataToSend={formData}
              siteType={'platforma lms'}
            />
          );
        }

        break;

      case 8:
        if (selectedSiteType['Rodzaj strony'] === 'sklep online') {
          return (
            <ContactForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              defaultValues={defaultValues}
              updateDefaultValues={setDefaultValues}
              allDataToSend={formData}
              siteType={'sklep online'}
            />
          );
        }

        break;

      default:
        return <ChooseSiteForm onSelectType={handleTypeSelection} />;
    }
  };

  return (
    <section id="form" className={`${styles.order_site_form} site_form`}>
      <Container>
        <SectionTitle title="Szybka wycena" coloredText=" strony internetowej" variant="white" />
        <SelectionDisplay data={formData} />
        <StepsCountDIsplay data={step} variant={selectedSiteType?.['Rodzaj strony']} />
        <div className={styles.form}>{renderStep()}</div>
        <Action kontakt_3 variant="bottom" />
      </Container>
    </section>
  );
};
