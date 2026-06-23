---
name: Prestige Consultant System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#0b0b09'
  on-tertiary: '#ffffff'
  tertiary-container: '#21221f'
  on-tertiary-container: '#8a8985'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  quote:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style
The design system is engineered to signal academic authority, exclusivity, and bespoke excellence. It moves away from the approachable "neighborhood tutor" aesthetic toward a "bespoke corporate consultancy" identity. The visual language is **Architectural Minimalism**: a high-contrast, structured environment that utilizes generous whitespace to convey focus and intellectual clarity.

The target audience comprises high-net-worth parents and elite students aiming for the top 5% of global institutions. The emotional response should be one of profound trust, quiet confidence, and the sense of entering an inner circle of academic achievement. Every layout should feel like a curated gallery or a premium law firm—stately, intentional, and uncluttered.

## Colors
The palette is rooted in tradition and prestige.
- **Deep Navy Blue (#002147):** The foundation of the system. Used for primary backgrounds, typography, and structural elements to represent stability and institutional depth.
- **Metallic Gold (#D4AF37):** Used sparingly as a "hallmark" or seal of quality. It highlights calls to action, underlines key metrics, and provides an editorial flair.
- **Academic Parchment (#F9F7F2):** A warm, off-white neutral used for background surfaces to prevent the "digital coldness" of pure white, providing a tactile, paper-like quality.
- **Ink Black (#1A1A1A):** Reserved for body text on light backgrounds to ensure maximum legibility and high contrast.

## Typography
The typography pairing establishes a hierarchy between "Heritage" and "Precision." 
- **Playfair Display** is used for all headlines and display text. Its high-contrast strokes evoke the editorial authority of high-end journals and historic universities. Use it for impactful statements and section titles.
- **Inter** provides a modern, neutral counterbalance. Its utilitarian clarity is perfect for long-form consultancy reports, curriculum details, and interface labels.
- **Text Alignment:** Center-align display headings for a formal "pillar" feel; left-align all body copy for professional readability. 
- **Letter Spacing:** Increase spacing for uppercase labels to create an "airy" luxury feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy to maintain a sense of rigid, architectural order. 
- **The Pillar Grid:** Use a 12-column grid for desktop. Elements should often "breathe" by occupying central columns (e.g., a 6-column text block centered within the 12-column grid), leaving wide margins to represent exclusivity.
- **Section Rhythm:** Large vertical gaps (120px+) between sections are mandatory to prevent visual clutter and allow the user to focus on one "lesson" or "value prop" at a time.
- **Mobile Reflow:** On mobile, margins reduce to 24px, and all multi-column layouts stack vertically. Typography scales down specifically for the `display` and `headline-lg` roles to maintain balance.

## Elevation & Depth
This design system avoids heavy shadows and skeuomorphism in favor of **Tonal Layering** and **Fine Outlines**.
- **The "Gold Thread":** Depth is created using 1px solid borders in Gold (#D4AF37) or subtle Deep Navy.
- **Surface Hierarchy:** 
  - Level 0: Academic Parchment (Base)
  - Level 1: Pure White (Cards/Containers)
  - Level 2: Deep Navy (Overlays/High-impact callouts)
- **Shadows:** Use only one "Architectural Shadow" for floating modals: a very sharp, low-opacity Deep Navy shadow (e.g., `0px 20px 40px rgba(0, 33, 71, 0.08)`). It should feel like a soft glow rather than a physical drop shadow.

## Shapes
The shape language is **Sharp (0)**. 
Rounded corners are perceived as friendly and casual; sharp corners are perceived as precise, professional, and institutional. All buttons, containers, input fields, and images must use 90-degree angles. This reinforces the architectural "pillar" metaphor and aligns with high-end consultancy branding.

## Components
- **Buttons:** Sharp-edged. Primary buttons are Deep Navy with White text or Gold with Deep Navy text. Use a "Ghost" style with a 1px Gold border for secondary actions.
- **Cards:** White background with a 1px Navy or Gold top-border. This "hairline" detail acts as a visual anchor, suggesting a premium folio.
- **Input Fields:** Minimalist. Only a bottom-border (1px Navy) that turns Gold on focus. Labels use the `label-caps` typography style.
- **Chips/Badges:** Small, rectangular, Deep Navy background with Gold text. Used for status or "Elite" tags.
- **Lists:** Use custom Gold-colored "dash" icons instead of standard bullets to maintain a sophisticated editorial look.
- **Hero Sections:** Large whitespace, centered Playfair Display text, and high-quality, desaturated photography of architectural details (columns, libraries, clean office spaces).