/**
 * Public Contract Specification: Bauhaus Monotheme Design Tokens
 * Module: Personal Portfolio AI (Design System Interface)
 * 
 * Enforces pure Bauhaus aesthetics: primary colors (red, blue, yellow),
 * stark high contrast black/white typography, geometric shapes,
 * zero layout bloat, and WCAG 2.1 AA accessibility ratios (>= 4.5:1).
 */

export interface BauhausColorPalette {
  primary: "#D02020";      // Bauhaus Signal Red (CTA, emphasis)
  secondary: "#1850B0";    // Bauhaus Ultramarine Blue (links, secondary structure)
  accent: "#F0C020";       // Bauhaus Cadmium Yellow (highlights, badges)
  background: "#F5F2EB";   // Unbleached Canvas Cream (light mode background)
  foreground: "#111111";   // Pitch Obsidian Black (headings, text)
  surface: "#FFFFFF";      // Pure White Card Surface
  border: "#111111";       // Bold 2px-3px Structural Borders
  mutedText: "#555555";    // Secondary text meeting WCAG AA >= 4.5:1
}

export interface BauhausTypographyTokens {
  display: "Space Grotesk, sans-serif";
  body: "IBM Plex Sans, sans-serif";
  mono: "JetBrains Mono, monospace";
  scale: {
    hero: "clamp(2.5rem, 5vw, 4.5rem)";
    h1: "clamp(2rem, 4vw, 3rem)";
    h2: "clamp(1.5rem, 3vw, 2.25rem)";
    h3: "1.25rem";
    bodyLarge: "1.125rem";
    body: "1rem";
    small: "0.875rem";
    caption: "0.75rem";
  };
}

export interface BauhausDesignSystemManifest {
  themeId: "bauhaus";
  version: "1.0.0";
  palette: BauhausColorPalette;
  typography: BauhausTypographyTokens;
  borders: {
    card: "2px solid #111111";
    heavy: "4px solid #111111";
    shadow: "4px 4px 0px #111111"; // Hard neo-brutalist / bauhaus drop shadow
  };
  accessibility: {
    wcagLevel: "WCAG 2.1 AA";
    minContrastRatio: 4.5;
    touchTargetMinPx: 48;
  };
}
