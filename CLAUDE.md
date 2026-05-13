# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Pure static HTML/CSS/JS personal portfolio for Garv Aggarwal — no build tools, no framework, no package manager. Intended for GitHub Pages hosting. Open `index.html` directly in a browser to develop.

## Architecture

**Entry point:** `index.html` — full single-page site with all CSS and JS embedded inline.

**Sub-pages:** `pages/` — each page is a self-contained HTML file that links `_shared.css` for the shared nav, footer, type scale, and utility classes. Per-page styles live in a `<style>` block at the top of each file.

**Assets:** `assets/` — four lotus images used across all pages (`lotus.png`, `lotus-2-pink.png`, `lotus-2-wire.png`, `lotus-wire.png`). Asset paths in `index.html` are relative to root (`assets/…`); paths in `pages/*.html` are one level up (`../assets/…`).

**Shared CSS contract (`pages/_shared.css`):**
- Defines CSS custom properties: `--paper`, `--ink`, `--red`, `--gold`, `--night`, `--activation`, `--rule`, plus per-page overrides via `--accent`, `--page-bg`, `--page-fg`.
- Provides `.nav`, `.page-head`, `.foot`, `.section-mark`, `.wrap`, `.pill` as shared shells.
- Sub-pages set `data-page="…"` on `<body>` to scope their accent colour overrides.

**Hero scroll mechanic (index.html):**
- `.hero-wrap` is 220vh tall with a `position:sticky` inner stage.
- JavaScript maps scroll progress to a `--scroll-p` CSS variable (0 → 1 over the middle 60% of the scroll range).
- `--scroll-p` drives: `opacity` of `.layer-night`, wire lotus `opacity`, `color-mix` on `.hero-word`, and the glitch text animation that morphs "Sanskrit" → "Deep Learning".
- The neural-network background is a canvas particle system (`#neuralCanvas`) inside `.layer-night`.

## Navigation between pages

All sub-pages link back to `index.html` (not `Prototype.html`). Internal anchor links use fragment IDs: `#about`, `#work`, `#resources`, `#connect`.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F5EDD6` | default background |
| `--red` | `#8B1A1A` | primary accent, About section bg |
| `--gold` | `#C4922A` | secondary accent, hover states |
| `--night` | `#050A14` | dark mode / AI platform bg |
| `--activation` | `#00FFB2` | neural green, canvas nodes |

Typography stack: **Cormorant Garamond** (display/serif), **Inter** (body), **JetBrains Mono** (meta/labels). All loaded from Google Fonts in each page's `<head>`.
