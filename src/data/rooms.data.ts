/**
 * Centralized room data and amenity configurations
 */

import type { Room, AmenityType, AmenityIcon } from "@/types";

export const AMENITY_ICONS: Record<AmenityType, AmenityIcon> = {
  wifi: { icon: "lucide:wifi", label: "WiFi Gratis" },
  tv: { icon: "lucide:tv", label: "Smart TV" },
  shower: { icon: "lucide:shower-head", label: "Shower Hujan" },
  coffee: { icon: "lucide:coffee", label: "Pembuat Kopi" },
  minibar: { icon: "lucide:wine", label: "Mini Bar" },
  workspace: { icon: "lucide:laptop", label: "Ruang Kerja" },
  bathtub: { icon: "lucide:bath", label: "Bathtub" },
};

export const ROOMS: Room[] = [
  {
    id: 1,
    title: "Kamar Standard Twin",
    description:
      "Cocok untuk berbagi, dilengkapi dengan dua tempat tidur single yang nyaman",
    price: 199999,
    size: "28m²",
    occupancy: "2 Dewasa",
    beds: "2 Tempat Tidur Single",
    image: "/img/rooms/standard-twin.jpg",
    amenities: ["wifi", "tv", "shower", "coffee"],
    additionalImages: [
      "/img/rooms/detail-rooms-standard-twin1.jpg",
      "/img/rooms/detail-rooms-standard-twin2.jpg",
      "/img/rooms/detail-rooms-standard-twin3.jpg",
    ],
    features: [
      "Pembersihan harian",
      "AC",
      "Brankas dalam kamar",
      "Kulkas mini",
      "Meja & kursi",
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "24 jam sebelum kedatangan",
      children: "Hingga 1 anak di bawah 12 tahun menginap gratis",
      pets: "Tidak diperbolehkan",
    },
  },
  {
    id: 2,
    title: "Kamar Standard",
    description:
      "Kamar nyaman dengan tempat tidur queen-size dan fasilitas modern",
    price: 249999,
    size: "32m²",
    occupancy: "2 Dewasa",
    beds: "1 Tempat Tidur Queen",
    image: "/img/rooms/standard.jpg",
    amenities: ["wifi", "tv", "shower", "coffee", "minibar"],
    additionalImages: [
      "/img/rooms/standard-rooms-detail1.jpg",
      "/img/rooms/standard-rooms-detail2.jpg",
      "/img/rooms/standard-rooms-detail3.jpg",
    ],
    features: [
      "Pembersihan harian",
      "AC",
      "Brankas dalam kamar",
      "Kulkas mini",
      "Meja & kursi",
      "Kursi santai",
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "24 jam sebelum kedatangan",
      children: "Hingga 1 anak di bawah 12 tahun menginap gratis",
      pets: "Tidak diperbolehkan",
    },
  },
  {
    id: 3,
    title: "Kamar dengan Pemandangan Standard",
    description: "Pemandangan kota yang menakjubkan dengan furnitur mewah",
    price: 299999,
    size: "35m²",
    occupancy: "2 Dewasa, 1 Anak",
    beds: "1 Tempat Tidur King",
    image: "/img/rooms/standard-view-rooms.jpg",
    amenities: ["wifi", "tv", "shower", "coffee", "minibar", "workspace"],
    additionalImages: [
      "/img/rooms/standard-view-rooms-detail1.jpg",
      "/img/rooms/standard-view-rooms-detail2.jpg",
      "/img/rooms/standard-view-rooms-detail3.jpg",
    ],
    features: [
      "Pembersihan harian",
      "AC",
      "Brankas dalam kamar",
      "Kulkas mini",
      "Meja & kursi",
      "Area santai",
      "Pemandangan kota",
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "48 jam sebelum kedatangan",
      children: "Hingga 1 anak di bawah 12 tahun menginap gratis",
      pets: "Tidak diperbolehkan",
    },
  },
  {
    id: 4,
    title: "Kamar Deluxe",
    description: "Kemewahan luas dengan fasilitas dan layanan premium",
    price: 399999,
    size: "45m²",
    occupancy: "2 Dewasa, 2 Anak",
    beds: "1 Tempat Tidur King, 1 Sofa Bed",
    image: "/img/rooms/deluxe-rooms.jpg",
    amenities: [
      "wifi",
      "tv",
      "shower",
      "coffee",
      "minibar",
      "workspace",
      "bathtub",
    ],
    additionalImages: [
      "/img/rooms/deluxe-rooms-details.jpg",
      "/img/rooms/deluxe-rooms-details2.jpg",
      "/img/rooms/deluxe-rooms-details3.jpg",
    ],
    features: [
      "Pembersihan harian",
      "AC",
      "Brankas dalam kamar",
      "Kulkas mini",
      "Meja eksekutif",
      "Area santai",
      "Pemandangan premium",
      "Mesin Nespresso",
      "Perlengkapan mandi premium",
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "14:00",
      cancellation: "72 jam sebelum kedatangan",
      children: "Hingga 2 anak di bawah 12 tahun menginap gratis",
      pets: "Hewan kecil diperbolehkan (biaya tambahan)",
    },
  },
];

/**
 * Get room by ID
 * @param id - Room ID
 * @returns Room object or undefined
 */
export const getRoomById = (id: number): Room | undefined => {
  return ROOMS.find((room) => room.id === id);
};

