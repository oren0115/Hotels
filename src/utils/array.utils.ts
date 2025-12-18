/**
 * Array manipulation utilities
 */

/**
 * Sort an array of objects by a numeric property
 * @param array - The array to sort
 * @param key - The key to sort by
 * @param order - Sort order (asc or desc)
 * @returns Sorted array
 */
export const sortByNumber = <T>(
  array: T[],
  key: keyof T,
  order: "asc" | "desc" = "asc"
): T[] => {
  return [...array].sort((a, b) => {
    const aValue = Number(a[key]);
    const bValue = Number(b[key]);
    return order === "asc" ? aValue - bValue : bValue - aValue;
  });
};

/**
 * Parse and sort by string numbers (e.g., "28m²" -> 28)
 * @param array - The array to sort
 * @param key - The key to sort by
 * @param order - Sort order (asc or desc)
 * @returns Sorted array
 */
export const sortByParsedNumber = <T>(
  array: T[],
  key: keyof T,
  order: "asc" | "desc" = "asc"
): T[] => {
  return [...array].sort((a, b) => {
    const aValue = parseInt(String(a[key]));
    const bValue = parseInt(String(b[key]));
    return order === "asc" ? aValue - bValue : bValue - aValue;
  });
};

