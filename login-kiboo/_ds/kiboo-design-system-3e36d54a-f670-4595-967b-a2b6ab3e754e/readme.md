# Kiboo Design System

Brand & UI design system for **Kiboo** — *"Más que un sistema de gestión"* — an Argentine business-management (gestión / ERP-lite) platform. Kiboo unifies **stock, prices, orders and billing** across every sales channel a merchant uses: physical stores, Mercado Libre, and online stores built on **Tiendanube**, all synchronised in real time so data is never entered twice.

This system was derived from a single source: the commercial proposal **"Kiboo – Propuesta Tiendanube – Julio 2026"** (a 14-page PDF in `uploads/`). It packages that proposal's brand language — logo, colour trio, pastel-mesh backgrounds, soft-shadow cards, big green stat numbers, thin-outline icons — into reusable tokens, components, a product UI kit, and proposal slide templates.

## Sources given
- `uploads/Kiboo - Propuesta Tiendanube - Julio 2026.pdf` — the only source. Logo, Tiendanube partner logo, the pastel background, and the product stock-sync illustration were extracted from it into `assets/`. **No production codebase or Figma file was provided** — so component and UI-kit *structure* is a faithful reconstruction in Kiboo's visual language, not a byte-exact copy of the live product. See "Caveats".

---

## Content fundamentals
How Kiboo writes:
- **Language:** Argentine Spanish, using the local *voseo* ("vendés", "abrís", "cargá", "empezá"). Warm, plain, reassuring — sells outcomes, not features.
- **Voice — "we do it for you":** first-person plural for the team ("Nos ocupamos de todo", "Construimos tu tienda"), second-person *vos* for the merchant ("tu tienda", "tu stock"). Never corporate-stiff.
- **Casing:** Small **uppercase kicker labels** with wide tracking open most sections ("¿DE QUÉ SE TRATA?", "INVERSIÓN", "NUESTRO DIFERENCIAL"). Headlines are sentence case. Body is sentence case.
- **Tone:** confident, benefit-led, low-jargon. Big promises stated simply — *"Tu tienda online, lista para vender"*, *"Un canal de ventas online completo, en días"*, *"Sin cargar datos dos veces"*.
- **Numbers as proof:** prices and metrics are shown large and bold ("+180.000 tiendas activas", "$2.000.000 + IVA", "25 unidades"). Argentine number format: `.` for thousands, `,` for decimals; ARS prices with `$`; "+ IVA" appended to quoted prices.
- **Emoji:** essentially none in the proposal. A single friendly 👋 is acceptable in an in-app greeting ("Hola, Mabel 👋") but keep emoji out of marketing/formal copy.
- **Punctuation:** Spanish opening marks (¿ ¡) always. Short sentences. Bulleted checklists ("● …") are heavily used for "¿Qué incluye?" scopes.

Example voice: *"Si hoy vendés solo en persona, por WhatsApp o en redes, abrís tu tienda online sin complicaciones técnicas."*

---

## Visual foundations
- **Colour:** a three-hue brand trio taken from the logo — **green `#8cc63f`** (primary / positive / the big stat numbers), **sky blue `#29a9e0`** (links, info, secondary), **violet `#7b5fc4`** (interactive icons, sync, focus). Text is a cool near-navy (`#202b38` / `#2d3a4a`) on a cool slate neutral ramp. Green carries the brand's optimism and is used for emphasis numbers; violet carries interactivity (icons, sync, active nav); blue is the calm connective/informational hue.
- **Backgrounds:** the signature motif is a **soft pastel "blob" mesh** — faint lilac (top-left), mint (bottom-left) and sky (bottom-right) radial washes fading into near-white. Never a hard gradient, never full-saturation. Available as `.kiboo-bg` / `var(--bg-mesh)`. Content sits on white cards floating over this mesh.
- **Cards:** white, generously rounded (`--radius-lg` 20px, hero panels 28px), with a **soft, diffuse, low-alpha cool-navy shadow** (`--shadow-md` = `0 8px 24px rgba(45,58,74,.09)`) and a near-invisible hairline border. Never hard/dark drop shadows, never heavy borders, never a coloured left-border accent.
- **Type:** rounded, friendly geometric sans. **Poppins** for display/headings (bold, tight -0.02em tracking), **Nunito Sans** for body/UI, **JetBrains Mono** for SKUs, codes and tabular figures. (Substitutes — see below.)
- **Spacing:** 4px base grid; comfortable, airy density with lots of white space.
- **Corners:** everything is rounded — inputs `--radius-md` (14px), cards `--radius-lg`, and pills/chips/buttons fully rounded (`--radius-pill`). Buttons are pill-shaped.
- **Shadows & glows:** neutral soft shadows for elevation; optional coloured **glows** (`--glow-green`, `--glow-violet`) for active CTAs.
- **Motion:** gentle. Fast (120ms) presses that scale to ~0.97; 200–340ms ease-out (`cubic-bezier(.16,1,.3,1)`) for hovers, lifts and toggles. No bounces, no long or looping decorative animation.
- **Hover / press states:** hover = slight `brightness(0.96)` darken (fills) or a soft-tint background (nav/ghost); cards lift 2px and deepen their shadow. Press = quick scale-down (0.92–0.97). Focus = 3px violet ring (`--ring`).
- **Imagery vibe:** warm, natural, lifestyle product photography (the demo store is a homeware brand — neutral linens, wood, plants). Photos are full-colour, bright, un-graded. Product thumbnails sit in soft slate placeholders when absent.
- **Iconic UI pattern:** the **multi-location stock view** — a product card (image + SKU + big green stock number + green "Stock actualizado" pill + violet sync icon) branching via purple dotted connectors into per-store / per-warehouse cards, each with a violet outline store/warehouse glyph and its own big green number.

