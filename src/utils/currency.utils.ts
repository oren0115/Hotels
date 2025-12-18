/**
 * Currency formatting utilities
 */

import { CURRENCY_CONFIG } from "@/constants";

/**
 * Format a number as Indonesian Rupiah currency
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat(CURRENCY_CONFIG.locale, {
    style: "currency",
    currency: CURRENCY_CONFIG.currency,
  }).format(amount);
};

/**
 * Format a number as Indonesian Rupiah currency with abbreviated notation
 * @param amount - The amount to format
 * @returns Formatted currency string with abbreviation (e.g., "1,5JT")
 */
export const formatCurrencyShort = (amount: number): string => {
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(1)}JT`;
  }
  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(0)}RB`;
  }
  return formatCurrency(amount);
};

