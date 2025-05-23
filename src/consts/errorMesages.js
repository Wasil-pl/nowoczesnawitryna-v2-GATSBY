import React from 'react';

export const errorMessages = {
  required: 'To pole jest wymagane',
  emailPattern: 'Niepoprawny adres email',
  minLength: `To pole nie może być puste`,
  maxLength: (maxLength) => ` To pole nie może być dłuższe niż ${maxLength} znaków`,
  minNumber: (minNumber) => `Wartość musi być większa niż ${minNumber}`,
  siteType: 'Wybierz rodzaj strony',
};

export const Error = ({ children }) => <small className="block text-sm text-red-600 mt-2">{children}</small>;
