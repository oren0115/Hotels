/**
 * Theme constants for consistent styling across the application
 * Note: These colors are already defined in tailwind.config.js
 * Prefer using Tailwind classes like 'bg-gold', 'text-gold', 'bg-primary' etc.
 */

export const COLORS = {
  gold: "#D4AF37",        // Main gold color (use class: 'bg-gold' or 'text-gold')
  goldDark: "#B5942C",    // Dark gold (use class: 'bg-gold-dark')
  primary: "#D4AF37",     // Same as gold (use class: 'bg-primary')
} as const;

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const SPACING = {
  section: "px-4 md:px-6 lg:px-8",
  container: "container mx-auto",
} as const;

