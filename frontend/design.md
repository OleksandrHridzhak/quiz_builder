---
version: alpha
name: "Pitch"
website: "https://pitch.com"
description: >-
  A collaborative-presentation tool from the Wunderlist founders whose marketing site gives a single saturated indigo-purple (#6b53ff) the entire above-fold canvas, with an 80px Mark Pro display headline ("Don't just present. Pitch.") in white at weight 800 with -1.6px tracking, and a small mustard-yellow secondary chip (#ffd02c) as the only competing voltage. Below the fold the canvas inverts to white, the brand purple recedes to a single CTA fill, and a charcoal ink (#2b2a35) carries every body and section heading. Mark Pro handles every display tier at weight 800; Eina01 — a geometric humanist sans from Schick Toikka — carries every body, button, and nav label. The pairing is the design move: a heavy editorial display family above and a warm geometric body sans below, with no third typeface in the system.

seo:
  title: "Pitch Design System for React — indigo-purple #6b53ff, Mark Pro + Eina01, 14 components"
  metaDescription: "Pitch's marketing site as a DESIGN.md file. A saturated indigo-purple hero canvas, 80px Mark Pro 800 display, mustard-yellow secondary accent, Eina01 humanist body. Tokens for React, Next.js, and AI tools."
  highlights:
    - "Indigo-purple as canvas — #6b53ff fills the entire above-fold hero, the inverse of the dev-tool convention that holds the brand color for accents"
    - "80px Mark Pro 800 display — the heaviest display moment in the directory, paired with -1.6px tight tracking on the hero h1"
    - "Mark Pro + Eina01 pairing — a heavy editorial sans for every display and a geometric humanist sans for every body label, no third family in the system"
    - "Mustard-yellow secondary voltage — #ffd02c appears as a single chip-fill accent below the fold, the only color allowed to compete with the brand purple"
    - "Small-step radius scale — 3px on inputs (25 occurrences), 6px on cards (17), 8px on buttons (14), no middle tier between 8px and 50% circles"
  tags:
    - "Productivity & SaaS"
    - "Design & Creative Tools"
  lastUpdated: "2026-05-19"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Pitch's marketing site does what almost no productivity SaaS brand does at this saturation: it gives the brand voltage the entire above-fold canvas. The hero is a flat block of indigo-purple — bright, warm, halfway between violet and ultramarine — with an 80px Mark Pro display headline ("Don't just present. Pitch.") in white at weight 800, tightly tracked at -1.6px, and a single white CTA button beneath. Where Notion holds its near-black ink on cream and Figma keeps its hero on white, Pitch paints the page in the brand color and trusts a four-word editorial sentence to do the work. The display weight is 800 — not 500 like Cloudflare or 400 like Linear — and the page reads as confident, almost magazine-cover loud.

    The DESIGN.md file packages the system into a machine-readable spec for React tooling. Inside: 10 color tokens covering the indigo-purple voltage, a secondary brand purple (`#8d49f7`), a mustard-yellow secondary accent (`#ffd02c`), a charcoal ink tier, and the standard white / gray structural scale. Eleven typography tokens span Mark Pro at 27-80px in weight 800 with negative letter-spacing across every display tier, and Eina01 at 14-18px in weights 400-700 for body, button, nav, and metadata. Eight radius tokens centered on 6-8px with circular avatars at 50%; eight spacing tokens; and 14 component definitions covering the purple hero, the slide-preview hero card, the editorial section heads, and the yellow-chip "How Pitch works" callout.

    Feed this file to Claude or Cursor and the agent will reproduce Pitch's specific moves: single saturated purple hero canvas, 80px display weight 800 with tight negative tracking, Mark Pro + Eina01 pairing, mustard-yellow as the one allowed competing voltage, and small-step rounding everywhere except the avatar circles. The one move worth borrowing only if you have a brand color this saturated is the full-bleed hero canvas — most teams will need to dilute the voltage to a tinted gradient or a held-in-reserve CTA fill.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://pitch.com"
      title: "Pitch — official site"
      description: "Pitch's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is Pitch's primary brand color?"
      answer: "Pitch's brand voltage is an indigo-purple wired into the site as the dominant brand color. It carries 202 total occurrences across the captured page — 91 as text, 88 as border, 4 as background, plus 19 inside gradients. The above-fold hero uses it as a full-canvas fill; below the fold it recedes to the primary CTA pill, the active state on the secondary nav, and inline link color. A deeper secondary purple appears 37 times as gradient stops on the slide-preview thumbnails. The brand voltage is singular — everything else in the system is structural charcoal or white."
    - id: "typography"
      title: "What typefaces does Pitch use, and what are the open-source substitutes?"
      answer: "Pitch runs two families on the marketing surface. Mark Pro — a heavy editorial sans by FontFont — carries every display tier from 27px through 80px at weight 800, always with negative letter-spacing (-1.6px on the 80px hero, -0.84px on 42px section heads). Eina01 — a geometric humanist sans by Schick Toikka — handles every body paragraph, button label, nav link, and metadata caption at 14-18px in weights 400-700. The closest free substitutes are Inter Display at weight 800 for Mark Pro and Manrope or DM Sans at 400-700 for Eina01. The pairing — heavy editorial display + warm geometric body — is the typographic move worth preserving."
    - id: "yellow-accent"
      title: "Why is there a yellow chip on a purple-and-white site?"
      answer: "The mustard yellow #ffd02c carries exactly 10 occurrences in the captured page — 5 as background, 4 as border, 1 inside a gradient. It appears almost exclusively as the fill of a single inline chip ('Get a head start with free templates' callout) and as the rim of a small accent button below the fold. Yellow is the one secondary voltage allowed to compete with the brand purple, but it is rationed — every other warm accent on the page belongs to the slide-preview thumbnails or to a template screenshot. Treating yellow as a scarce second voltage is the discipline that keeps the system feeling like a deck with one bright sticker rather than a multi-color landing page."
    - id: "display-weight"
      title: "Why does Pitch run display headlines at weight 800?"
      answer: "Every captured display occurrence sits at weight 800 — the hero h1 at 80px / 800 / -1.6px tracking, the section h2 at 42px / 800 / -0.84px, the 28px sub-display at 800 / -0.28px, and even the 13px small-cap label at weight 700 with 1.3px positive tracking. The system has no weight-500 or weight-700 display tier. The result is a heavier, more confident editorial feel than the dev-infra convention of weight 400-500 display; combined with the negative letter-spacing it reads closer to a magazine cover or a deck-template thumbnail than to a SaaS landing page."
    - id: "rounded-style"
      title: "What corner-radius scale does Pitch use?"
      answer: "The radius scale is small-step. The dominant value is 3px (25 captured occurrences) used on inputs and small chips. Cards and dropdowns use 6px (17 occurrences); buttons use 8px (14 occurrences); larger surface blocks use 20px (10 occurrences); avatar circles use 50% (8 occurrences); featured-card thumbnails use 26px (5 occurrences); the largest illustration tiles use 56px on a single oversized component. There is no 4px tier and no 16px tier — the scale jumps from 8px to 20px and from 20px to 50% with no middle steps."

mockups:
  - "marketing-hero"
  - "dashboard-card-grid"

colors:
  primary: "#6b53ff"
  primary-deep: "#8d49f7"
  yellow: "#ffd02c"
  ink: "#2b2a35"
  ink-deep: "#1e1d28"
  ink-soft: "#3f4250"
  muted: "#6f7387"
  canvas: "#ffffff"
  hairline: "#dddfe5"
  shadow: "#000000"

typography:
  display-xl:
    fontFamily: "\"Mark Pro\", sans-serif"
    fontSize: 80px
    fontWeight: 800
    lineHeight: 104px
    letterSpacing: "-1.6px"
  display-lg:
    fontFamily: "\"Mark Pro\", sans-serif"
    fontSize: 60px
    fontWeight: 800
    lineHeight: 60px
    letterSpacing: "-1.2px"
  display-md:
    fontFamily: "\"Mark Pro\", sans-serif"
    fontSize: 42px
    fontWeight: 800
    lineHeight: 58.8px
    letterSpacing: "-0.84px"
  display-sm:
    fontFamily: "\"Mark Pro\", sans-serif"
    fontSize: 28px
    fontWeight: 800
    lineHeight: 30.8px
    letterSpacing: "-0.28px"
  heading-md:
    fontFamily: "\"Mark Pro\", sans-serif"
    fontSize: 27px
    fontWeight: 800
    lineHeight: 37.8px
    letterSpacing: "-0.54px"
  label-caps:
    fontFamily: "\"Mark Pro\", sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 24.05px
    letterSpacing: "1.3px"
  body-lg:
    fontFamily: "Eina01, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0
  body-md:
    fontFamily: "Eina01, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0
  body-bold:
    fontFamily: "Eina01, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 0
  button-md:
    fontFamily: "Eina01, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: "1.4px"
  nav-link:
    fontFamily: "Eina01, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22.4px
    letterSpacing: 0

rounded:
  none: "0px"
  xs: "3px"
  sm: "6px"
  md: "8px"
  lg: "20px"
  xl: "26px"
  pill: "56px"
  full: "9999px"

spacing:
  xs: "6px"
  sm: "15px"
  base: "20px"
  md: "24px"
  lg: "40px"
  xl: "48px"
  2xl: "90px"
  3xl: "120px"

components:
  hero-section:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "120px 40px"
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  sub-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
  caps-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-caps}"
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "15px 24px"
    height: "48px"
  button-primary-purple:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "15px 24px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "15px 24px"
    height: "48px"
    borderColor: "{colors.canvas}"
  top-nav:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "20px 40px"
    height: "64px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.nav-link}"
    padding: "6px 12px"
  yellow-chip:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  preview-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: "0"
    borderColor: "{colors.hairline}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
    height: "40px"
    borderColor: "{colors.hairline}"
