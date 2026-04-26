/**
 * Utility functions for Orion Alpha
 */

/**
 * Formats a number as Indonesian Rupiah (IDR)
 */
export const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Delays execution for a specified duration
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
