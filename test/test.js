// tests.js

import { getRandomNumber, isValidEmail, removeDuplicates, capitalizeWords } from '../src/index.js';

describe('getRandomNumber', () => {
  test('genera un número aleatorio en el rango correcto', () => {
    const randomNumber = getRandomNumber(1, 10);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
});


describe('isValidEmail', () => {
  test('valida correctamente las direcciones de correo electrónico', () => {
    expect(isValidEmail('correo@ejemplo.com')).toBe(true);
    expect(isValidEmail('correo@ejemplo')).toBe(false);
  });
});

describe('removeDuplicates', () => {
  test('elimina duplicados de un array', () => {
    const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
    const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
    expect(arrayWithoutDuplicates).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('capitalizeWords', () => {
  test('capitaliza la primera letra de cada palabra en un texto', () => {
    const capitalizedText = capitalizeWords('hola mundo');
    expect(capitalizedText).toBe('Hola Mundo');
  });
});
