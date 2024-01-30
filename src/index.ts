export const randomID = (text: string) => {
	return text + Math.random();
};

export const getRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};
	return new Date(date.toISOString()).toLocaleDateString('en-US', options);
};

export const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const removeDuplicates = (array: any[]) => {
	return [...new Set(array)];
};

export const capitalizeWords = (text: string) => {
	return text.replace(/\b\w/g, char => char.toUpperCase());
};
