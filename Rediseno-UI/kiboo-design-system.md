# Kiboo — Guía de estilo UI

## Colores de marca

```css
--brand-green:  #249e4f;
--brand-blue:   #3b82f6;
--brand-violet: #8b5cf6;
--brand-pink:   #ec4899;
--brand-navy:   #1e293b;

/* Derivados (mezcla de los de arriba, para variar sin salirse de paleta) */
--brand-teal:        color-mix(in srgb, var(--brand-green) 42%, var(--brand-blue) 58%);
--brand-indigo:       color-mix(in srgb, var(--brand-blue) 62%, var(--brand-violet) 38%);
--brand-deep-violet:  color-mix(in srgb, var(--brand-violet) 58%, var(--brand-navy) 42%);
```

Uso: verde = color de acción/éxito principal. Azul = links y foco de inputs. Violeta/rosa = acentos secundarios (categorías, badges). Navy = fondos oscuros y texto de máximo contraste.

## Neutros (texto y superficies)

```css
--ink:            oklch(24% 0.035 265);   /* texto principal */
--ink-soft:       oklch(42% 0.03 265);    /* texto secundario */
--ink-faint:      oklch(58% 0.02 265);    /* texto terciario / placeholders */
--surface:        oklch(99% 0.004 265);   /* fondo de página */
--surface-sunken: oklch(96.5% 0.008 265); /* fondo de bloques hundidos */
--surface-card:   oklch(100% 0 0);        /* fondo de cards/inputs, blanco puro */
--border-soft:    oklch(90% 0.012 265);   /* bordes normales */
--border-softer:  oklch(94% 0.008 265);   /* bordes sutiles/divisores */
```

Los neutros tienen un leve tinte azul-violeta (no son grises puros) — le da coherencia con la marca.

## Tipografía

- **Títulos:** Manrope (700/800) — `font-family: "Manrope", "Segoe UI", sans-serif;`
- **Texto/body:** Inter (400/500/600/700) — `font-family: "Inter", "Segoe UI", sans-serif;`
- Cargar desde Google Fonts:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  ```

Escala de tamaños (responsive con `clamp`):
```css
--fs-hero:  clamp(2.25rem, 1.4rem + 3.6vw, 3.75rem);  /* h1 grande */
--fs-h2:    clamp(1.5rem, 1.25rem + 1.1vw, 2.125rem);
--fs-h3:    clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem);
--fs-lead:  clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);   /* bajada/subtítulo */
--fs-body:  1rem;
--fs-small: 0.875rem;
--fs-micro: 0.75rem;    /* labels uppercase, badges */
```

Títulos: `letter-spacing: -0.01em;` (un poco más compactos). Labels/badges uppercase: `letter-spacing: 0.05–0.08em;` + `font-weight: 700–800`.

## Espaciado (escala de 4pt)

```css
--space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
--space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px;
```

## Bordes y sombras

```css
--radius-sm: 10px;   /* inputs, botones */
--radius-md: 16px;   /* cards */
--radius-lg: 24px;   /* bloques grandes, paneles */

--shadow-card:       0 1px 2px oklch(24% 0.035 265 / 0.04), 0 8px 24px -12px oklch(24% 0.035 265 / 0.14);
--shadow-card-hover: 0 2px 4px oklch(24% 0.035 265 / 0.06), 0 16px 36px -14px oklch(24% 0.035 265 / 0.2);

--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);  /* easing estándar de todas las transiciones */
```

## Componentes clave para un login

**Input de texto:**
```css
.input {
  font-size: var(--fs-small);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-soft);
  background: var(--surface-card);
  color: var(--ink);
  transition: border-color 0.2s var(--ease-out-expo), box-shadow 0.2s var(--ease-out-expo);
}
.input::placeholder { color: var(--ink-faint); }
.input:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--brand-blue) 55%, var(--border-soft));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-blue) 16%, transparent);
}
```

**Botón primario (acción principal, ej. "Ingresar"):**
```css
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-sm);
  font-weight: 700; font-size: var(--fs-small);
  border: 1px solid transparent;
  background: var(--brand-green);
  color: white;
  transition: transform 0.18s var(--ease-out-expo), box-shadow 0.18s var(--ease-out-expo), background-color 0.18s var(--ease-out-expo);
}
.btn-primary:hover { transform: translateY(-1px); }
```

**Botón ghost/secundario:**
```css
.btn--ghost {
  background: var(--surface-card);
  border: 1px solid var(--border-soft);
  color: var(--ink);
}
.btn--ghost:hover { border-color: var(--ink-faint); transform: translateY(-1px); }
```

**Panel/card (contenedor del formulario de login):**
```css
.panel {
  background: var(--surface-card);
  border: 1px solid var(--border-softer);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-7);
}
```

## Principios generales de estilo

- Fondo general clarito con tinte azul-violeta muy sutil, nunca blanco/gris puro plano.
- Cards y paneles siempre con `border` sutil + `shadow-card`, radios grandes (16–24px), nunca esquinas vivas.
- Botones y transiciones usan siempre el mismo easing (`--ease-out-expo`) y duraciones cortas (0.18–0.32s).
- El foco de inputs/botones es azul (`--brand-blue`) con halo de `box-shadow` (no solo outline).
- Jerarquía tipográfica: Manrope bold/extrabold para títulos, Inter para todo el resto.
- Evitar grises puros: todos los neutros llevan un leve tinte hacia el azul-violeta de marca (via `oklch`).
