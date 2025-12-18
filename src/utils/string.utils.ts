/**
 * String manipulation utilities
 */

/**
 * Convert camelCase or PascalCase to Title Case with spaces
 * @param str - The string to convert
 * @returns Title case string with spaces
 * @example
 * formatCamelToTitle("checkIn") => "Check In"
 * formatCamelToTitle("cancellation") => "Cancellation"
 */
export const formatCamelToTitle = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Truncate a string to a specified length with ellipsis
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated string
 */
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};

