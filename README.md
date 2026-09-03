# Meridian Oxygen — staging site (Phase 1, Fable 5 build v2.0.2)

**Live staging:** https://markspectralvision.github.io/meridian-oxygen-staging/ (noindex; robots.txt Disallow: /)
**Repo:** markspectralvision/meridian-oxygen-staging. **Deploy:** `python3 build.py && git add -A && git commit -m "..." && git push` (GitHub Pages serves `main` at `/`).
**Why GitHub Pages:** Netlify business@ serves `usage_exceeded`, Cloudflare and Vercel are logged out (verified 2026-09-02). Move to Netlify/Cloudflare for launch per the skill's launch checklist.

## Design system
DM Serif Display (headlines) · Manrope (body) · Playfair Display italic (accent). Palette: paper #FBF9F4, cream #F3EFE5, ink #1B1E1C, green #14453A / #1E6B57, oxblood #5A1F26 (CTA), brass #B8925A / #D6B97A. Spacing tokens in `assets/styles.css` (section 104/56, heading gap 14, hero gap 28, img caption 28, text→CTA 20). Effects: reveal, counters, progress bar, Ken Burns, button shine, breathing form glow; all gated by prefers-reduced-motion.

## Pages
| Page | Purpose |
|---|---|
| index | Question hero, packet lead form, bento, evidence band (4 cited figures), second-source section, "what it is not" |
| technology | PSA process, code requirements, purity margin, clinical limits |
| why-on-site | Delivery dependence (FTC, BLS, Linde 10-K), cost exposure calculator, resilience |
| systems | Series M range table, sizing, what ships, containerized |
| about | Heritage stated honestly, three commitments |
| faq | 32 questions in 5 sections, FAQPage schema, sticky chip nav |
| contact | Packet form, email, TODO NAP |

## Pre-launch TODO (client inputs)
- FDA status of the human machines → unlocks Strategy A copy. Until then no regulatory claim anywhere (see WORKLOG).
- Staffed business address, phone (tel: in header CTA + footer + schema), hours, social profile URLs → contact page map, LocalBusiness schema, sameAs.
- Wire `/api/lead` to the CRM (Phase 2). The form shows success only on a 2xx; on failure it shows an honest email fallback. Submit-test before launch.
- Product photography of the real space-gray units to replace generated renders (slots below).
- Buy meridianoxygen.com; flip meta robots to index,follow; remove robots.txt Disallow; bump V.
- Engineering to confirm per-model electrical, footprint, heat rejection, sound (Systems page TODO).

## Photo slot map (data-slot)
hero (index), corridor, unit-front, tech-hero, manifold, pair, why-hero, container, systems-hero, engineer, container-2, about-hero, about-unit, faq-general/technology/why-on-site/systems/buying, contact-hero. All current assets are Higgsfield seedream_v5_pro renders conditioned on the Airnetic product reference (space gray, no wordmark).

## Gates (2026-09-02)
Static 36/38 (two justified FAILs: no address → no map; no hours/socials → no openingHoursSpecification/sameAs). Functional 9/9. Keyword layer 100/100 top terms, top-10 in headline zones. Copy: 0 em dashes, 0 semicolons, 0 prohibited words, no regulatory or savings claims.
