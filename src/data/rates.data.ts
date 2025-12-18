/**
 * Rate options data
 */

export interface RateCategory {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export const RATE_CATEGORIES: RateCategory[] = [
  {
    id: "standard",
    name: "Tarif Standard",
    price: 199999,
    description: "Kamar basic dengan fasilitas esensial.",
    features: ["WiFi Gratis", "TV", "AC", "Kamar Mandi Dalam"],
  },
  {
    id: "deluxe",
    name: "Tarif Deluxe",
    price: 299999,
    description: "Kenyamanan lebih dengan fasilitas premium.",
    features: [
      "WiFi Gratis",
      "Smart TV",
      "AC",
      "Kamar Mandi Dalam",
      "Mini Bar",
      "Layanan Kamar",
    ],
  },
  {
    id: "suite",
    name: "Tarif Suite",
    price: 499999,
    description: "Pengalaman menginap mewah dengan semua fasilitas lengkap.",
    features: [
      "WiFi Gratis",
      "Smart TV",
      "AC",
      "Kamar Mandi Dalam",
      "Mini Bar",
      "Layanan Kamar",
      "Jacuzzi",
      "City View",
    ],
  },
];

