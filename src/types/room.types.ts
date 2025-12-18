/**
 * Room-related TypeScript types
 */

export type AmenityType =
  | "wifi"
  | "tv"
  | "shower"
  | "coffee"
  | "minibar"
  | "workspace"
  | "bathtub";

export interface RoomPolicies {
  checkIn: string;
  checkOut: string;
  cancellation: string;
  children: string;
  pets: string;
}

export interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  size: string;
  occupancy: string;
  beds: string;
  image: string;
  amenities: AmenityType[];
  additionalImages: string[];
  features: string[];
  policies: RoomPolicies;
}

export interface AmenityIcon {
  icon: string;
  label: string;
}

