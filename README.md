# Nombre-de-tu-Paquete

[Descripción corta del paquete]

## Instalación

Code
npm install nombre-de-tu-paquete
CierreCode

## Uso

```bash
const { getRandomNumber, formatDate, isValidEmail, removeDuplicates, capitalizeWords } = require('nombre-de-tu-paquete');

// Ejemplos de uso
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);

const date = new Date();
const formattedDate = formatDate(date);
console.log(formattedDate);

const isValid = isValidEmail('correo@ejemplo.com');
console.log(isValid);

const arrayWithoutDuplicates = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(arrayWithoutDuplicates);

const capitalizedText = capitalizeWords('hola mundo');
console.log(capitalizedText);
```

## Funciones Disponibles

### `getRandomNumber(min, max)`

Genera un número aleatorio en el rango especificado.

### `formatDate(date)`

Formatea una fecha en el estilo "Mes dd, yyyy".

### `isValidEmail(email)`

Valida si una dirección de correo electrónico es válida.

### `removeDuplicates(array)`

Elimina elementos duplicados de un array.

### `capitalizeWords(text)`

Capitaliza la primera letra de cada palabra en un texto.

## Contribución

¡Contribuciones son bienvenidas! Si encuentras algún error o tienes sugerencias para mejorar el paquete, por favor, abre un problema o envía un pull request.

## Licencia

Este paquete está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
