import React from 'react';
import loadable from '@loadable/component';
import ReactDOM from 'react-dom/client';
import './src/styles/tailwind.scss';
import './src/styles/global.scss';
import './src/styles/normalize.scss';

const ConsentForm = loadable(() => import('./src/components/Cookies/ConsentForm/ConsentForm'), {
  ssr: false,
  fallback: null,
});

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
