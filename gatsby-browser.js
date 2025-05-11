import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './src/styles/tailwind.scss';
import './src/styles/global.scss';
import './src/styles/normalize.scss';

const ConsentForm = lazy(() => import('./src/components/Cookies/ConsentForm/ConsentForm'));

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
};

export const wrapPageElement = ({ element }) => (
  <>
    <Suspense fallback={null}>
      <ConsentForm />
    </Suspense>
    {element}
  </>
);
