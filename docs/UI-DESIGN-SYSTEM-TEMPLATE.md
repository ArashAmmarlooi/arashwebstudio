# Arash Web Studio — UI Design System Template

Portable design tokens and UI patterns extracted from the Arash Web Studio website.
Use this file to recreate the same look in any app (React, Vue, mobile, Figma, etc.).

---

## 1. Design personality

- **Style:** Minimal, calm, professional studio aesthetic
- **Mood:** Warm cream backgrounds in light mode; deep forest green in dark mode
- **Shape language:** Soft rounded corners everywhere; pill buttons; large card radii
- **Density:** Generous whitespace, breathable layouts
- **Accent usage:** Teal/sage used sparingly for CTAs, eyebrows, highlights
- **Motion:** Smooth fade-up reveals, gentle hover lifts, no aggressive bounce

---

## 2. Color palette

### 2.1 Core brand colors

| Token        | Hex       | Usage                                      |
|-------------|-----------|---------------------------------------------|
| `teal`      | `#4f837b` | Primary buttons, links hover, selection     |
| `tealdeep`  | `#335f58` | Primary button hover, accent text (light)   |
| `sage`      | `#9caf88` | Accent text (dark mode), soft highlights    |
| `clay`      | `#d08c68` | Error/warning accents only                  |

### 2.2 Light mode surfaces & text

| Token      | Hex       | Usage                          |
|-----------|-----------|---------------------------------|
| `paper`   | `#f7f3ea` | Page background                 |
| `card`    | `#ffffff` | Cards, inputs, elevated panels  |
| `inktxt`  | `#22302c` | Primary text                    |

### 2.3 Dark mode surfaces & text

| Token       | Hex       | Usage                          |
|------------|-----------|---------------------------------|
| `night`    | `#131a17` | Page background                 |
| `nightcard`| `#1c2521` | Cards, inputs, elevated panels  |
| `creamtxt` | `#ece7db` | Primary text                    |

### 2.4 Illustration / graphic colors (for icons, shapes, charts)

Use these when building inline graphics, diagrams, or data viz — no image files needed.

| Token              | Hex       | Usage                              |
|-------------------|-----------|-------------------------------------|
| `illustration-bg` | `#1c2823` | Dark illustration panel background  |
| `illustration-bg2`| `#131a17` | Gradient end / deeper shadow        |
| `illustration-mid`| `#284a45` | Secondary shapes, device frames   |
| `illustration-teal`| `#4f837b`| Primary graphic accent              |
| `illustration-sage`| `#9bc4b9`| Lines, secondary fills (65–80% opacity) |
| `illustration-cream`| `#f4f1e8`| Light UI mockup surfaces inside art |
| `illustration-screen`| `#d8e2dc`| Screen gradient bottom              |

### 2.5 Semantic text opacities

Apply on top of `inktxt` (light) or `creamtxt` (dark):

| Role              | Light mode class | Dark mode class        |
|------------------|------------------|------------------------|
| Body secondary   | `inktxt / 60%`   | `creamtxt / 60%`       |
| Muted / caption  | `inktxt / 50%`   | `creamtxt / 50%`       |
| Label / eyebrow  | `inktxt / 40%`   | `creamtxt / 40%`       |
| Placeholder      | `inktxt / 35%`   | `creamtxt / 35%`       |

### 2.6 Border opacities

| Context        | Light              | Dark                |
|---------------|--------------------|---------------------|
| Default border| `inktxt / 10–15%`  | `white / 10–15%`    |
| Section divider| `inktxt / 10%`    | `white / 10%`       |
| Input border  | `inktxt / 15%`     | `white / 15%`       |
| Focus ring    | `teal` solid       | `teal` solid        |

### 2.7 State colors

| State   | Background        | Border           | Text              |
|--------|-------------------|------------------|-------------------|
| Success| `teal / 10%`      | `teal / 30%`     | `tealdeep` / `sage` |
| Error  | `clay / 10%`      | `clay / 40%`     | `clay`            |
| Active nav | `teal / 10%`  | —                | accent color      |

---

## 3. Typography

### 3.1 Font families

| Role    | Font           | Weights        | CSS variable      |
|--------|----------------|----------------|-------------------|
| Display| Space Grotesk  | 400–700        | `--font-display`  |
| Body   | Inter          | 400–600        | `--font-body`     |

**Google Fonts import:**
```
Space Grotesk: 400, 500, 600, 700
Inter: 400, 500, 600
```

### 3.2 Type scale

