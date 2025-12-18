/**
 * Navigation-related TypeScript types
 */

export interface MenuItem {
  name: string;
  path: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinks {
  hotel: FooterLink[];
  rooms: FooterLink[];
  facilities: FooterLink[];
  support: FooterLink[];
}

export interface SocialLink {
  icon: string;
  href: string;
  label?: string;
}

