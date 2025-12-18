/**
 * Centralized navigation data
 */

import type { MenuItem, FooterLinks, SocialLink } from "@/types";
import { ROUTES } from "@/constants";

export const MAIN_MENU_ITEMS: MenuItem[] = [
  { name: "Hotel Kami", path: ROUTES.HOME },
  { name: "Jelajahi", path: ROUTES.EXPLORE },
  { name: "Kamar & Tarif", path: ROUTES.ROOMS },
  { name: "Fasilitas", path: ROUTES.FACILITIES },
  { name: "Hubungi Kami", path: ROUTES.CONTACT },
];

export const FOOTER_LINKS: FooterLinks = {
  hotel: [
    { name: "Tentang Kami", href: ROUTES.ABOUT },
    { name: "Karir", href: ROUTES.CAREERS },
  ],
  rooms: [
    { name: "Kamar Standard Twin", href: ROUTES.ROOMS },
    { name: "Kamar Standard", href: ROUTES.ROOMS },
    { name: "Kamar dengan Pemandangan Standard", href: ROUTES.ROOMS },
    { name: "Kamar Deluxe", href: ROUTES.ROOMS },
  ],
  facilities: [
    { name: "Kolam Renang", href: ROUTES.FACILITIES },
    { name: "Restoran", href: ROUTES.FACILITIES },
    { name: "Spa & Wellness", href: ROUTES.FACILITIES },
    { name: "Ruang Konferensi", href: ROUTES.FACILITIES },
  ],
  support: [
    { name: "Pusat Bantuan", href: ROUTES.HELP },
    { name: "Syarat Layanan", href: ROUTES.TERMS },
    { name: "Kebijakan Privasi", href: ROUTES.PRIVACY },
    { name: "Hubungi Kami", href: ROUTES.CONTACT },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "lucide:facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "lucide:twitter", href: "https://twitter.com", label: "Twitter" },
  {
    icon: "lucide:instagram",
    href: "https://instagram.com",
    label: "Instagram",
  },
  { icon: "lucide:linkedin", href: "https://linkedin.com", label: "LinkedIn" },
];