| Element        | Font     | Size (mobile → desktop) | Weight | Line height | Letter spacing   |
|---------------|----------|-------------------------|--------|-------------|------------------|
| Hero H1       | display  | 40px → 60px (`text-5xl sm:text-6xl`) | 700 | 1.05 | tight            |
| Section H2    | display  | 30px → 48px (`text-3xl sm:text-5xl`)   | 700 | tight | —                |
| Card H3       | display  | 20px (`text-xl`)        | 700    | —           | —                |
| Sub H3        | display  | 18px (`text-lg`)        | 700    | —           | —                |
| Body large    | body     | 18px (`text-lg`)        | 400    | relaxed     | —                |
| Body default  | body     | 16px (`text-base`)      | 400    | relaxed     | —                |
| Body small    | body     | 14px (`text-sm`)        | 400    | relaxed     | —                |
| Eyebrow       | body     | 14px (`text-sm`)        | 600    | —           | `0.2em` uppercase|
| Footer label  | body     | 12px (`text-xs`)        | 600    | —           | `widest` uppercase|
| Stat number   | display  | 48px → 60px             | 700    | —           | —                |

### 3.3 Accent text pattern

Highlight one phrase in headings using the accent color:
- Light mode: `tealdeep` (`#335f58`)
- Dark mode: `sage` (`#9caf88`)

---

## 4. Layout & spacing

### 4.1 Page container

```
max-width: 72rem (1152px)   → max-w-6xl
horizontal padding: 1.5rem   → px-6
```

### 4.2 Section spacing

| Pattern              | Classes                          |
|---------------------|----------------------------------|
| Hero top padding    | `pt-40 pb-24`                    |
| Standard section    | `py-24`                          |
| Compact section     | `py-16`                          |
| Section bottom CTA  | `pb-28`                          |
| Grid gap (cards)    | `gap-6` to `gap-10`              |
| Two-column gap      | `gap-14`                         |

### 4.3 Common grids

```
Hero:           lg:grid-cols-2, gap-14
Process steps:  md:grid-cols-4, gap-10
Services:       md:grid-cols-2 lg:grid-cols-3, gap-7
Contact:        lg:grid-cols-5 (2 + 3 split)
Footer:         md:grid-cols-3, gap-10
Stats:          sm:grid-cols-2 lg:grid-cols-4, gap-12
```

---

## 5. Border radius scale

| Token / usage          | Tailwind      | Pixel value |
|-----------------------|---------------|-------------|
| Pill / full button    | `rounded-full`| 9999px      |
| Small control         | `rounded-xl`  | 12px        |
| Input fields          | `rounded-2xl` | 16px        |
| Cards, panels, images | `rounded-3xl` | 24px        |
| Illustration inner    | `rx="20"`     | 20px (SVG)  |

**Rule:** Buttons are always pill-shaped. Cards and images use large 24px radius.

---

## 6. Shadows

| Usage              | Light mode                              | Dark mode                |
|-------------------|-----------------------------------------|--------------------------|
| Hero / feature img| `shadow-xl shadow-inktxt/10`            | `shadow-black/40`        |
| Process card      | `shadow-lg shadow-inktxt/10`            | `shadow-black/30`        |
| Process hover     | `shadow-xl shadow-teal/20`              | `shadow-teal/10`         |
| Nav scrolled      | none (uses backdrop blur + border)      | same                     |

---

## 7. Component recipes

### 7.1 Primary button (CTA)

```
Shape:     rounded-full
Background: teal (#4f837b)
Hover:     tealdeep (#335f58)
Text:      white, font-semibold
Padding:   px-7 py-3.5 (medium) OR px-8 py-4 (large)
Transition: colors only
Disabled:  opacity-60
```

**Tailwind:**
```
rounded-full bg-teal px-8 py-4 font-semibold text-white transition-colors hover:bg-tealdeep disabled:opacity-60
```

### 7.2 Secondary / ghost button

```
Shape:     rounded-full
Background: transparent
Border:    1px solid inktxt/15 (light) or white/15 (dark)
Hover:     bg-inktxt/5 (light) or bg-white/5 (dark)
Text:      font-semibold, inherits body color
Padding:   px-7 py-3.5
```

**Tailwind:**
```
rounded-full border border-inktxt/15 px-7 py-3.5 font-semibold transition-colors hover:bg-inktxt/5 dark:border-white/15 dark:hover:bg-white/5
```

### 7.3 Nav CTA (compact primary)

```
rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-tealdeep
```

### 7.4 Surface card

Reusable elevated panel that adapts to theme:

```
Background: card (light) / nightcard (dark)
Border:     1px inktxt/10 (light) / white/10 (dark)
Radius:     rounded-3xl
Padding:    p-8 (standard) or p-7 (compact)
```

**Tailwind utility class `.surface`:**
```css
.surface {
  background: #ffffff;
  border: 1px solid rgba(34, 48, 44, 0.10);
}
.dark .surface {
  background: #1c2521;
  border-color: rgba(255, 255, 255, 0.10);
}
```

