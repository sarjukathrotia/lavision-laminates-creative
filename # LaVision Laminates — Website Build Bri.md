# LaVision Laminates — Website Build Brief

**A complete plan + copy-paste Cursor prompts**
Prepared for the LaVision Laminates website (wholesale / super-stockist, Gujarat).
Stack: React + Vite + Tailwind + GSAP (ScrollTrigger) + Three.js (react-three-fiber) + Lenis smooth scroll.

---

## 0. Read this first — the design idea

Most interior/laminate websites look the same: cream background, a terracotta accent, a big serif headline, floating abstract shapes. You asked for something **different from other brands**, so this brief deliberately avoids that cliché.

The whole identity is built from the one thing you actually sell — **a laminate sheet**. A laminate is layers pressed into a surface: a decorative face, a core, an edge. So the site's signature is the **layered sheet**:

- The hero is a **3D "swatch wall"** — real laminate-style panels the visitor can hover, flip, and explore, like standing in your showroom.
- Section dividers use a thin **edge-banding line** (a hairline that "peels" on scroll).
- Stats and headings reveal like a **sheet being laid down** (slide + settle), not the usual fade-up.

Light palette, English copy, premium typography, no pop colours — exactly your client's brief — but grounded in the product so it can't be mistaken for a generic template.

---

## 1. Sitemap & navigation

### 1.1 Your requested menus (kept)
About Us · Contact Us · Gallery · Virtual 3D Model · Dealers · Brands · Products · Catalogue Download

### 1.2 Recommended additions (why they matter for a wholesaler)

| Menu | Why add it |
|------|-----------|
| **Home** | You need a landing page; the other items are inner pages. |
| **Become a Dealer** | You are wholesale/super-stockist — dealer sign-ups are your #1 conversion goal. This deserves its own page + form, not just a line under "Dealers". |
| **Projects / Work** | You support turnkey, hospitality, office, commercial projects. A portfolio builds trust with architects & contractors. |
| **Applications** (optional) | Residential / Commercial / Hospitality / Office — helps designers find the right product fast. |
| **Showrooms / Visit Us** | You have Rajkot + Ahmedabad showrooms — a map page drives real footfall. |

### 1.3 Final header menu (keep it to 7 visible items — clean = premium)

```
Home | About | Products ▾ | Brands | Gallery | Dealers ▾ | Contact
                    │                          │
   (mega-menu:)     │        (dropdown:)       │
   Laminates        │        Find a Dealer     │
   MDF              │        Become a Dealer   │
   Plywood          │
   Louvers          │
   Acrylic Sheets   │
   Thermal/Polymer  │
   Furniture Access.│
   Cane Sheets      │
```

Plus two right-side utility buttons (not menu links):
- **Virtual 3D Model** → highlighted button (ghost/outline style) — this is your differentiator, give it prominence.
- **Download Catalogue** → solid button.

> Rule: **7 links max** in the bar. Everything else lives inside "Products" (mega-menu) or "Dealers" (dropdown). This is what makes it look high-end instead of cluttered.

### 1.4 Full page list to build

1. Home
2. About Us
3. Products (index) → + one template for each product category
4. Brands (index showing all 8: LaVision, Vienna, IFILL, Urban, ColorTrip, Tovin, One Touch, Ultimo) → + single-brand template
5. Gallery
6. Virtual 3D Model (the interactive experience)
7. Projects / Work
8. Dealers → Find a Dealer (map/list) + Become a Dealer (form)
9. Showrooms (Rajkot + Ahmedabad, with maps)
10. Contact Us
11. Catalogue Download (gated PDF list)
12. Legal: Privacy Policy, Terms (footer only)

---

## 2. Header (spec)

