// lib/theme-colors.ts

/**
 * Defines the color palette for the application.
 * This serves as the single source of truth for color values, used by both
 * Tailwind CSS configuration and the global CSS variables.
 * Color values are defined in OKLCH format (lightness, chroma, hue).
 */
export const themeColors = {
  light: {
    background: "1 0 0",
    foreground: "0.141 0.005 285.823",
    card: "1 0 0",
    cardForeground: "0.141 0.005 285.823",
    popover: "1 0 0",
    popoverForeground: "0.141 0.005 285.823",
    primary: {
      DEFAULT: "0.3144 0.1033 255.33",
      foreground: "0.98 0.016 73.684",
    },
    secondary: {
      DEFAULT: "0.967 0.001 286.375",
      foreground: "0.21 0.006 285.885",
    },
    muted: {
      DEFAULT: "0.967 0.001 286.375",
      foreground: "0.552 0.016 285.938",
    },
    accent: {
      DEFAULT: "0.967 0.001 286.375",
      foreground: "0.21 0.006 285.885",
    },
    destructive: {
      DEFAULT: "0.577 0.245 27.325",
      foreground: "0.98 0.016 73.684", // Added based on common shadcn patterns
    },
    border: "0.92 0.004 286.32",
    input: "0.92 0.004 286.32",
    ring: "0.3144 0.1033 255.33", // Usually same as primary
    sidebar: {
      DEFAULT: "0.985 0 0",
      foreground: "0.141 0.005 285.823",
      primary: "0.3144 0.1033 255.33",
      primaryForeground: "0.98 0.016 73.684",
      accent: "0.967 0.001 286.375",
      accentForeground: "0.21 0.006 285.885",
      border: "0.92 0.004 286.32",
      ring: "0.3144 0.1033 255.33",
    },
  },
  dark: {
    background: "0.141 0.005 285.823",
    foreground: "0.985 0 0",
    card: "0.21 0.006 285.885",
    cardForeground: "0.985 0 0",
    popover: "0.21 0.006 285.885",
    popoverForeground: "0.985 0 0",
    primary: {
      DEFAULT: "0.3144 0.1033 255.33",
      foreground: "0.98 0.016 73.684",
    },
    secondary: {
      DEFAULT: "0.274 0.006 286.033",
      foreground: "0.985 0 0",
    },
    muted: {
      DEFAULT: "0.274 0.006 286.033",
      foreground: "0.705 0.015 286.067",
    },
    accent: {
      DEFAULT: "0.274 0.006 286.033",
      foreground: "0.985 0 0",
    },
    destructive: {
      DEFAULT: "0.704 0.191 22.216",
      foreground: "0.98 0.016 73.684",
    },
    border: "1 0 0 / 0.1",
    input: "1 0 0 / 0.15",
    ring: "0.3144 0.1033 255.33",
    sidebar: {
      DEFAULT: "0.21 0.006 285.885",
      foreground: "0.985 0 0",
      primary: "0.3144 0.1033 255.33",
      primaryForeground: "0.98 0.016 73.684",
      accent: "0.274 0.006 286.033",
      accentForeground: "0.985 0 0",
      border: "1 0 0 / 0.1",
      ring: "0.3144 0.1033 255.33",
    },
  },
};