---

## Overview

Pitch's marketing site does what almost no productivity SaaS brand attempts at this saturation. **Voltage as canvas.** The above-fold hero is a flat block of indigo-purple (`{colors.primary}` — #6b53ff) with an 80px Mark Pro display headline ("Don't just present. Pitch.") in white at weight 800, tightly tracked at -1.6px, and a single white pill CTA beneath. Where Notion holds its near-black ink on cream and Figma keeps its hero on plain white, Pitch paints the page in the brand color and trusts a four-word editorial sentence to do the work. The figure-ground reads inverted compared to every peer in the productivity rail — `Beautiful.ai`, Canva, Gamma — each of which holds its brand color in reserve for a CTA accent against a neutral hero.

The typographic discipline reinforces the move. Mark Pro carries every display tier at weight 800 — 80px on the hero, 42px on section h2s, 28px on the sub-display blocks. There is no weight-500 or weight-700 display tier; the editorial heaviness is the brand voice. Each display step pairs the weight with negative letter-spacing — -1.6px on 80px, -1.2px on 60px, -0.84px on 42px — so the page reads closer to a magazine cover or a deck-template thumbnail than to a typical SaaS landing page. Eina01 — a geometric humanist sans — handles every body paragraph, button label, and nav link at 14-18px in weights 400-700. Together the two families divide labor cleanly: Mark Pro speaks loud, Eina01 speaks soft.

