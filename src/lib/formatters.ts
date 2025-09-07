/**
 * @file Collection of data formatting functions.
 * @module lib/formatters
 */

/**
 * Formats a number as a currency string for Saudi Riyal (SAR).
 * @param {number} amount - The number to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formats a date string or Date object into a more readable format.
 * @param {string | Date} dateInput - The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateInput: string | Date): string => {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};