- **Style:** transparent over the hero, then on scroll it "sets" into a solid porcelain bar with a hairline bottom border and slight blur. Animate this with GSAP ScrollTrigger.
- **Left:** logo (wordmark "LaVision" + small "More Than Most" strap).
- **Center:** the 7 nav links.
- **Right:** `Virtual 3D` (outline button) + `Download Catalogue` (solid button).
- **Mobile:** hamburger → full-screen overlay menu that reveals links in a staggered slide (GSAP timeline). Include phone numbers + "Become a Dealer" CTA inside the overlay.
- **Mega-menu:** "Products" opens a wide panel with the 8 categories in a 2-column grid, each with a tiny material thumbnail. Fade + subtle y-shift in.

---

## 3. Footer (spec)

Full-width, porcelain-to-mist gradient top, ink text. 5 columns on desktop → stack on mobile.

```
┌──────────────────────────────────────────────────────────────────────┐
│  [ LOGO ]  LaVision Laminates            NEWSLETTER / DEALER CTA        │
│  "More Than Most — One-Stop              ┌────────────────────────────┐ │
│   Solution for Interior Products"        │  Become a dealer            │ │
│  14 yrs · 500+ dealers · 8+ brands       │  [ email ______ ] [ Join ] │ │
│  ○ IG   ○ FB   ○ in   ○ WA               └────────────────────────────┘ │
├───────────────┬───────────────┬───────────────┬────────────────────────┤
│ EXPLORE       │ PRODUCTS      │ BRANDS        │ SHOWROOMS               │
│ About         │ Laminates     │ LaVision      │ Rajkot                  │
│ Products      │ MDF           │ Vienna        │ Tagore Road, GIDC       │
│ Brands        │ Plywood       │ IFILL         │ Udhyognagar, 360002     │
│ Gallery       │ Louvers       │ Urban         │ ☎ 094280 11654          │
│ Projects      │ Acrylic       │ ColorTrip     │                         │
│ Virtual 3D    │ Thermal/Poly  │ Tovin         │ Ahmedabad               │
│ Dealers       │ Furniture Acc │ One Touch     │ Olive Greens, Gota,     │
│ Contact       │ Cane Sheets   │ Ultimo        │ SG Highway, 382481      │
│               │               │               │ ☎ 099798 71032          │
├──────────────────────────────────────────────────────────────────────┤
│  © 2026 LaVision Laminates. All rights reserved.   Privacy · Terms      │
│  Wholesale & Super Stockist — we do not sell directly to retail.        │
└──────────────────────────────────────────────────────────────────────┘
```

- Add a thin **edge-banding hairline** animation across the top of the footer that draws in on scroll.
- Note the "we do not sell to retail" line — important for your business model and sets dealer expectations.

---

## 4. Design system (tokens)

### 4.1 Colour palette — "Limestone & Ink" (light, no pop colours)

Grounded in stone/plaster/surface tones — premium and calm, deliberately **not** the AI-default cream+terracotta.

| Token | Hex | Use |
|-------|-----|-----|
| `porcelain` | `#F5F3EF` | Primary background |
| `mist` | `#E9E4DC` | Alternate section background / cards |
| `greige` | `#C9C2B8` | Borders, muted fills, disabled |
| `slate` | `#6B645B` | Secondary text, captions |
| `ink` | `#1C1A17` | Headings, primary text, buttons |
| `sage` (accent) | `#6E7566` | The **only** accent — links, small marks, focus rings. Use sparingly. |
| `bronze` (hairline) | `#A8895F` | Thin dividers / edge-banding line only — never fills |

Rules: background is always light. Accent (`sage`) appears on maybe 5% of the page. `bronze` is for **1px lines only**. This restraint is what reads as expensive.

### 4.2 Typography — NO Google Fonts

All three faces are free and **self-hostable** (download the WOFF2 files and serve them yourself). None are from Google Fonts.

| Role | Font | Source | Notes |
|------|------|--------|-------|
| Display / headings | **Zodiak** | Fontshare (fontshare.com) | Modern high-contrast serif — editorial, premium. Use big, sparingly. |
| Body / UI | **Satoshi** | Fontshare | Clean neutral grotesk, excellent readability. |
| Data / labels / stats | **Geist Mono** | Vercel (github.com/vercel/geist-font) | For "14 YEARS", "500+", eyebrow labels, spec numbers. |