### 7.5 Section band (stats, values)

```
border-y border-inktxt/10
bg-card/50
py-16 or py-24
dark:border-white/10 dark:bg-nightcard/40
```

### 7.6 Eyebrow label

Small uppercase label above section titles:

```
text-sm font-semibold uppercase tracking-[0.2em]
color: tealdeep (light) / sage (dark)
margin-bottom: mt-4 below eyebrow to heading
```

### 7.7 Text input / select / textarea

```
width:       100%
radius:      rounded-2xl
border:      1px inktxt/15 (light) or white/15 (dark)
background:  card (light) / nightcard (dark)
padding:     px-5 py-4
placeholder: inktxt/35 or creamtxt/35
focus:       border-teal (no heavy ring; use :focus-visible on page)
transition:  colors
```

### 7.8 Theme toggle button

```
size:        40×40px (h-10 w-10)
shape:       rounded-full
border:      inktxt/15 or white/15
hover:       bg-inktxt/5 or bg-white/10
```

### 7.9 Language select

```
shape:       rounded-full (desktop) or rounded-xl (mobile)
border:      inktxt/15 or white/15
background:  transparent
padding:     px-3 py-2 (desktop) / px-4 py-3 (mobile)
text:        text-sm
```

### 7.10 Mobile nav drawer

```
container:   .surface + rounded-2xl + p-3
item:        rounded-xl px-4 py-3 text-sm
active item: bg-teal/10 + accent text color
```

### 7.11 Alert — success

```
rounded-2xl
border: border-teal/30
background: bg-teal/10
text: text-tealdeep (light) / text-sage (dark)
padding: px-5 py-4
text-sm
```

### 7.12 Alert — error

```
rounded-2xl
border: border-clay/40
background: bg-clay/10
text: text-clay
padding: px-5 py-4
text-sm
```

---

## 8. Navigation

### 8.1 Header behavior

| State    | Background                          | Border                        | Padding |
|---------|--------------------------------------|-------------------------------|---------|
| Top     | transparent                          | none                          | py-5    |
| Scrolled| paper/90 + backdrop-blur (light)     | bottom border inktxt/10       | py-3    |
| Scrolled dark | night/90 + backdrop-blur     | bottom border white/10        | py-3    |

### 8.2 Nav link states

| State   | Color                                              |
|--------|-----------------------------------------------------|
| Default| inktxt/60 (light) or creamtxt/60 (dark)            |
| Hover  | full inktxt or creamtxt                            |
| Active | accent (tealdeep / sage)                           |

### 8.3 Logo / wordmark

```
font-display text-lg font-bold tracking-tight
First word in accent color, rest in default text color
```

---

## 9. Footer

```
border-top: inktxt/10 or white/10
padding: py-16
grid: 3 columns on md+
section labels: text-xs uppercase tracking-widest inktxt/40
links: text-sm inktxt/70, hover → tealdeep/sage
```

---

## 10. Focus & accessibility

```css
:focus-visible {
  outline: 2px solid #4f837b;
  outline-offset: 4px;
}

::selection {
  background: #4f837b;
  color: #ffffff;
}

.skip-link {
  position: fixed;
  top: 1rem;
  left: 1rem;
  transform: translateY(-150%);
  border-radius: 9999px;
  background: #4f837b;
  color: white;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
}
.skip-link:focus { transform: translateY(0); }
```

---

## 11. Scrollbar

```
width: 10px
track: paper (light) / #131a17 (dark)
thumb: #4f837b
thumb radius: 8px
```

---

## 12. Motion & animation

### 12.1 Easing

```
Primary ease: cubic-bezier(0.21, 0.65, 0.35, 1)
Simple ease:  ease-out
Float loop:   ease-in-out
```

### 12.2 Scroll reveal (fade up)

```
initial:  opacity 0, translateY 40px
animate:  opacity 1, translateY 0
duration: 0.8s
delay:    stagger 0.08s per item
trigger:  once when in viewport (-80px margin)
```

### 12.3 Hero entrance

```
eyebrow:  y 16→0,  0.6s
h1:       y 40→0,  0.8s, delay 0.15s
body:     y 24→0,  0.8s, delay 0.35s
buttons:  y 24→0,  0.8s, delay 0.5s
image:    scale 0.95→1, opacity 0→1, 0.9s, delay 0.3s
```

### 12.4 Hover micro-interactions

```
buttons:     color transition only
cards:       translateY -6px + scale 1.02 (optional)
images:      scale 1.03–1.04 over 500–700ms
nav links:   color transition
```

### 12.5 Reduced motion

