---
name: Precision Engineering Portfolio
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  mono-spec:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit-2xs: 0.25rem
  unit-xs: 0.5rem
  unit-sm: 0.75rem
  unit-md: 1rem
  unit-lg: 1.5rem
  unit-xl: 2rem
  unit-2xl: 3rem
  unit-3xl: 4rem
  unit-4xl: 6rem
  unit-5xl: 8rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  max-content-width: 1200px
---

## Brand & Style

This design system embodies the intersection of disciplined hardware engineering and modern computational science. Rooted in Swiss typographic rigor and restrained Nordic minimalism, it communicates uncompromising technical precision, intellectual clarity, and academic authority.

The interface serves as an elevated, high-contrast gallery for complex engineering artifacts—FPGA designs, embedded systems schematics, algorithmic pipelines, and peer-reviewed research. Rather than relying on decorative UI tropes, visual authority is achieved through structural rhythm, strict asymmetric grids, calibrated hairline dividers, and meticulous typographic cadence. 

The emotional tone is calm, analytical, and authoritative. It evokes the tactile precision of laboratory test equipment, high-end architectural monographs, and industrial electronics documentation.

## Colors

The color architecture is built upon a deep, high-contrast dark foundation designed to reduce visual noise and present technical schemas with pristine clarity.

- **Foundational Surfaces**: The core canvas is anchor-dark `#090A0F`, paired with a secondary card surface `#12131A` and elevated modal/popover surface `#181920`. These neutral tones are cool, dense, and void of muddy brown or warm undertones.
- **Structural Lines**: Hairline structural grids and component boundaries use `#27272A` (muted zinc) for default borders and `#3F3F46` for interactive hover states.
- **Text Tiers**: Information hierarchy is strictly delineated. Primary headings and values are stark white `#FFFFFF`. Body copy and analytical descriptions use `#A1A1AA` (zinc-400). Metadata, hardware units, and secondary notes use `#71717A` (zinc-500).
- **Accents**:
  - **Precision Cobalt (`#2563EB` / `#3B82F6`)**: Applied sparingly to focus states, active tabs, schematic highlights, and primary interactive affordances. It evokes logic traces, high-speed signals, and computational focus.
  - **Hardware Emerald (`#10B981` / `#059669`)**: Reserved strictly for operational statuses, live telemetry indicators, successful hardware build states, and pinout logic signals.

## Typography

The typographic hierarchy juxtaposes the rational, neutral geometry of **Inter** against the mechanical exactitude of **JetBrains Mono**.

- **Display & Headlines**: Inter handles structural section titles and project headings. Heavy kerning adjustments (negative tracking down to `-0.03em`) create tight, architectural lockups reminiscent of modernist Swiss posters.
- **Body & Editorial**: Prose flows at comfortable, open line heights (`1.6x` to `1.65x`) to preserve effortless scanning through dense engineering publications, technical abstracts, and hardware methodologies.
- **Monospaced Data & Metadata**: JetBrains Mono is leveraged for all technical attribution, clock frequencies, architecture designations, commit hashes, thesis citations, and data tables. Monospaced elements are tracked slightly wider to guarantee legibility at small scale (`10px`–`11px`).
- **Punctuation & Symbols**: Engineering notations, mathematical symbols, and slash dividers (`//`, `::`, `->`) are intentionally set in JetBrains Mono to reinforce technical continuity.

## Layout & Spacing

The layout is governed by a responsive 12-column modular grid anchored to an 8px spatial interval, capped at a maximum width of `1200px` to maintain optimal typographic measure.

- **Desktop (1024px+)**: A 12-column grid utilizing `2rem` (32px) gutters and adaptive side margins. Large structural sections are divided by generous vertical intervals (`unit-4xl` to `unit-5xl`), giving each engineering domain standalone gravitas.
- **Tablet (768px – 1023px)**: An 8-column layout with `1.5rem` (24px) gutters. Complex two-column hardware specification cards collapse into unified single-column modules.
- **Mobile (< 768px)**: A 4-column layout with `1rem` (16px) margins and gutters. Vertical rhythm compresses to `unit-2xl` and `unit-3xl` between major sections to retain flow without feeling fragmented.
- **Hairline Dividers**: Section transitions do not rely on alternate surface blocks; they are articulated by continuous, 1px horizontal and vertical rules (`#27272A`), preserving an open, planar layout.

