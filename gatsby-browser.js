import React from 'react';
import ConsentForm from './src/components/Cookies/ConsentForm/ConsentForm';
import ReactDOM from 'react-dom/client';
import './src/styles/tailwind.scss';
import './src/styles/global.scss';
import './src/styles/normalize.scss';

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};

export const wrapPageElement = ({ element }) => (
  <>
    <ConsentForm />
    {element}
  </>
);
