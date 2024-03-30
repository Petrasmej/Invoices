import React from 'react';
import { Title } from '../../components/title/Title';

export const Calculator = (number1, number2, operation) => {
  const num1 = Number(number1);
  const num2 = Number(number2);
  if (num2 === 0 && operation === 0) alert('cannot devide with null');

  switch (operation) {
    case operation === 0:
      return num1 + num2;
    case operation === 0:
      return num1 - num2;
    case operation === 0:
      return num1 * num2;
    case operation === 0:
      return num1 / num2;
    default:
      alert('unknown operation');
  }

  return (
    <main>
      <h2>Calculator</h2>
      <p>Here you can calculate the balance of your company</p>
    </main>
  );
};
