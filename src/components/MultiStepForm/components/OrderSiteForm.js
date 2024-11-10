import React, { useState } from 'react';
import * as styles from './OrderSiteForm.module.scss';
import './OrderSiteForm.css';
import { Container } from 'react-bootstrap';
import ShopInfoForm from './shop_components/ShopInfoForm';
import ChooseSiteForm from './shared_components/ChooseSiteForm';
import WebSitesInfoForm from './websites_components/WebSitesInfoForm';
import ShopPaymentsForm from './shop_components/ShopPaymentsForm';
import ShopDeliveryForm from './shop_components/ShopDeliveryForm';
import ShopFunctionsForm from './shop_components/ShopFunctionsForm';
import AdditionalInformation from './shared_components/AdditionalInformation';
import SelectionDisplay from './shared_components/SelectionDisplay';
import HostingInfo from './shared_components/HostingInfo';
import ContactForm from './shared_components/ContactForm';
import SectionTitle from '../../SectionTitle/SectionTitle';
import StepsCountDIsplay from './shared_components/StepsCountDIsplay';
import WebSitesFunctionForm from './websites_components/WebSitesFunctionForm';

export const OrderSiteForm = () => {
  const [step, setStep] = useState(1);
  const [selectedSiteType, setSelectedSiteType] = useState(null);
  const [formData, setFormData] = useState({});
  const [defaultValues, setDefaultValues] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
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
            />
          );
        }

        break;

      default:
        return <ChooseSiteForm onSelectType={handleTypeSelection} />;
    }
  };

  return (
    <div className={`${styles.order_site_form} site_form`}>
      <Container className={styles.wrapper}>
        <SectionTitle title="Szybka wycena" coloredText=" strony internetowej" variant="white" />
        <SelectionDisplay data={formData} />
        <StepsCountDIsplay data={step} variant={selectedSiteType?.['Rodzaj strony']} />
        <div className={styles.form}>{renderStep()}</div>
      </Container>
    </div>
  );
};
