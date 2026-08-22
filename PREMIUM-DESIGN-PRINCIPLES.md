# Making LaVision look premium — the real rules

Your build is technically fine. What keeps it at "nice template" instead of
"premium brand" is not features — it's a lack of restraint. Premium is achieved
by REMOVING, not adding. Apply these to every page. The rewritten Brands.jsx in
this folder is the reference implementation.

## The 7 rules

1. MATERIAL IS THE HERO. Big photography carries every page; the UI stays quiet.
   Your 21 showroom photos are your best asset and were barely used. Make images
   large (full-bleed or 60%+ of the row). Colour comes FROM the materials, not
   from pastel boxes.

2. RESTRAIN THE COLOUR. Ink + warm neutrals (cream/sand) do 95% of the work.
   The hot magenta (#E6329B) appears ONCE per screen as punctuation — a hover
   link, a single index number — never as big fills or every button. Saturated
   magenta as a primary fill reads "candy", which fights premium.

3. KILL THE CHROME. Remove bordered cards, chips, pills, badges, and sparkle
   icons. Hierarchy comes from type scale and whitespace, not from boxes. A row
   with a hairline divider beats a card with a border + shadow every time.

4. MODERATE THE RADIUS. Drop the rounded-[40px]/[48px]/pill-everything. Use
   rounded-lg (8px) on images and small radii on controls. Heavy rounding reads
   friendly/consumer; architectural brands stay closer to sharp.

5. REFINE THE TYPE. Headlines go BIGGER and LIGHTER (font-medium, tight
   tracking -0.02 to -0.03em), not heavier. Body text in a soft ink/65 grey, not
   full black. One oversized editorial headline per page. Italics for the accent
   word instead of colour.

6. BIG/SMALL CONTRAST + WHITESPACE. Everything the same size = template. Make the
   headline huge, the meta tiny, and leave generous empty space between sections.
   Tension and air are what read as "designed".

7. SHOW, DON'T LABEL. Delete self-descriptions like "NON-BOXY ARCHITECTURAL
   ARCHES" and cut the mono eyebrow labels to one per page. Confidence = silence.

## Global find-and-replace (lifts every page at once)
- rounded-[40px], rounded-[48px], rounded-3xl on cards  ->  rounded-lg / remove
- pastel fills (bg-pinkP/skyP/limeP as big card backgrounds)  ->  bg-cream + hairline
- bg-pink buttons everywhere  ->  ink buttons; keep ONE pink moment per page
- font-bold / font-semibold headings  ->  font-medium, tighter tracking
- <Sparkles/> icons in eyebrows  ->  delete
- chip/pill lists  ->  plain inline text separated by  ·

## Honest note
Rules 1-7 will take the site from ~3/10 to ~6-7/10 on brand feel. The last mile to
a true awwwards look is taste (exact spacing, image crops, rhythm) — worth a few
hours of a real art director AFTER these changes, using the working code + your
showroom photos.
