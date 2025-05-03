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