Fallback stacks (in CSS, in case a font fails):
```css
--font-display: "Zodiak", "Georgia", serif;
--font-body: "Satoshi", system-ui, -apple-system, sans-serif;
--font-mono: "Geist Mono", ui-monospace, "SF Mono", monospace;
```

**Type scale** (desktop; scale down ~30% on mobile):

| Element | Font | Size | Weight | Tracking |
|---------|------|------|--------|----------|
| Hero H1 | Zodiak | 72–96px (clamp) | 400 | -1.5% |
| Section H2 | Zodiak | 44–56px | 400 | -1% |
| H3 | Satoshi | 24–28px | 600 | 0 |
| Body | Satoshi | 17–18px | 400 | 0 |
| Caption / meta | Satoshi | 14px | 500 | 0 |
| Eyebrow label | Geist Mono | 12–13px | 500 | +8% UPPERCASE |
| Big stat number | Geist Mono | 56–72px | 500 | 0 |

### 4.3 Spacing, grid, radius

- **Grid:** 12-column, max content width `1280px`, gutter `24px`, side padding `clamp(20px, 5vw, 80px)`.
- **Vertical rhythm:** sections use `120–160px` top/bottom padding on desktop, `72px` mobile.
- **Radius:** `4px` for buttons/cards (keep it tight — laminates are flat sheets, not soft blobs). Avoid large rounded corners.
- **Shadows:** almost none. Use hairline borders (`1px greige`) instead of drop shadows. One soft shadow is allowed on the floating 3D swatch card.

---

## 5. Tech stack & libraries

```bash
# Scaffold
npm create vite@latest lavision -- --template react
cd lavision
npm install

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Animation + scroll
npm install gsap @gsap/react
npm install lenis            # smooth scroll (works with ScrollTrigger)

# 3D
npm install three @react-three/fiber @react-three/drei

# Routing + forms + icons
npm install react-router-dom
npm install lucide-react     # clean line icons (not Google)
```

- **GSAP** for all scroll and reveal animation (ScrollTrigger is free now).
- **Lenis** for buttery smooth scroll; sync it to ScrollTrigger.
- **react-three-fiber + drei** for the 3D swatch wall / material viewer.
- **Self-host fonts** in `/public/fonts/` and load via `@font-face` — do **not** link Google Fonts.

---

## 6. Animation plan (GSAP) — what goes where

| Effect | Where | GSAP tool |
|--------|-------|-----------|
| Smooth scroll | Whole site | Lenis + `ScrollTrigger.update()` |
| Header transparent → solid | On scroll past hero | ScrollTrigger + `gsap.to` on nav bg/blur |
| Hero text reveal | Home hero | Timeline: mask-up reveal of H1 lines (split into lines manually or with a lightweight splitter), staggered |
| "Sheet lay-down" reveal | Section headings, cards | `gsap.from({ y: 40, xPercent: -4, opacity: 0 })` — slides in like a laid sheet, not a plain fade |
| Stat count-up | About / stats strip | ScrollTrigger triggers a number tween (14, 500+, 8+) |
| Pinned horizontal scroll | Brands strip (8 brands) | ScrollTrigger `pin: true` + horizontal `x` translate |
| Edge-banding hairline draw | Section dividers, footer top | `strokeDashoffset` / scaleX tween on scroll |
| Parallax on imagery | Gallery, hero background | ScrollTrigger `scrub: true`, different `y` speeds |
| Image mask reveal | Gallery, projects | `clip-path` inset animation on enter |
| Mega-menu / mobile overlay | Header | Timeline with stagger on links |
| Magnetic buttons (subtle) | CTAs (Download, Virtual 3D) | `gsap.quickTo` on mousemove |

**Golden rule:** one orchestrated moment per section beats ten scattered effects. And always wrap in `gsap.matchMedia()` + respect `prefers-reduced-motion` (disable heavy motion for users who ask for it).

---

## 7. Three.js elements — what to build (and where)

