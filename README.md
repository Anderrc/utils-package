# utils-package-ac

A versatile utility package offering a collection of helpful functions for common tasks. Simplify your JavaScript development with this easy-to-use package.

## Instalación

```bash
npm install utils-package-ac
```

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

## Available Functions

### `getRandomNumber(min, max)`

Generates a random number within the specified range.

### `formatDate(date)`

Formats a date in the "Month dd, yyyy" style.

### `isValidEmail(email)`

Validates if an email address is valid.

### `removeDuplicates(array)`

Removes duplicate elements from an array.

### `capitalizeWords(text)`

Capitalizes the first letter of each word in a text.

## Contribution

Contributions are welcome! If you find any issues or have suggestions to improve the package, please open an issue or send a pull request.

## License

This package is under the MIT License - see the [LICENSE](LICENSE) file for more details.
