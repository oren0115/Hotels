/**
 * Application route constants
 */

export const ROUTES = {
  HOME: "/",
  EXPLORE: "/explore",
  ROOMS: "/rooms",
  ROOM_DETAIL: (id: number | string) => `/rooms/${id}`,
  ROOM_RATES: (id: number | string) => `/rooms/${id}/rates`,
  ROOM_BOOK: (id: number | string, rateId: string) => `/rooms/${id}/book?rate=${rateId}`,
  FACILITIES: "/facilities",
  CONTACT: "/contact",
  ABOUT: "/about",
  CAREERS: "/careers",
  HELP: "/help",
  TERMS: "/terms",
  PRIVACY: "/privacy",
} as const;

