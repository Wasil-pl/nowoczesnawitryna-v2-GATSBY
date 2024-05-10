import React from 'react';

export const errorMessages = {
  required: 'To pole jest wymagane',
  emailPattern: 'Niepoprawny adres email',
  minLength: (minLength) => `To pole musi mieć co najmniej ${minLength} znaków`,
  maxLength: (maxLength) => `To pole może mieć maksymalnie ${maxLength} znaków`,
  minNumber: (minNumber) => `To pole musi być większe od ${minNumber}`,
};

export const Error = ({ children }) => <small className="d-block form-text text-danger mt-2">{children}</small>;
