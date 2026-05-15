---
name: Venezuela Immersive Experience
colors:
  surface: '#f9f9ff'
  surface-dim: '#d9dadf'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f9'
  surface-container: '#ededf3'
  surface-container-high: '#e7e8ed'
  surface-container-highest: '#e1e2e8'
  on-surface: '#191c20'
  on-surface-variant: '#424750'
  inverse-surface: '#2e3035'
  inverse-on-surface: '#f0f0f6'
  outline: '#727781'
  outline-variant: '#c2c6d1'
  surface-tint: '#27609d'
  primary: '#003461'
  on-primary: '#ffffff'
  primary-container: '#004b87'
  on-primary-container: '#8abcff'
  inverse-primary: '#a3c9ff'
  secondary: '#046d40'
  on-secondary: '#ffffff'
  secondary-container: '#9af2ba'
  on-secondary-container: '#0e7144'
  tertiary: '#572500'
  on-tertiary: '#ffffff'
  tertiary-container: '#793701'
  on-tertiary-container: '#ffa46a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a3c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004882'
  secondary-fixed: '#9df5bd'
  secondary-fixed-dim: '#81d9a2'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#00522f'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68b'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#753400'
  background: '#f9f9ff'
  on-background: '#191c20'
  surface-variant: '#e1e2e8'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 44px
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
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style

The brand personality is **Exotic, Majestic, and Prestigious**. It positions Venezuela not just as a destination, but as a premium sensory journey. The design system prioritizes high-impact visual storytelling to evoke an emotional response of awe and discovery.

The visual style is a blend of **Minimalism** and **Glassmorphism**. We use expansive whitespace to let high-resolution nature photography breathe, while utilizing translucent "frosted" layers for UI overlays to maintain a sense of immersion. The aesthetic is "Tropical Premium"—avoiding clichéd tourist tropes in favor of a sophisticated, editorial look that mirrors high-end travel journals.

## Colors

The palette is anchored by **Deep Caribbean Blue** (Primary) and **Lush Jungle Green** (Secondary), representing the country's dual nature of coastline and rainforest.

- **Primary & Secondary:** Used for brand moments, primary navigation, and high-level section headers.
- **The Flag Accents:** Yellow, Blue, and Red are used sparingly as "cultural sparks"—functional accents for notifications, active states, or micro-interactions.
- **Backgrounds:** Content-heavy sections utilize a clean white for readability, while immersive "hero" or "storytelling" sections shift to a sophisticated dark navy/black to make imagery pop.

## Typography

This design system employs a high-contrast typographic pairing to balance tradition with modernity.

- **Headings:** **Playfair Display** provides an editorial, prestigious feel. Large-scale display sizes should use tighter letter-spacing to feel "locked" and authoritative.
- **Body:** **Plus Jakarta Sans** offers a friendly, contemporary rhythm that remains highly legible even against complex photographic backgrounds.
- **Labels:** **Manrope** is used for utility text and metadata, often in all-caps with generous tracking to provide a technical, organized contrast to the organic serif headers.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for core content to maintain an editorial "magazine" feel, while hero imagery and immersive galleries use full-bleed widths.

- **Desktop (1440px+):** 12-column grid, 1280px max-width container, 64px outer margins.
- **Tablet (768px - 1024px):** 8-column grid, 32px margins.
- **Mobile (up to 767px):** 4-column grid, 20px margins.

We emphasize vertical rhythm through wide whitespace (sections should be separated by 120px–160px on desktop) to prevent the vibrant content from feeling cluttered.

## Elevation & Depth

We utilize **Ambient Shadows** and **Glassmorphism** to create a sense of light and airiness.

1.  **Low Elevation:** Soft, extra-diffused shadows (e.g., `box-shadow: 0 10px 40px rgba(0,0,0,0.05)`) for cards to make them feel like they are floating just above the surface.
2.  **Immersive Overlays:** Use `backdrop-filter: blur(12px)` with a 60% opacity white or dark-blue fill for navigation bars and info-panels that sit atop photography.
3.  **Depth Tones:** On dark backgrounds, we use subtle tonal shifts (e.g., Navy to Darker Navy) rather than borders to define containers.

## Shapes

The shape language is **Rounded**, reflecting the organic curves of the Venezuelan landscape—from the tepuis of Canaima to the waves of Los Roques.

- Standard buttons and input fields use a `0.5rem` radius.
- Large image containers and feature cards use `1.5rem` (rounded-xl) to feel softer and more inviting.
- Decorative elements, such as "Explore" buttons or category badges, may use a pill-shape for distinctiveness.

## Components

- **Buttons:** Primary buttons use the Caribbean Blue with a subtle "shimmer" hover effect. Secondary buttons are ghost-style with a 1px border. All transitions should be `300ms ease-in-out`.
- **Cards:** Travel destination cards must feature a "zoom-on-hover" effect for the background image. Text should be overlaid using a bottom-to-top gradient scrim for legibility.
- **Input Fields:** Minimalist design with a bottom-only border that transforms into a full-focus state with a soft Caribbean Blue glow.
- **Icons:** Use thin-stroke (1.5pt) minimalist icons. Icons should be monochrome except for active states, where they can take on the Jungle Green or Venezuelan Red.
- **Navigation:** A transparent header that turns into a glassmorphic blurred bar upon scrolling.
- **Hero Parallax:** Every major landing page must feature a subtle parallax scroll on the main imagery to enhance the "Immersive" brand pillar.