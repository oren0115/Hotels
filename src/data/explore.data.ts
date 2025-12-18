/**
 * Centralized explore/search data
 */

export interface LocationOption {
  id: string;
  name: string;
  cities: string;
}

export const LOCATION_OPTIONS: LocationOption[] = [
  { id: "std", name: "Kamar Standard", cities: "Tangerang" },
  { id: "stdtwin", name: "Kamar Standard Twin", cities: "Tangerang" },
  {
    id: "stdview",
    name: "Kamar dengan Pemandangan Standard",
    cities: "Tangerang",
  },
];

/**
 * Get room title by location ID
 */
export const getRoomTitleByLocationId = (locationId: string): string => {
  const locationMap: Record<string, string> = {
    std: "Kamar Standard",
    stdtwin: "Kamar Standard Twin",
    stdview: "Kamar dengan Pemandangan Standard",
  };
  return locationMap[locationId] || "";
};

