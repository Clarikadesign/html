# Clarika Design System

A design system capturing the visual language, content tone, and reusable components for **Clarika** — a technology / engineering services brand with a dark, futuristic-yet-grounded aesthetic anchored by a teal primary, glass surfaces, and subtle animated mesh backgrounds.

> **Sources used for this system**
> - Brand spec provided in chat (colors, typography, components, motion). This was the only source attached at start — no Figma URLs, GitHub repos, or codebases were provided. The system below extrapolates a coherent brand world from that spec.
> - Manrope from Google Fonts (loaded via `@fontsource` / Google CDN — see `fonts/`).
>
> **Caveats:** Logo, product imagery, and any real screen content from production were NOT provided. Wherever a logo or photo appears in this kit it is a generated placeholder consistent with the system's visual language — flagged with `data-placeholder`. Replace with real assets when available.

---

## Index

| File / Folder | Purpose |
|---|---|
| `README.md` | This document — overview, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | Source-of-truth CSS variables for color tokens and type scale. Import this into any design. |
| `fonts/` | Manrope (variable font + static weights) loaded from Google Fonts. |
| `assets/` | Logos (placeholder), background washes, decorative SVGs, icons. |
| `preview/` | Self-contained HTML cards that populate the Design System tab — color swatches, type specimens, component states, etc. |
| `ui_kits/website/` | Marketing-website UI kit: hero, glass cards, buttons, decorative mesh, section blocks. |
| `SKILL.md` | Agent-Skill manifest for using this system inside Claude Code or another agent. |

See the **VISUAL FOUNDATIONS** and **CONTENT FUNDAMENTALS** sections below before designing anything new.

---

## What is Clarika?

Clarika positions itself as a senior engineering / consulting partner — calm, technical, confident. The aesthetic is the visual equivalent of a clean terminal at night: deep near-black backgrounds, precise type, a single bright teal accent that does almost all the work, and quiet ambient color (blue + lilac) used sparingly in decorative mesh. Surfaces are glass (translucent white at low alpha over black). Nothing is loud. Everything is legible.

Mental model when designing for Clarika:
- **Black canvas, teal scalpel.** Black is the medium; teal is the only saturated UI color most of the time.
- **Glass over void.** Cards are barely-there white films on near-black.
- **Soft motion, not punchy.** Slow node pulses, gentle fade-ups, no bounces.
- **Type does the storytelling.** Tight tracking, heavy weights at the top of the scale, generous body line-height.

---

## CONTENT FUNDAMENTALS

How copy is written, what it sounds like, and what to avoid.

### Voice & tone
- **Confident, low-temperature, technical.** Reads like a senior engineer explaining something to a peer. Never sales-y, never hyped.
- **Plain English over jargon.** Use the precise word when it matters (e.g. "observability", "SLO", "type system") but never decorate sentences with buzzwords ("synergy", "leverage", "next-gen").
- **Show the work.** Prefer concrete nouns and verbs over adjectives. _"We migrated 14M rows with zero downtime"_ beats _"world-class data migration expertise"_.

### Person & address
- **"We" for Clarika, "you" for the reader.** First-person plural is the house default. Singular "I" only appears in author bylines on insights/articles.
- Direct address. _"You ship faster when…"_ not _"Companies ship faster when…"_

### Casing
- **Sentence case everywhere** for UI: buttons (`Get in touch`, `Read insight`), section headings, nav items.
- **Title Case** only for product / proper nouns and the brand mark.
- **UPPERCASE** reserved for eyebrows and small labels/pills (11px, letter-spaced 0.20em). Used sparingly — one or two per screen.

### Punctuation, numbers, dates
- Oxford comma. Em dashes — like this — over parentheses for asides.
- Numerals over spelled-out numbers from `10` onward; numerals for all metrics (`3×`, `99.95%`, `14M rows`).
- ISO-ish dates in eyebrows (`MAY 2025`, `Q2 2025`).

