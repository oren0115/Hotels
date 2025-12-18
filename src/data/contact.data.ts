/**
 * Centralized contact data
 */

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link: string;
}

export interface ContactSubject {
  key: string;
  label: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "lucide:map-pin",
    title: "Alamat",
    content: "123 Tangerang Banten Indonesia",
    link: "https://maps.google.com",
  },
  {
    icon: "lucide:phone",
    title: "Telepon",
    content: "+62 8123456789",
    link: "tel:+62 8123456789",
  },
  {
    icon: "lucide:mail",
    title: "Email",
    content: "info@tangeranghotel.com",
    link: "mailto:info@tangeranghotel.com",
  },
];

export const CONTACT_SUBJECTS: ContactSubject[] = [
  { key: "general", label: "Pertanyaan Umum" },
  { key: "reservation", label: "Pertanyaan Reservasi" },
  { key: "feedback", label: "Masukan" },
  { key: "support", label: "Dukungan" },
];

