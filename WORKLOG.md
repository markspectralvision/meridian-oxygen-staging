# Meridian Oxygen staging build — work-log
Route: **B, direct build on Fable 5** (codex/Route A not used; spec discovered from the week's research; no ChatGPT Business seat). Build root: this folder. Deploy target: GitHub Pages (Netlify business@ serves usage_exceeded; wrangler and vercel logged out, verified 2026-09-02).

```
PREFLIGHT ECHO: fable5-web-design v2.0.2
Reference files READ this session: SKILL.md (full), qc-principles-and-fixes.md (A, B, C, F, G, H, I, J), spacing-scale.md (full), gates/README.md (full), gates/gate-manifest.example.json (full), hero-lead-form.md (anatomy + glow), keyword-layer.md (input + placement), one-shot-template-ANY-industry.md (universal prompt), contact-page.md (anatomy), faq-page.md (sourcing + anatomy)
Gate-manifest keys this build is gated on: required_pages, hero_question, nav_order (custom), lead_form, faq_page, seo_completeness, hero_anatomy, no_letter_markers, image_uniqueness, star_glyph_honesty, forbidden_terms, logo (generated) + logo_wordmark_text, cdn fonts-only, no_em_dashes, compliance, keywords (top_headline 10, top_required 100), contact (no hours, no socials), functional (scroll effects, counters, reveal, reduced motion, mobile overflow, header_geometry, logo_rendered_height, calculator)
Mandatory systems (checked = planned; omissions justified):
  [x] Hero anatomy: question H1 + statement + 3 benefit bullets + CTA + badge. BADGE = an honest "Built on a platform generating oxygen since 2013" heritage badge, NOT a reviews badge: there are zero reviews for a brand that does not exist yet, and reviews are never fabricated.
  [x] Hero lead form per hero-lead-form.md: H3 with a matrix term, First/Last/Phone/Email, 5 researched capsules + Other, possessive CTA, glow. WIRING: posts to /api/lead; there is NO CRM sub-account yet (Phase 2 per proposal SV-P-2026-0902). The handler shows success ONLY on a 2xx response; on failure it shows an honest email fallback. No silent lead loss (memory: fable5-port-silent-lead-loss). PRE-LAUNCH TODO.
  [ ] Brand-asset marquee / press strip: OMITTED. No press coverage exists, no partner or standards logos may be shown (NFPA/USP/FDA marks would imply certification the client has not confirmed). Nothing typeset, nothing fabricated.
  [ ] Full interlinking mesh (services x areas): ADAPTED. No service silo and no areas for a national B2B manufacturer; the mesh is applied to the four content pages (Technology, Why On-Site, Systems, FAQ) which all cross-link with H4-wrapped anchors.
  [ ] Area child pages: OMITTED. National B2B, no local service areas, no GBP (STARTUP MODE per Phase 0).
  [x] FAQ page spec: H2 sections (General, The Technology, Why On-Site, Systems, Buying) with featured images, H3 questions, FAQPage schema, H4 links to pages. Questions sourced from the verified STORM research (buyer objections, purchasing-agent lens) and matrix gap terms; PAA harvest logged as a Phase 2 refresh.
  [ ] GBP review carousel: OMITTED. No GBP, no reviews. Never fabricated.
  [x] Keyword layer: Content Maxima matrix run 2026-09-02 (seed: hospital oxygen generator), inputs/keywords.xlsx + keywords.json; top 100 woven, irrelevant terms (portable oxygen generator, oxygen mask, oxygen saturation, ventilator) logged as not placed or placed only in FAQ context where honest.
  [x] Staging noindex guards: robots.txt Disallow: / + explicit meta robots noindex,nofollow on every page. (_headers X-Robots-Tag is not supported by GitHub Pages; noted.)
  [ ] Phone-is-CTA: OMITTED. The brand has no phone number yet; inventing one is banned. Header CTA = "Request the Value Analysis Packet" (the researched first conversion for this buyer). tel: added the day a number exists. Manifest phone key omitted.
  [ ] Blog with 3 seed posts: DEFERRED to the Phase 2 content programme per the approved proposal scope (six pages + FAQ).
```

## Decisions
- Palette pivots from the category (blue): deep green, oxblood, brass, cream, charcoal. From the 20 Logo Test (23 competitor marks, 2026-09-02).
- Logo: built SVG, `<text>` wordmark MERIDIAN (DM Serif Display) with tall-I treatment via a hairline overlay + OXYGEN (Manrope, tracked). Follows Round 2 direction 03.
- Signature interactive moment: Oxygen Cost Exposure calculator (visitor's own cylinder count and price, projected at the verified BLS PPI trend). No invented savings.
- Claim discipline: Strategy B throughout (client file MGO-001 section 7).

## Gate log (2026-09-02)
- Static gate: 36/38 target. Two FAILs are justified and stay: `contact_map_and_directions` (no business address exists yet; a map of nothing is a fabrication) and `org_schema_on_contact_and_home` (the check requires openingHoursSpecification and sameAs; the company has no hours and no profiles yet, and inventing either is banned). Both flip the day Darrin supplies NAP, hours and profile URLs.
- Word scan: 0 em dashes, 0 semicolons in body copy, 0 absolute-tier prohibited words, no regulatory or savings claims, "you/your" on every page.
- Keyword layer: top 10 all in headline zones; top 100 placement tracked to 100/100 (irrelevant terms placed only inside honest FAQ answers: portable oxygen generator, oxygen mask, oxygen saturation, ventilator).
