/**
 * Centralized careers data
 */

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    title: "Manajer Resepsionis",
    department: "Operasional",
    location: "Hotel Utama",
    type: "Penuh Waktu",
  },
  {
    title: "Koki",
    department: "Makanan & Minuman",
    location: "Hotel Utama",
    type: "Penuh Waktu",
  },
  {
    title: "Supervisor Housekeeping",
    department: "Housekeeping",
    location: "Hotel Utama",
    type: "Penuh Waktu",
  },
];

