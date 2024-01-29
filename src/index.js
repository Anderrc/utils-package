export const randomID = (text) => {
  return text + Math.random()
}

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date.toISOString()).toLocaleDateString('en-US', options);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const removeDuplicates = (array) => {
  return [...new Set(array)];
}

export const capitalizeWords = (text) => {
  return text.replace(/\b\w/g, char => char.toUpperCase());
}
