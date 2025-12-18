/**
 * Application configuration constants
 */

export const APP_CONFIG = {
  name: "Tangerang Hotels",
  tagline: "SELAMAT DATANG DI TANGERANG HOTELS",
  copyright: "©2025 Tangerang Hotels. Semua hak dilindungi.",
} as const;

export const CURRENCY_CONFIG = {
  locale: "id-ID",
  currency: "IDR",
} as const;

export const IMAGE_PATHS = {
  hero: "/img/hero-section.jpg",
  rooms: {
    standardTwin: "/img/rooms/standard-twin.jpg",
    standard: "/img/rooms/standard.jpg",
    standardView: "/img/rooms/standard-view-rooms.jpg",
    deluxe: "/img/rooms/deluxe-rooms.jpg",
  },
  facilities: {
    pool: "/img/fasility/swimming-pool.jpg",
    spa: "/img/fasility/spa.jpg",
    gym: "/img/fasility/gym.jpg",
    restaurant: "/img/fasility/geurmet-food.jpg",
    businessCenter: "/img/fasility/bussines-center.jpg",
  },
} as const;

