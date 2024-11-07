import React, { useState } from 'react';
import * as styles from './OrderSiteForm.module.scss';
import { Container } from 'react-bootstrap';
import ShopInfoForm from './shop_components/ShopInfoForm';
import ChooseSiteForm from './shared_components/ChooseSiteForm';
import WebSitesInfoForm from './websites_components/WebSitesInfoForm';
import ShopFunctionsForm from './shop_components/shopFunctionsForm';
import ShopPaymentsForm from './shop_components/ShopPaymentsForm';
import ShopDeliveryForm from './shop_components/ShopDeliveryForm';

export const OrderSiteForm = () => {
  const [step, setStep] = useState(1);
  const [selectedSiteType, setSelectedSiteType] = useState(null);
  const [formData, setFormData] = useState({});
  console.log('formData:', formData);

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

  const prepareDataToDisplay = () => {
    const dataToDisplay = [
      { label: 'Rodzaj strony', value: selectedSiteType.siteType },
      { label: 'Branża / Asortyment', value: formData.productType },
      { label: 'Ilość produktów', value: formData.productAmount },
      {
        label: 'Funkcje sklepu',
        value: Array.isArray(formData.shop_functions) ? formData.shop_functions.join(', ') : '',
      },
      { label: 'Formy płatności', value: Array.isArray(formData.payments) ? formData.payments.join(', ') : '' },
      { label: 'Formy dostawy', value: Array.isArray(formData.delivery) ? formData.delivery.join(', ') : '' },
    ];

    return dataToDisplay.filter((item) => item.value);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ChooseSiteForm onSelectType={handleTypeSelection} nextStep={nextStep} />;

      case 2:
        if (selectedSiteType.siteType === 'sklep') {
          return (
            <ShopInfoForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              dataToDisplay={prepareDataToDisplay()}
            />
          );
        }

        if (selectedSiteType.siteType === 'strona') {
          return (
            <WebSitesInfoForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              dataToDisplay={prepareDataToDisplay()}
            />
          );
        }

        break;

      case 3:
        if (selectedSiteType.siteType === 'sklep') {
          return (
            <ShopFunctionsForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              dataToDisplay={prepareDataToDisplay()}
            />
          );
        }

        break;

      case 4:
        if (selectedSiteType.siteType === 'sklep') {
          return (
            <ShopPaymentsForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              dataToDisplay={prepareDataToDisplay()}
            />
          );
        }

        break;

      case 5:
        if (selectedSiteType.siteType === 'sklep') {
          return (
            <ShopDeliveryForm
              nextStep={nextStep}
              prevStep={prevStep}
              updateData={handleFormDataChange}
              dataToDisplay={prepareDataToDisplay()}
            />
          );
        }

        break;

      default:
        return <ChooseSiteForm onSelectType={handleTypeSelection} />;
    }
  };

  return (
    <div className={styles.order_site_form}>
      <Container>{renderStep()}</Container>
    </div>
  );
};