### Emoji & exclamation
- **No emoji.** Ever, in product copy. (Exception: a teammate's avatar fallback initial, not an emoji.)
- **No exclamation marks.** The tone is even. If something is exciting, the writing should _show_ it, not punctuate it.

### Vibe — concrete examples
Drawn from the spec's component naming and the established tone. Use these as a sense-check:

**Hero**
> Engineering that holds up under load.
> We build, scale, and operate systems for teams that ship every day.
> `[ Start a project ]  [ Read insights ]`

**Eyebrow + card title**
> `PLATFORM ENGINEERING`
> Cut deploy times by 70% with the right Kubernetes baseline.

**Article lede**
> A short, declarative sentence that states the point. Then one supporting sentence that earns the click.

**Button labels**
- `Get in touch` ✅
- `Start a project` ✅
- `Read insight` ✅
- `Schedule a meeting` ✅
- `Contact us now!` ❌ (exclamation)
- `🚀 Launch faster` ❌ (emoji)
- `Synergize your stack` ❌ (jargon)

**Avoid**
- "Cutting-edge", "world-class", "best-in-class", "revolutionize"
- Emoji, exclamation marks, ALL-CAPS shouting
- Vague claims without a number or proof point
- Marketing-ese ("unlock", "empower", "supercharge")

---

## VISUAL FOUNDATIONS

The foundations a designer needs in their head before opening a file.

### Colors
- **Brand teal `#34CFBE`** is the only saturated UI color in 90% of compositions. It is the CTA color, the focus ring, the link, the chart highlight. It is _never_ used for body text. Pair it with `#0D1A2E` (dark navy) for text on teal — never white-on-teal.
- **Blue `#0D8BFF` and lilac `#A78BFA`** are decorative only — they appear in the animated mesh, in node glows, in occasional category accents. They are not UI colors. Do not put a blue button next to a teal one.
- **Black is the canvas.** `#000000` is the page base. `#050505` and `#03080F` are section surfaces. The hero uses a long-diagonal `linear-gradient(160deg, #060e18 0%, #03080f 45%, #000000 100%)` that pulls light toward the top-left.
- **White is used only at low alpha.** Pure `#FFFFFF` appears in headlines, button text on teal, and otherwise white sits at `rgba(255,255,255,0.07–0.62)` for borders, body, and muted text. Treat any solid white block as wrong.
- **Teal also lives in alpha form** for borders, washes, and glows — `rgba(52,207,190,0.06)` washes through `0.30` borders up to a `0.45` glow on primary buttons.

### Typography
- **Manrope** across the entire system. Weights 400 / 500 / 600 / 700 / 800 / 900 are loaded.
- **Display type runs heavy and tight.** Hero H1 is 900 weight with `-2px` tracking; section H2 is 800 with `-0.04em`. The negative tracking is doing real work — do not let it slip to `0`.
- **Body type runs light and airy.** 400 weight, line-height `1.65–1.72`, color `rgba(255,255,255,0.62)`. Body never goes above 60–72 characters per line.
- **Eyebrows are 11px, 700, UPPERCASE, `0.20em` tracked.** They sit above titles. One per section.
- **Buttons are 15–16px, 700, `0.03em` tracked.** No uppercase.

### Spacing, layout, radius
- Max content width **1280px** (`max-w-7xl`). Side padding `24px` mobile, `48px` desktop.
- Section vertical padding `80–96px`.
- Grid gaps: cards `24px`; hero two-column `48px` desktop, `24px` mobile.
- Radius scale: `8 / 12 / 16 / 24px`. Cards default to **16px** (`rounded-2xl`). Buttons use **12px** (`rounded-xl`). Big feature panels can take **24px**.
- 8-point spacing scale (`4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96`).

### Backgrounds & decoration
- **No photographic backgrounds** by default. The system breathes through a pure black base + a slow, animated **SVG mesh** of three colored nodes (teal top-left, blue right-mid, lilac bottom-right) connected by thin (`stroke-width: 0.7`, `opacity: 0.10–0.12`) edges. Nodes pulse `r: 2 → 4.5` on a slow 8–12s loop.
- **Ambient washes** are radial gradients in the corners at `0.05–0.10` opacity. They sit behind everything.
- **Grain / texture are not used.** The aesthetic is clean, not analog.
- **Full-bleed imagery** is allowed for article/insight cards (16:9 image on top of a glass card body). Imagery should skew cool/neutral — desaturated, blue-shifted, technical subject matter (boards, terminals, abstract architecture). No warm tones, no people-as-hero photos.

### Borders, shadows, glow
- **Borders are 1px**, always. The default border is `rgba(255,255,255,0.07–0.09)` — barely visible.
- On hover, a card's border transitions to **teal at 0.30** alpha.
- **No drop shadows.** The system avoids gray drop shadows entirely; depth is implied through alpha-on-black, not blur.
- **Glow** is reserved for the primary button: `0 0 56px rgba(52,207,190,0.45)`. It is the loudest thing on a page.

### Transparency & blur
- Glass cards use `rgba(255,255,255,0.02–0.04)` — no `backdrop-filter: blur` by default. The card on top of pure black is enough; blur is reserved for floating overlays (modals, command palette) where content might sit behind them.

### Hover, press, focus
- **Hover (card):** border → teal-30, `translateY(-4px)`, `transition 200–300ms cubic-bezier(0.22, 1, 0.36, 1)`.
- **Hover (image inside card):** image scales `1.04–1.06`, `duration 500–700ms`.
- **Hover (primary button):** `scale(1.05)` — the glow intensifies subtly via the existing box-shadow.
- **Active (primary button):** `scale(0.95)`.
- **Hover (ghost / secondary):** opacity / fill ramps up but the element does not move.
- **Focus ring:** 2px teal outline at `0.6` alpha, offset 2px. Never the browser default.

### Motion
- **Easing is `cubic-bezier(0.22, 1, 0.36, 1)`** for almost everything (decelerate, with a tiny overshoot tail).
- Durations: micro `150ms`, default `200–300ms`, image transforms `500–700ms`, mesh-node pulse `8–12s`.
- **Reveal on scroll:** opacity 0→1 + `translateY(16px → 0)`, staggered `60ms × index`.
- **No bounces, no springs, no spin.** Motion is deliberate and quiet.

### Cards — anatomy
- **Glass card (default):** `bg rgba(255,255,255,0.02–0.04)`, `1px border rgba(255,255,255,0.07–0.09)`, `radius 16px`. Hover lifts and teal-borders.
- **Insight / article card:** Glass base. Top region `aspect-ratio 16/9` with an image (overflow hidden, hover scales image). Body `padding 20px`. Eyebrow + title + 2-line lede.
- **Sidebar / info card:** Glass base but border carries a category-tinted alpha (`rgba(<category-rgb>, 0.22)`). Padding `24px`. Used for tag lists, table-of-contents, author cards.

### Layout rules
- The first viewport of any page is dark, mostly empty, with a single headline and a single primary CTA.
- Decorative mesh / wash always sits in a `pointer-events: none` layer behind content.
- Sticky top nav is allowed; it sits on a `rgba(0,0,0,0.6)` background with `backdrop-filter: blur(20px)` and the same hairline white border on the bottom.

---

## ICONOGRAPHY

There was no production icon set provided. Decisions below set the default and flag substitutions:

- **Style:** thin-line / stroke icons, 1.5px stroke, rounded caps and joins, 24×24px grid. Filled icons are avoided — they fight the glass aesthetic.
- **Color:** icons inherit `currentColor` and almost always render at `rgba(255,255,255,0.55–0.70)`. Active / accent icons take the teal `#34CFBE`.
- **CDN substitution:** the kit currently links **[Lucide Icons](https://lucide.dev/)** from CDN (`https://unpkg.com/lucide@latest`). Lucide matches the stroke style and weight described above. **Flag:** swap for the production icon set when one is provided.
- **No emoji.** Not in nav, not in cards, not as bullets. Use a 4px teal dot (`bg #34CFBE, border-radius 50%`) when a marker is needed in a list.
- **Unicode chars are not used as icons.** No `→ ↗ ✓` — instead use the corresponding Lucide icon (`ArrowRight`, `ArrowUpRight`, `Check`).
- **Logo:** placeholder wordmark in `assets/logo.svg` — set in Manrope 800 with a teal "•" between the syllables (`Cla•rika`). Replace with the real lockup when received.

---

See `colors_and_type.css` for the implementation, `preview/` for visual references, and `ui_kits/website/` for assembled examples.