## Elevation & Depth

Elevation is achieved through tonal stratification and precise border definition rather than traditional heavy drop shadows. The design language prioritizes an authentic flat-planar aesthetic.

- **Surface Tiers**:
  - **Base Canvas**: `#090A0F` (Background floor).
  - **Embedded / Inset**: `#0C0D13` (Code blocks, schematic viewports, terminal boxes).
  - **Card / Grouping**: `#12131A` (Project containers, research paper abstracts).
  - **Overlay / Floating**: `#181920` (Dropdown menus, image lightboxes, modal sheets).
- **Hairline Outlines**: Every surface is bounded by a crisp 1px border (`#27272A`). Soft 1px inner highlights (`inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`) provide subtle physical dimensionality without skeuomorphic weight.
- **Ambient Lighting**: Floating overlays use an ultra-diffused, black-tinted shadow: `0 16px 32px -8px rgba(0, 0, 0, 0.6)`. Hovering interactive cards introduces a pinpoint cobalt glow: `0 0 0 1px #2563EB, 0 8px 24px -6px rgba(37, 99, 235, 0.15)`.

## Shapes

The shape system is strictly **Soft (`roundedness: 1`)**, balancing industrial precision with ergonomic usability. 

- **Base Radius**: Standard interactive elements, badges, input controls, and buttons utilize `4px` (`0.25rem`). This minimal curvature softens digital artifacts while retaining the disciplined, square-jawed appearance of electronic chassis hardware.
- **Containers**: Cards, code containers, and preview modals utilize `8px` (`0.5rem`).
- **Internal Anchors**: Circular geometry (`9999px`) is strictly restricted to functional status LEDs, oscilloscope probe points, and author avatar masks. Pill-shaped UI elements are intentionally omitted to avoid consumer SaaS aesthetics.

## Components

### Buttons
- **Primary**: Solid white (`#FFFFFF`) surface with high-contrast `#090A0F` text, `4px` radius, font weight 500. On hover, background shifts to `#E4E4E7` with an instant 100ms ease. Active state scales subtly down (`scale(0.99)`).
- **Secondary / Outlined**: Transparent surface, 1px `#27272A` border, `#E4E4E7` text. On hover: border changes to `#3F3F46`, background to `rgba(255, 255, 255, 0.03)`.
- **Ghost / Technical**: JetBrains Mono, 12px, zero background, `#A1A1AA` text paired with a monospace chevron (`->`). Hover transitions color to `#2563EB` and translates the icon +2px horizontally.

### Chips & Spec Badges
- **Specification Badges**: Surface `#12131A`, 1px border `#27272A`, text JetBrains Mono 11px uppercase (`#A1A1AA`), padding `2px 8px`, `4px` radius.
- **Status Chips**: Includes a 6px circular dot indicator. Green indicates verified hardware builds (`bg-emerald-500` with subtle pulse); blue indicates active research or ongoing prototype phase (`bg-blue-500`).

### Cards & Project Containers
- **Structural Card**: Surface `#12131A` framed with a 1px `#27272A` border. Top bar features a technical metadata header separated by a 1px border (e.g., `ARCH: RISC-V // PCB: 4-LAYER`).
- **Interaction**: On hover, the border seamlessly transitions from `#27272A` to `#3B82F6` (Cobalt) over 150ms, accompanied by a subtle upward shift of -2px.

### Code & Terminal Blocks
- Darker inset background (`#07080B`), 1px border `#27272A`. Top ribbon includes file path/module name in `label-caps` and a monospaced copy button. Code syntax highlighting is restrained: zinc comments, stark white declarations, cobalt operators, and emerald literals.

### Lists & Key-Value Matrices
- Engineered tables use alternating row gutters or hairline bottom dividers (`#1F2028`).
- Keys are aligned left in `body-sm` (`#71717A`), while values sit aligned right in `mono-spec` (`#FFFFFF`).

### Input Fields & Controls
- Surface `#0C0D13`, border 1px `#27272A`, placeholder `#52525B`. 
- Focus state: border snaps to `#2563EB` with an ambient glow (`box-shadow: 0 0 0 1px #2563EB`). No default browser ring. Checkboxes and radio buttons feature square 2px-corner geometry with razor-sharp vector checkmarks.