The single competing voltage is mustard yellow (`{colors.yellow}` — #ffd02c). It carries 10 occurrences across the captured page — almost all of them confined to a single chip-fill callout ("Get a head start with free templates") and a rim accent on a button below the fold. The system rations the yellow ruthlessly; treating it as a scarce second voltage is the discipline that keeps the page feeling like a deck with one bright sticker rather than a five-color marketing site.

**Key Characteristics:**
- Indigo-purple (`{colors.primary}` — #6b53ff) fills the entire above-fold hero as a flat canvas — 202 total captured occurrences across text, border, background, and gradient roles.
- 80px Mark Pro at weight 800 with -1.6px tracking on the hero h1 — the heaviest display moment in the directory and the loudest typographic surface in the system.
- Mark Pro + Eina01 pairing — heavy editorial sans for every display tier, geometric humanist sans for every body, button, and nav surface. No third typeface in the system.
- Mustard yellow (`{colors.yellow}` — #ffd02c) as the single secondary voltage, scoped to the inline-chip "templates" callout and one button rim accent below the fold.
- Charcoal ink across all below-fold text — `{colors.ink}` (#2b2a35) carries 610 captured occurrences, the dominant ink tone for body paragraphs and section heads on the white canvas.
- Small-step radius scale — 3px on inputs (25 occurrences), 6px on cards (17), 8px on buttons (14), 50% on avatars (8). No middle 12-16px tier.
- 20px and 24px base spacing — the page rhythm uses these two values almost exclusively for module gaps and card padding.
- Hairline borders only — `{colors.hairline}` (#dddfe5) carries every card edge below the fold, no shadow tier above 1px halo.

## Colors

### Brand

- **Indigo Purple** (`{colors.primary}` — #6b53ff): frequency 202. Used as text (91), border (88), background (4), gradient (19). The single brand voltage — fills the entire hero canvas, the top-nav surface, the bottom-of-page CTA panel, the primary purple-fill button below the fold, and inline link color across body copy. The dominant chromatic move in the system.
- **Primary Deep** (`{colors.primary-deep}` — #8d49f7): frequency 37. Used 23 inside gradients, 7 as border, 6 as text, 1 as background. The deeper secondary purple — used as a gradient stop on the slide-preview thumbnail cards and as a hover-state purple on inline links.
- **Yellow** (`{colors.yellow}` — #ffd02c): frequency 10. Used 5 as background, 4 as border, 1 as gradient. The single secondary voltage — almost entirely confined to the "free templates" chip callout and a small accent button below the fold. Rationed deliberately.

### Text

- **Ink** (`{colors.ink}` — #2b2a35): frequency 610 — 305 as text, 300 as border. The dominant charcoal ink across the entire below-fold canvas. Body paragraphs, section h2s rendered on white, nav labels, and the default border tone for hairline-edged surfaces. Never pure black.
- **Ink Deep** (`{colors.ink-deep}` — #1e1d28): frequency 85 — 45 as text, 40 as border. A slightly darker variant used inside the slide-preview thumbnail rendering and for inline strong-emphasis spans.
- **Ink Soft** (`{colors.ink-soft}` — #3f4250): frequency 6. A secondary running-text tone — used inside the customer-quote testimonials and figure captions.
- **Muted** (`{colors.muted}` — #6f7387): frequency 10. Tertiary text — secondary paragraph lines, footer category labels, "Learn more" links.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): frequency 214 — 89 as text (white text on the purple hero), 18 as background, 85 as border, 22 inside gradients. The off-purple surface — carries the hero display text, the primary CTA fill on the purple hero, and the entire below-fold page floor.
- **Hairline** (`{colors.hairline}` — #dddfe5): frequency 8. The 1px outline tone for cards and inputs below the fold. There is essentially no second hairline tone in the system.

### Shadow

- **Shadow** (`{colors.shadow}` — #000000): frequency 33, 25 as shadow ink, 4 each as text and border. Pure black is used exclusively for soft 1px halos under cards and for the slide-preview thumbnail outlines.

## Typography

### Font Families

The system runs two families on the captured marketing surface. **Mark Pro** — a heavy editorial sans by FontFont — carries every display tier from 13px (small-caps label) through 80px (hero h1) at weight 700-800, always with letter-spacing adjustments. **Eina01** — a geometric humanist sans by Schick Toikka — handles every body paragraph, button label, nav link, and metadata caption at 14-18px in weights 400-700. There is no third family in the system; even monospace code does not appear on the captured marketing pages.

The pairing — heavy editorial display + warm geometric body — is the distinctive typographic move. Where Cloudflare runs sans display + monospace metadata and Stripe runs a single sans across every tier at weight 300-400, Pitch pairs two distinct sans voices and divides display from body across the family boundary.

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display-xl}` | Mark Pro | 80px | 800 | 104px | -1.6px | Hero h1 ("Don't just present. Pitch.") |
| `{typography.display-lg}` | Mark Pro | 60px | 800 | 60px | -1.2px | Section h2-h3 on the below-fold "How Pitch works" |
| `{typography.display-md}` | Mark Pro | 42px | 800 | 58.8px | -0.84px | Section h2 ("Trusted by 3M+ teams worldwide") |
| `{typography.display-sm}` | Mark Pro | 28px | 800 | 30.8px | -0.28px | Sub-display block headings |
| `{typography.heading-md}` | Mark Pro | 27px | 800 | 37.8px | -0.54px | Card titles inside the feature grid |
| `{typography.label-caps}` | Mark Pro | 13px | 700 | 24.05px | 1.3px | Small-caps eyebrow labels above section heads |
| `{typography.body-lg}` | Eina01 | 18px | 400 | 36px | 0 | Default body paragraph below the fold |
| `{typography.body-md}` | Eina01 | 16px | 400 | 32px | 0 | Secondary body, list items |
| `{typography.body-bold}` | Eina01 | 18px | 700 | 36px | 0 | Inline strong-emphasis spans inside body |
| `{typography.button-md}` | Eina01 | 14px | 700 | 20px | 1.4px | Primary and secondary button labels — uppercase tracked |
| `{typography.nav-link}` | Eina01 | 16px | 400 | 22.4px | 0 | Top-nav link labels on the purple hero |

### Principles

Display weight stays at 800 across every tier; the system has no weight-500 or weight-700 display variant. The negative letter-spacing modifier scales with the size — -1.6px at 80px, -1.2px at 60px, -0.84px at 42px, -0.54px at 27px, -0.28px at 28px — so every Mark Pro display surface carries a tighter optical fit than the default tracking would give. Eina01 by contrast uses no negative tracking on body, only positive 1.3-1.4px tracking on the two uppercase tiers (label-caps and button-md).

The two families divide labor without overlap: every Mark Pro surface is a display tier or an uppercase eyebrow label; every Eina01 surface is body, button, nav, or paragraph emphasis. There is no shared mid-range size where both families compete.

### Note on Font Substitutes

Mark Pro is a licensed editorial sans. The closest free open-source substitute is **Inter Display** at weight 800 — comparable cap height, similar tightness in the negative-tracked display tiers. **General Sans** at weight 700 is also close in feel but is not freely licensed for commercial use. For Eina01, the closest free substitutes are **Manrope** at weights 400-700 or **DM Sans** at the same weights — both share Eina01's geometric humanist character and translate cleanly to the same point sizes.

## Layout

### Spacing System

- **Base unit:** 4px implicit, with 20px and 24px as the dominant module values (29 and 27 captured occurrences respectively).
- **Tokens:** `{spacing.xs}` 6px · `{spacing.sm}` 15px · `{spacing.base}` 20px · `{spacing.md}` 24px · `{spacing.lg}` 40px · `{spacing.xl}` 48px · `{spacing.2xl}` 90px · `{spacing.3xl}` 120px.
- **Section padding (vertical):** ~120px on the purple hero band; below the fold the rhythm tightens to ~90px between major sections.
- **Card internal padding:** `{spacing.md}` (24px) on the standard preview cards; the slide-preview hero card sits at `{spacing.lg}` (40px) horizontal.
- **Top-nav padding:** `{spacing.base}` (20px) vertical, `{spacing.lg}` (40px) horizontal.

### Grid & Container

- **Max content width:** ~1122px on the hero and ~640px on the hero sub-paragraph block (the lead paragraph is deliberately narrower than the headline).
- **Hero block:** full-bleed purple canvas with the headline + sub-paragraph + CTA stack centered, the embedded slide-preview thumbnail rendered as a 3-up card row directly beneath.
- **Below-fold sections:** centered displays at ~1122px, with 3-up template thumbnail grids and a 6-up customer-logo strip.
- **Template preview row:** 3-column grid showing a "Sketch," "Bikes," and "Quarterly" template thumbnail — each in a soft drop-shadow card with rounded corners.

### Rhythm

The page alternates between **purple bands and white bands** rather than holding a single tempo. The hero is purple. The "Trusted by 3M+ teams" band returns to white. The "Get a head start with free templates" band returns to purple. The "How Pitch works" band is white. This call-and-response between the brand voltage and the neutral canvas is the page's structural device — bands either carry the voltage or sit on the canvas, never sit on a tinted-purple in-between.

## Elevation

The system has a **light shadow tier** centered on soft 1px halos and drop shadows for the slide-preview thumbnails.

- **Flat (no shadow):** hero text, body paragraphs, nav, footer — every typographic surface.
- **Card halo:** the slide-preview hero card sits with a soft 0-8-32 `rgba(0,0,0,0.04)` shadow against the purple canvas — the only meaningfully-elevated element above the fold.
- **Template thumbnail shadows:** the 3-up template-preview grid below the fold uses a faint 0-2-8 drop shadow per card, just enough to lift the card off the white canvas without competing with the brand purple.
- **Hairline outlines:** `{colors.hairline}` (#dddfe5) carries 1px outlines on input fields and dropdown menus.

## Shapes

The radius scale is **small-step with two pill exceptions**:

- `{rounded.none}` 0px — only on the full-bleed hero canvas and the customer-logo wall.
- `{rounded.xs}` 3px — small inline chips and input field corners (25 captured occurrences, the dominant value).
- `{rounded.sm}` 6px — cards and dropdown popovers (17 captured occurrences).
- `{rounded.md}` 8px — buttons and pill-fill chips (14 captured occurrences).
- `{rounded.lg}` 20px — larger surface blocks and the slide-preview hero card (10 captured occurrences).
- `{rounded.xl}` 26px — the featured-card thumbnails on the template preview row (5 captured occurrences).
- `{rounded.pill}` 56px — one single oversized component (a "How Pitch works" callout panel).
- `{rounded.full}` 9999px / 50% — circular avatars and round icon buttons (8 captured occurrences).

There is no 4px tier and no 12-16px tier. The scale jumps from 8px to 20px and from 20px to 50% with no middle steps — small surfaces stay small-step rounded, large surfaces jump to generous rounding, with no in-between.

## Components

**`hero-section`** — Full-bleed indigo-purple `{colors.primary}` canvas, 120×40 padding, no radius. Holds the 80px Mark Pro h1 in white, a 640px sub-paragraph at `{typography.body-lg}`, the white CTA pill, and the embedded slide-preview thumbnail card directly beneath.

**`hero-heading`** — White `{colors.canvas}` text on the purple canvas, Mark Pro 80px / 800 / -1.6px tracking. The loudest typographic surface in the system.

**`section-heading`** — Charcoal `{colors.ink}` text on the white canvas, Mark Pro 42px / 800 / -0.84px — used for "Trusted by 3M+ teams worldwide" and similar section h2s.

**`sub-heading`** — Charcoal `{colors.ink}` text, Mark Pro 28px / 800 — used for the "How Pitch works" sub-display and the feature-card titles.

**`body-paragraph`** — Charcoal `{colors.ink}` text at `{typography.body-lg}` (Eina01 18px / 400 / 36px line-height). The workhorse paragraph style.

**`caps-label`** — Mark Pro 13px / 700 with 1.3px positive tracking, uppercase. The eyebrow label above section heads — rare but distinctive.

**`button-primary`** — White `{colors.canvas}` fill on the purple hero, charcoal `{colors.ink}` text, Eina01 uppercase 14px / 700 with 1.4px tracking, `{rounded.md}` 8px radius, 15×24 padding, 48px height. "Get started for free" is the canonical instance.

**`button-primary-purple`** — Indigo-purple `{colors.primary}` fill, white text on a white canvas — the inverse of the hero CTA, used below the fold where the canvas is white instead of purple.

**`button-secondary`** — Transparent fill, white text, 1px white border, `{rounded.md}` 8px radius — used for "Watch the demo" tertiary CTAs on the purple hero.

**`top-nav`** — Indigo-purple `{colors.primary}` fill (the nav continues the hero canvas), white text, 64px height, 20×40 padding. Houses the Pitch wordmark left, product nav center, and Login / Get started cluster right.

**`nav-link`** — Transparent background, white text in `{typography.nav-link}` (16px / 400 Eina01), 6×12 padding. Hover state is a subtle white-with-alpha background tint.

**`yellow-chip`** — Mustard `{colors.yellow}` fill, charcoal `{colors.ink}` text, `{rounded.md}` 8px radius, 8×16 padding, 36px height. The single yellow-chip callout — "Get a head start with free templates" is the canonical instance.

**`preview-card`** — White `{colors.canvas}` fill, 1px `{colors.hairline}` border, `{rounded.xl}` 26px radius, 0 padding (the slide preview fills the card edge-to-edge). Holds the template thumbnail in the 3-up below-fold grid.

**`text-input`** — White `{colors.canvas}` fill, charcoal `{colors.ink}` text, 1px `{colors.hairline}` border, `{rounded.xs}` 3px radius, 8×12 padding, 40px height. Used in the "Sign up with email" newsletter form at the page bottom.

## Do's and Don'ts

**Do** treat the brand purple `{colors.primary}` (#6b53ff) as a full-canvas voltage on the hero and the top-nav. The single move that defines the system is the purple hero canvas; holding the voltage to a CTA-only fill would erase the brand statement.

**Do** render display headlines at Mark Pro 800 with negative letter-spacing. The 80px / -1.6px hero is the loudest typographic surface in the system; dropping to weight 500 or to 0 tracking would lose the editorial heaviness that distinguishes Pitch from peer SaaS landings.

**Do** scope the yellow `{colors.yellow}` (#ffd02c) to chip callouts and small accent rims. The 10-occurrence ration is the discipline; treating it as a section-fill color would create a third major voltage and break the binary purple-and-white rhythm.

**Do** pair Mark Pro display with Eina01 body. Every display surface is Mark Pro; every body surface is Eina01. The pairing is the typographic identity — mixing Eina01 into display tiers or Mark Pro into body paragraphs collapses the family-boundary distinction.

**Don't** introduce a tinted-purple band between the saturated hero and the white below-fold canvas. The system is binary — purple bands or white bands, no middle tier. Adding a light-purple section background would muddy the call-and-response rhythm.

**Don't** render the hero h1 at a smaller size or a lighter weight. The 80px / 800 / -1.6px display is the brand voice; reducing to 56px or to weight 500 would push the page toward a peer-SaaS hero and lose the magazine-cover loudness.

**Don't** add a third typeface. The two-family stack (Mark Pro + Eina01) is the typographic identity; adding a serif, a script, or a monospace would diffuse the binary display-versus-body split.

**Don't** introduce a 12-16px middle radius tier. The system jumps from 8px to 20px deliberately; adding a 12 or 16 would soften the contrast between the small-step input chrome and the generous 20-26px card surfaces.

## Known Gaps

- **Hover and focus states:** the captured marketing surface does not expose explicit hover, press, or disabled tints on `{component.button-primary}` or `{component.button-primary-purple}`. The full state matrix lives inside the product editor and is not represented in the marketing tokens here.
- **Form input validation:** `{component.text-input}` carries the resting state from the newsletter sign-up at the page foot; error / success styling is not exposed on the marketing surface.
- **Dark mode:** the captured page is light-only (apart from the purple hero band, which is inherently saturated). A dark mode exists in the editor product but is not represented here.
- **Motion:** the slide-preview thumbnails carry a subtle hover-lift animation and the hero CTA pill has a press-state transition, but the spec captures end-state values only. Easing curves and durations live in the live site CSS.
- **Editor surfaces:** this DESIGN.md captures the marketing site only. The Pitch editor (`app.pitch.com`) carries a substantially richer token system — slide-layout grids, comment-thread chrome, video-recording controls, presentation-mode UI — that is not represented here.
- **Template thumbnail rendering:** the 3-up template preview row uses rendered screenshots from actual customer decks, each carrying its own color palette. These thumbnail palettes are not parameterizable from this token spec; they live in the live template gallery data.
- **Yellow accent saturation:** the captured page renders the `{colors.yellow}` chip almost exclusively as a flat fill. A small set of yellow accent rims appears on hover-state highlights elsewhere but is not visible at sufficient frequency to document in the component map.