Keep 3D to **two hero moments**, not everywhere (performance + taste).

1. **Home hero — "Swatch Wall"**
   A grid of 6–12 thin laminate panels floating in soft light. On hover a panel lifts/tilts toward the cursor and its material label appears. Slow ambient drift. This is your showroom, digitised.
   - Geometry: thin `BoxGeometry` panels (a sheet = a box with small depth).
   - Material: `MeshStandardMaterial` with your real laminate texture maps (base colour + roughness + optional normal for grain).
   - Lighting: one soft key light + ambient — keep it bright/light to match the palette.
   - Interaction: raycaster on pointer for hover lift (use drei's built-in events in r3f).

2. **Virtual 3D Model page — "Material Viewer"**
   A single large panel/sheet the user can orbit, and a swatch tray below to swap the surface texture live (e.g., click a wood-grain → the panel updates). Optional: toggle **matte / gloss** finish (changes roughness). This directly demos "8+ brands, endless finishes".
   - Use `OrbitControls` from drei.
   - Preload textures with drei `useTexture`; show a loader.

**Performance:** compress textures (KTX2/WebP), cap pixel ratio at 2, lazy-load the 3D canvas (only mount when in view), and provide a **static image fallback** on mobile/low-power (check `prefers-reduced-motion` and a simple perf/mobile check). Never block first paint on Three.js.

---

## 8. Cursor prompts — global setup

> Paste this first. It scaffolds the project and locks in your design tokens so every later prompt stays consistent.

```
Set up a React + Vite site called "LaVision Laminates" (a wholesale/super-stockist
of laminates and interior products in Gujarat, India). Install and configure:
Tailwind CSS, GSAP + @gsap/react, Lenis smooth scroll, three + @react-three/fiber
+ @react-three/drei, react-router-dom, lucide-react.

Self-host fonts (do NOT use Google Fonts). Add @font-face rules in index.css for:
- Zodiak (display serif) from /public/fonts/
- Satoshi (body sans) from /public/fonts/
- Geist Mono (data/labels) from /public/fonts/
Add placeholder woff2 paths; I will drop the files in.

Add these CSS variables and Tailwind theme colours:
porcelain #F5F3EF, mist #E9E4DC, greige #C9C2B8, slate #6B645B, ink #1C1A17,
sage #6E7566, bronze #A8895F.
Fonts: display=Zodiak, body=Satoshi, mono=Geist Mono.
Base: background porcelain, text ink, body font Satoshi 17px, headings Zodiak.
Border radius max 4px. Use 1px greige hairline borders instead of drop shadows.

Set up Lenis smooth scroll and sync it with GSAP ScrollTrigger in a top-level
useEffect. Create a reusable <Reveal> component using GSAP that animates children
with a "sheet lay-down" effect (from y:40, xPercent:-4, opacity:0) on scroll-in,
and respects prefers-reduced-motion via gsap.matchMedia.

Create routes for: Home, About, Products, Brands, Gallery, Virtual3D, Projects,
Dealers (FindDealer + BecomeDealer), Showrooms, Contact, CatalogueDownload,
Privacy, Terms. Build a shared <Header> and <Footer> used on every page.
```

---

## 9. Cursor prompts — section by section

Paste these one at a time, in order. Each is self-contained.

### 9.1 Header

```
Build a <Header> for LaVision Laminates. Transparent over the hero, then on scroll
past 80px it animates (GSAP ScrollTrigger) into a solid porcelain bar with a 1px
bronze bottom hairline and slight backdrop blur.

Left: wordmark "LaVision" in Zodiak + small "More Than Most" strap in Geist Mono
uppercase. Center nav (7 links): Home, About, Products▾, Brands, Gallery, Dealers▾,
Contact. Right: two buttons — "Virtual 3D" (outline, sage border) and
"Download Catalogue" (solid ink).

Products▾ opens a wide mega-menu: 2-column grid of Laminates, MDF, Plywood, Louvers,
Acrylic Sheets, Thermal/Polymer, Furniture Accessories, Cane Sheets — each with a
small material thumbnail; fade + y-shift in with GSAP.
Dealers▾ dropdown: Find a Dealer, Become a Dealer.

Mobile: hamburger opens a full-screen porcelain overlay; links slide/stagger in via
a GSAP timeline; include both showroom phone numbers and a "Become a Dealer" CTA.
Add subtle magnetic hover (gsap.quickTo) to the two right-side buttons.
```

### 9.2 Home — Hero (3D Swatch Wall)

```
Build the Home hero. Full-viewport, porcelain background. Left column: eyebrow label
in Geist Mono "MORE THAN MOST", H1 in Zodiak (72–96px clamp): "One surface,
every possibility." Sub-line in Satoshi slate: "Wholesale laminates, MDF, plywood
and decorative interiors — 8+ brands, 500+ dealers across Gujarat." Two CTAs:
"Explore Products" (solid) and "Try the Virtual 3D Model" (outline).

Right/background: a Three.js (react-three-fiber) "Swatch Wall" — a grid of 8 thin
laminate panels (thin BoxGeometry) floating in soft light with slow ambient drift.
On hover a panel lifts and tilts toward the cursor and shows its material name.
MeshStandardMaterial with placeholder textures (I'll swap real ones). One soft key
light + ambient; keep it bright to match the light palette. Cap pixelRatio at 2,
lazy-mount the canvas when in view, and show a static image fallback on mobile or
when prefers-reduced-motion is set.

Animate H1 in on load: split into lines and mask-reveal each line upward, staggered
(GSAP timeline). Header should sit transparent over this hero.
```

### 9.3 Home — Stats strip

```
Below the hero, a slim stats strip on mist background with 1px bronze hairlines
between items. Three stats in Geist Mono big numbers with Satoshi labels:
"14 — Years of experience", "500+ — Dealers across Gujarat", "8+ — Laminate brands".
Numbers count up from 0 when scrolled into view (GSAP ScrollTrigger number tween).
An edge-banding hairline draws across the top of the strip on scroll (scaleX 0→1).
```

### 9.4 Home — Product categories

```
A "One-stop solution" section: heading in Zodiak, intro line in slate. Then a
responsive grid of 8 product cards: Laminates, MDF, Plywood, Louvers, Acrylic Sheets,
Thermal/Polymer, Furniture Accessories, Cane Sheets. Each card: material image (with
clip-path inset reveal on scroll-in), title, one-line description, and a "View" link
in sage. Cards use 1px greige borders, 4px radius, no drop shadow. Reveal cards with
the shared <Reveal> sheet-lay-down effect, staggered.
```

### 9.5 Home — Brands (pinned horizontal scroll)

```
A "Our Brands" section with a GSAP ScrollTrigger pinned horizontal scroll: as the
user scrolls, 8 brand panels move horizontally across the viewport — LaVision,
Vienna, IFILL, Urban, ColorTrip, Tovin, One Touch, Ultimo. Each panel: brand name in
Zodiak, a texture swatch, a short line, and a "Explore brand" link. Light backgrounds
alternating porcelain/mist. Provide a non-pinned stacked fallback on mobile and for
prefers-reduced-motion.
```

### 9.6 Home — Who we work with + CTA band

```
Section listing who LaVision supports: Interior Designers, Architects, Contractors,
Builders, Turnkey Professionals, Project Consultants, Dealers — as a clean wrapped
list of pills (1px greige border, no fill). Then a full-width CTA band on ink
background with porcelain text: "Become a LaVision dealer" + short line + button
"Apply to become a dealer". Add a magnetic hover on the button.
Include the line: "We are a wholesale & super-stockist company — we do not sell
directly to retail customers."
```

### 9.7 About Us page

```
Build the About page. Hero: eyebrow "SINCE 2012 · GUJARAT", H1 Zodiak "More than most,
for fourteen years." Intro paragraph from the brand: LaVision Laminates is a leading
super stockist and wholesale supplier of interior and decorative products with 14
years of experience and 500+ dealers across Gujarat, operating as super-stockist and
wholesaler (not retail). Then: a "Vision" block ("one-stop interior distribution
partner for Gujarat"), a "Promise — More Than Most" block (More Choice, More Brands,
More Designs, More Availability, More Support, More Opportunities), and a "Why choose
us" grid (14 Years, 500+ Dealers, 8+ Brands, One-Stop Solution, Project Support,
Wholesale Network). Use parallax on one wide showroom image. Reveal blocks with the
sheet-lay-down effect.
```

### 9.8 Products (index + category template)

```
Build the Products index: heading + intro, then the 8 categories as large alternating
rows (image left/right alternating), each with title (Zodiak), description, key uses,
and "View range" link. Image reveals via clip-path inset on scroll; text via
sheet-lay-down. Then build a reusable ProductCategory template page (used for each of
the 8): breadcrumb, category hero, a filter/spec strip, a grid of product/finish
swatches, and a "Request wholesale pricing / find a dealer" CTA (remember: no retail
sales).
```

### 9.9 Brands (index + single-brand template)

```
Build the Brands index showing all 8 brands (LaVision, Vienna, IFILL, Urban,
ColorTrip, Tovin, One Touch, Ultimo) as a grid of cards, each with logo/name in
Zodiak, a texture swatch, and a short descriptor. Hover: subtle lift + swatch
brightens. Then a reusable single-brand template: brand hero, story, finishes/colours
grid, applications (residential/commercial/hospitality/office), and a dealer CTA.
```

### 9.10 Gallery

```
Build the Gallery page: a masonry / justified grid of interior project images with
clip-path mask reveals and gentle parallax (different scroll speeds per column via
ScrollTrigger scrub). Clicking an image opens a lightbox with caption
(brand/product/application). Category filter chips (All, Residential, Commercial,
Hospitality, Office) that animate the grid re-layout with GSAP FLIP-style transitions.
Keep everything on light backgrounds.
```

### 9.11 Virtual 3D Model page (the showpiece)

```
Build the Virtual 3D Model page — the site's centrepiece. Full-width react-three-fiber
canvas: a single large laminate panel the user can orbit (drei OrbitControls) in a
soft, bright studio light. Below, a swatch tray of material thumbnails; clicking one
swaps the panel's texture live (drei useTexture). Add a matte/gloss toggle that
changes the material roughness, and a colour/brand filter. Show a loading indicator
while textures load, cap pixelRatio at 2, and provide an image-based fallback for
mobile / prefers-reduced-motion. Left side: short copy explaining "See any finish in
your space before you order — then find your nearest dealer." CTA: "Find a dealer".
```

### 9.12 Projects / Work

```
Build a Projects page: intro on the turnkey/commercial/hospitality/office work
LaVision supplies. A grid of project case cards (image, title, type, brands used).
Each opens a detail view with a wide hero image (parallax), the brief, products used,
and a small image strip. Reveal with sheet-lay-down + clip-path image reveals.
```

### 9.13 Dealers — Find a Dealer + Become a Dealer

```
Build two dealer pages.
(1) Find a Dealer: intro, a searchable/filterable list of dealers by city/region in
Gujarat (placeholder data), each card showing name, area, phone. Optional embedded
map. Note that end-customers buy through authorised dealers, not from LaVision
directly.
(2) Become a Dealer: a strong pitch (More Opportunities for Our Dealers: more choice,
more brands, more availability, more support) + an application form (business name,
contact person, city, phone, email, current product lines, message). Validate inline,
show a clear success state. Animate the form fields in with a subtle stagger.
```

### 9.14 Showrooms

```
Build a Showrooms page with two location blocks:
Rajkot — LaVision Laminates, Tagore Road, Opposite Dharti Honda Service Center, Near
Shantvan School, GIDC Udhyognagar, Bhakti Nagar, Rajkot, Gujarat 360002 — ☎ 094280 11654.
Ahmedabad — LaVision Laminates, FF-107, Olive Greens, Near Vodafone Tower, Near Gota
Bridge, SG Highway, Gota, Ahmedabad, Gujarat 382481 — ☎ 099798 71032.
Each block: address, phone (click-to-call), hours placeholder, an embedded map, and a
"Get directions" button. Wide showroom image with parallax per block.
```

### 9.15 Contact Us

```
Build a Contact page: heading, short line, a contact form (name, company, city,
phone, email, interest = product/brand/dealer, message) with inline validation and a
success state. Alongside it: both showroom addresses + phones, and social links
(Instagram, Facebook, LinkedIn, WhatsApp). Reinforce: "Wholesale & super-stockist —
retail customers are served through our dealer network." Animate form + info columns
in with sheet-lay-down.
```

### 9.16 Catalogue Download

```
Build a Catalogue Download page: a grid of downloadable PDF cards (per brand and/or
per product category), each with a cover thumbnail, title, file size, and a Download
button. Optional: a lightweight "unlock" step capturing name + phone/email before
download (good for lead capture, since you're wholesale). Animate cards in staggered;
button has magnetic hover.
```

### 9.17 Footer

```
Build the <Footer> per this layout: top row with logo + "More Than Most — One-Stop
Solution for Interior Products", the 14yrs/500+/8+ line, and social icons; plus a
"Become a dealer" mini form (email + Join). Then 4 columns: Explore (About, Products,
Brands, Gallery, Projects, Virtual 3D, Dealers, Contact), Products (the 8 categories),
Brands (the 8 brands), Showrooms (Rajkot + Ahmedabad addresses + phones). Bottom bar:
"© 2026 LaVision Laminates. All rights reserved." · Privacy · Terms, and the line
"Wholesale & Super Stockist — we do not sell directly to retail." Draw an
edge-banding bronze hairline across the top of the footer on scroll (scaleX 0→1).
Backgrounds: porcelain→mist gradient, ink text.
```

---

## 10. Quality checklist (hand this to whoever builds it)

**Performance**
- Lazy-mount both Three.js canvases; static image fallback on mobile / low power.
- Compress textures (WebP/KTX2), cap `pixelRatio` at 2.
- Lazy-load images; use modern formats; preload only the hero.
- Don't block first paint on GSAP or Three.js.

**Accessibility**
- Respect `prefers-reduced-motion` everywhere (wrap animations in `gsap.matchMedia`).
- Visible keyboard focus (use `sage` focus ring).
- Alt text on all images; sufficient text contrast on the light palette (check `slate` on `porcelain`).
- Forms: labels, inline errors, clear success states.

**Responsive**
- Test down to 360px. Pinned horizontal brands → stacked on mobile. Mega-menu → accordion on mobile.

**SEO / business**
- Unique title + meta description per page.
- Schema.org LocalBusiness for both showrooms (name, address, phone).
- Everywhere relevant, state clearly: **wholesale / super-stockist, not direct retail** — sets correct expectations and protects your dealer network.

---

## 11. Assets you need to gather before building

- Logo (SVG preferred) + any brand mark for the 8 sub-brands.
- 20–40 high-res laminate/finish images + interior/showroom photography.
- Real texture maps for the 3D (base colour + roughness, optionally normal for grain) — even 8–12 to start makes the Swatch Wall convincing.
- Catalogue PDFs (per brand/category).
- Dealer list (city/area/phone) for the Find a Dealer page.
- Font files: Zodiak + Satoshi (Fontshare), Geist Mono (Vercel) as WOFF2 in `/public/fonts/`.

---

### Summary of the direction
Light "Limestone & Ink" palette · Zodiak + Satoshi + Geist Mono (no Google Fonts) · GSAP ScrollTrigger + Lenis for smooth scroll, sheet-lay-down reveals, pinned brand scroll, count-up stats, edge-banding hairlines · Three.js Swatch Wall on the hero and a live Material Viewer on the Virtual 3D page. Everything is built from the laminate sheet itself — so it won't look like any other brand's site.