---

## Iconography
- **Style:** thin **outline** icons, hairline stroke (~1.75), rounded caps — matching the outline glyphs in the proposal (e.g. the clock, store and warehouse marks).
- **Substitution:** Kiboo's proprietary icon set was not provided. We use **[Lucide](https://lucide.dev)** from CDN as the closest match (same outline style / stroke weight). Loaded via `<script src="https://unpkg.com/lucide@0.454.0/…">` and wrapped by the `<Icon>` component. **Flag:** swap for the real Kiboo glyph set when available.
- **Colour:** icons are typically **violet** (`--violet-500`) for interactive/product contexts, or navy/slate in neutral UI. Store & warehouse glyphs on soft-violet circular chips are a recurring product motif.
- **Emoji:** avoid, except an occasional friendly 👋 in casual in-app greetings.
- **No hand-drawn SVGs** — all icons come from Lucide; brand imagery comes from `assets/`.

## Font substitution ⚠️
The original Kiboo brand fonts were **not provided**. Current stand-ins (Google Fonts, loaded via `@import` in `tokens/fonts.css`):
- **Poppins** → display / headings (rounded geometric, matches the friendly wordmark feel)
- **Nunito Sans** → body & UI
- **JetBrains Mono** → SKUs / codes / data
Please send the real brand fonts (or confirm these) and we'll swap them in `tokens/fonts.css`.

## Logo
`assets/kiboo-logo.png` — the "kiboo" navy wordmark with the tri-colour (violet/green/blue) mark and tagline *"Más que un sistema de gestión"*. Extracted from the proposal at 374×146. **No standalone/mono/SVG logo variants were provided** — only this raster lockup. Request vector + mono versions for production. `assets/tiendanube-logo.png` is the official partner lockup used in "Integración oficial con…".

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css` (radii + shadows + motion + bg-mesh), `base.css` (element defaults).
- `assets/` — `kiboo-logo.png`, `tiendanube-logo.png`, `bg-gradient.png`, `kiboo-sync-illustration.png`, `hero-laptop.png`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).
- `components/` — reusable primitives (below).
- `ui_kits/kiboo-panel/` — interactive gestión-panel recreation.
- `slides/` — proposal slide templates.
- `SKILL.md` — Agent-Skills manifest for downloadable use.

**Components** (`window.KibooDesignSystem_3e36d5`)
- `forms/` — **Button**, **IconButton**, **Input**, **Select**, **Checkbox**, **Switch**
- `display/` — **Card**, **StatCard**, **Badge**, **Tag**, **Avatar**
- `feedback/` — **Alert**
- `media/` — **Icon**

**UI kits**
- **Kiboo Panel** (`ui_kits/kiboo-panel/`) — dashboard, products/stock table, and the signature multi-location product-detail view. Interactive click-through in `index.html`.

**Slides** (`slides/`, 1280×720)
- Title, Feature grid, Big stat, Summary grid, Pricing, Differentiators, Closing — matching the commercial-proposal layout.

---

## Caveats
- **Fonts are substituted** (Poppins / Nunito Sans / JetBrains Mono). Need the real brand fonts.
- **Icons are Lucide** (CDN), a stand-in for Kiboo's own set.
- **Logo is raster only**; no vector or monochrome variants were provided.
- **UI-kit & component structure is reconstructed** from a proposal PDF, not the live product code/Figma. Visual language is faithful; exact screen layouts, nav, and field-level details are best-guess. Share the product codebase or Figma to make the UI kit pixel-exact.