Respect `prefers-reduced-motion: reduce` — disable scroll-behavior, shorten all transitions/animations to ~0.01ms.

---

## 13. Dark mode implementation

```
Strategy: class-based (.dark on <html>)
Storage:  localStorage key "theme" = "dark" | "light"
Fallback: prefers-color-scheme: dark if no saved preference
Body transition: colors 300ms
```

---

## 14. Copy-paste CSS variables

```css
:root {
  /* Surfaces */
  --color-paper: #f7f3ea;
  --color-card: #ffffff;
  --color-night: #131a17;
  --color-nightcard: #1c2521;

  /* Brand */
  --color-teal: #4f837b;
  --color-tealdeep: #335f58;
  --color-sage: #9caf88;
  --color-clay: #d08c68;

  /* Text */
  --color-inktxt: #22302c;
  --color-creamtxt: #ece7db;

  /* Illustration */
  --color-illustration-bg: #1c2823;
  --color-illustration-mid: #284a45;
  --color-illustration-sage: #9bc4b9;
  --color-illustration-cream: #f4f1e8;

  /* Radius */
  --radius-pill: 9999px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;

  /* Layout */
  --container-max: 72rem;
  --container-px: 1.5rem;

  /* Fonts */
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;

  /* Motion */
  --ease-primary: cubic-bezier(0.21, 0.65, 0.35, 1);
}
```

---

## 15. Copy-paste Tailwind config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#f7f3ea",
        card: "#ffffff",
        night: "#131a17",
        nightcard: "#1c2521",
        teal: "#4f837b",
        tealdeep: "#335f58",
        sage: "#9caf88",
        clay: "#d08c68",
        creamtxt: "#ece7db",
        inktxt: "#22302c",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
};
```

---

## 16. JSON design tokens (for any framework)

```json
{
  "colors": {
    "light": {
      "background": "#f7f3ea",
      "surface": "#ffffff",
      "textPrimary": "#22302c",
      "textSecondary": "rgba(34, 48, 44, 0.6)",
      "textMuted": "rgba(34, 48, 44, 0.4)",
      "border": "rgba(34, 48, 44, 0.1)"
    },
    "dark": {
      "background": "#131a17",
      "surface": "#1c2521",
      "textPrimary": "#ece7db",
      "textSecondary": "rgba(236, 231, 219, 0.6)",
      "textMuted": "rgba(236, 231, 219, 0.4)",
      "border": "rgba(255, 255, 255, 0.1)"
    },
    "brand": {
      "primary": "#4f837b",
      "primaryHover": "#335f58",
      "accentLight": "#335f58",
      "accentDark": "#9caf88",
      "error": "#d08c68"
    },
    "illustration": {
      "panel": "#1c2823",
      "shapeMid": "#284a45",
      "accent": "#4f837b",
      "accentSoft": "#9bc4b9",
      "highlight": "#f4f1e8"
    }
  },
  "typography": {
    "displayFont": "Space Grotesk",
    "bodyFont": "Inter",
    "heroSize": "clamp(2.5rem, 5vw, 3.75rem)",
    "sectionTitleSize": "clamp(1.875rem, 4vw, 3rem)",
    "eyebrowTracking": "0.2em"
  },
  "radius": {
    "pill": "9999px",
    "input": "16px",
    "card": "24px",
    "navMobile": "12px"
  },
  "spacing": {
    "containerMax": "1152px",
    "sectionY": "96px",
    "heroTop": "160px"
  },
  "shadow": {
    "card": "0 20px 25px -5px rgba(34, 48, 44, 0.1)",
    "cardDark": "0 20px 25px -5px rgba(0, 0, 0, 0.4)"
  },
  "motion": {
    "easePrimary": "cubic-bezier(0.21, 0.65, 0.35, 1)",
    "revealDuration": "0.8s",
    "revealDistance": "40px",
    "staggerDelay": "0.08s"
  }
}
```

---

## 17. Quick checklist for a new app

- [ ] Use cream `#f7f3ea` page background (light) or `#131a17` (dark)
- [ ] Space Grotesk for headings, Inter for body
- [ ] All primary actions = pill buttons in `#4f837b`
- [ ] Cards = white/dark surface + subtle border + `24px` radius
- [ ] Section eyebrows = uppercase, wide tracking, teal/sage accent
- [ ] Headings highlight one phrase in accent color
- [ ] Body text at 60% opacity for secondary content
- [ ] Inputs = `16px` radius, subtle border, teal focus border
- [ ] Max content width ~1152px with 24px side padding
- [ ] Smooth scroll reveal animations with stagger
- [ ] Class-based dark mode with localStorage persistence

---

*Generated from Arash Web Studio codebase — reusable UI template, no image assets required.*
