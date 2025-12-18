/**
 * Centralized facilities data
 */

import type { Facility, FacilityDetail } from "@/types";
import { IMAGE_PATHS } from "@/constants";

export const FACILITIES: Facility[] = [
  { icon: "lucide:utensils", name: "Restoran" },
  { icon: "mdi:pool", name: "Kolam Renang" },
  { icon: "lucide:wifi", name: "WiFi Gratis" },
  { icon: "lucide:dumbbell", name: "Gym" },
  { icon: "lucide:car", name: "Parkir Gratis" },
];

export const FACILITY_DETAILS: FacilityDetail[] = [
  {
    id: 1,
    title: "Kolam Renang Mewah",
    description:
      "Kolam renang infinity dengan suhu terkontrol dan pemandangan kota yang menakjubkan. Buka setiap hari dari pukul 06.00 hingga 22.00.",
    icon: "lucide:pool",
    image: IMAGE_PATHS.facilities.pool,
    features: [
      "Suhu terkontrol",
      "Layanan handuk",
      "Bar kolam renang",
      "Tempat bersantai",
    ],
  },
  {
    id: 2,
    title: "Pusat Kebugaran Modern",
    description:
      "Peralatan mutakhir dan layanan pelatihan pribadi tersedia 24 jam.",
    icon: "lucide:dumbbell",
    image: IMAGE_PATHS.facilities.gym,
    features: [
      "Akses 24 jam",
      "Pelatih pribadi",
      "Peralatan modern",
      "Studio yoga",
    ],
  },
  {
    id: 3,
    title: "Restoran Gourmet",
    description:
      "Pengalaman bersantap mewah dengan hidangan internasional dan spesialisasi lokal.",
    icon: "lucide:utensils",
    image: IMAGE_PATHS.facilities.restaurant,
    features: [
      "Buffet sarapan",
      "Makan à la carte",
      "Ruang penyimpanan anggur",
      "Ruang makan pribadi",
    ],
  },
  {
    id: 4,
    title: "Pusat Bisnis",
    description: "Ruang rapat lengkap dan fasilitas konferensi profesional.",
    icon: "lucide:briefcase",
    image: IMAGE_PATHS.facilities.businessCenter,
    features: [
      "Ruang rapat",
      "Konferensi video",
      "WiFi kecepatan tinggi",
      "Layanan cetak",
    ],
  },
  {
    id: 5,
    title: "Spa & Kesehatan",
    description: "Relaksasi dan peremajaan dengan perawatan spa profesional.",
    icon: "lucide:flower",
    image: IMAGE_PATHS.facilities.spa,
    features: ["Terapi pijat", "Sauna", "Ruang uap", "Salon kecantikan"],
  },
];

