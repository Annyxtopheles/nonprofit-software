# Homepage: Trusted Partners, Testimonials, and a Modern Polish

## 1. Trusted Partners section

New section placed just below the hero on the homepage (`/`), so social proof appears early.

- Heading: "Trusted by Mission-Driven Organizations" with a short supporting line.
- Logo row with the three uploaded marks: Bangladeshi-American Society of Professionals, YMCA, The Optimists.
- Logos uploaded to CDN assets, displayed in a responsive row (stacked on mobile, single row on desktop), consistent height with `object-contain`, subtle grayscale that turns full-color on hover, and descriptive alt text.
- No text labels under the logos, matching the existing integration-logo pattern.

## 2. Testimonials section

New section placed after the role-benefits/modules content and before the final CTA.

- Heading: "What Nonprofit Leaders Say".
- Two placeholder testimonial cards (clearly written as illustrative, using plausible nonprofit roles — e.g. an Executive Director and a Development Director) with quote mark accent, quote text, and name/title/organization line.
- Cards use the existing card styling language: rounded corners, soft border, subtle shadow, teal accent, and matching typography scale.

## 3. Modern visual polish

Scoped to presentation only — no copy rewrites beyond the new sections:

- Consistent section rhythm and alternating background treatments (`section-mesh`, `section-tint`, `section-surface`) so the new sections slot into the existing flow.
- Softer card elevation and hover lift on interactive cards.
- Improved heading balance (`text-balance`) and max-width on intro paragraphs.
- Respect `prefers-reduced-motion` for any hover/transition effects.

## Technical notes

- Logos: `lovable-assets create` from the uploaded files, pointer JSON in `src/assets/logos/`, imported in the new component.
- New components: `src/components/home/TrustedPartnersSection.tsx` and `src/components/home/TestimonialsSection.tsx`, both taking the existing `colors` token object used across `src/pages/ControlTower.tsx`.
- Wire both into `src/pages/ControlTower.tsx`; no routing, data, or backend changes.
