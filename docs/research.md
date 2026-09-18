# Doula Website Research

Research conducted 2026-09-18, ahead of designing and building a multi-page site.

## Method & honest caveat

This session's network egress is restricted: search worked, but direct page
fetches to doula sites (`thewebsitedoula.com`, `thelookandthefeel.com`,
`chicagofamilydoulas.com`, `birthstoryboutique.com`, etc.) were all blocked by
the proxy. So the findings below come from search-result summaries of industry
sources — web designers who specialize in birth workers, doula business
coaches, and the directories families actually use — rather than from
first-hand teardowns of individual sites.

That is a real limitation for one thing specifically: I could not verify
pixel-level layout or read the live copy of named sites. Everything about
*structure, content, and strategy* below is well-corroborated across multiple
independent sources. Anything about a specific named site's visual design is
flagged as second-hand.

If you want first-hand teardowns, the fix is to run this from a machine with
open network access, or paste screenshots/URLs into a session and I'll analyze
them directly.

---

## 1. The two archetypes

Doula sites divide cleanly, and they are not built the same way.

**Agency / collective** (Chicago Family Doulas, Birthways, Windy City Doulas,
Chicagoland Doulas, Carolina Doula Collective). Multiple practitioners, a
matching process, broad service menus (birth, postpartum, overnight, newborn
care, placenta encapsulation, lactation, classes). These need team directory
pages, a "how matching works" explainer, and a service-by-service page tree.
They compete on breadth and availability.

**Solo practitioner.** One name, one face, one voice. Competes on *fit* — the
whole site is a long answer to "do I want this specific person in the room
during the most vulnerable hours of my life?" The winning solo sites read as
personal without being self-indulgent.

**A solo doula should not copy agency structure.** It makes a one-person
practice feel thin and corporate. This is the single most common structural
mistake. Your wife's site is the second archetype.

---

## 2. Page architecture that consistently appears

Across sources, the near-universal set:

| Page | Purpose |
|---|---|
| **Home** | Orientation + funnel to consultation. Not a brochure — a router. |
| **About** | The trust page. Usually the second-most-visited page on the site. |
| **Services** | One page *per service*, not one page listing all of them. |
| **Pricing / Investment** | Often merged into Services. See §6. |
| **Testimonials** | Sometimes standalone, always distributed across other pages too. |
| **FAQ** | Heavily recommended; does real sales work. See §5. |
| **Contact / Book a Consultation** | The conversion endpoint. |
| **Blog / Resources** | The local-SEO engine. See §11. |

Two structural points that came up repeatedly and are worth taking seriously:

**Split the services.** A single generic "Services" page where birth,
postpartum, lactation, and classes all live together is explicitly called out
as an SEO and usability failure — "neither Google nor a tired parent can tell
what to do next." Separate pages let each rank for its own search term
("postpartum doula [city]" is a different query from "birth doula [city]") and
let each have its own call to action.

**The About page is a conversion page, not a biography.** Guidance from birth-
worker-specialist designers: do share the personal experience that led to this
work (doula care is framed as a calling, and clients respond to that), but
do *not* narrate your own birth story in detail — it reads as unprofessional
and, more practically, it centers the wrong person. The About page should
pivot from "here's who I am" to "here's what that means for you."

---

## 3. Homepage anatomy

The recurring pattern, top to bottom:

1. **Hero** — warm photograph, a headline naming *who she serves and where*,
   and one primary button. Location in the hero is a recurring recommendation;
   "not saying where you are located" is listed as a top mistake.
2. **Short empathy/positioning block** — speaks to the reader's state ("you
   want to feel prepared, not managed"), not to the doula's credentials.
3. **Services preview** — 2–4 cards linking to the full service pages.
4. **About preview** — photo + 2–3 sentences + link to the full About page.
5. **Testimonials** — 2–3, with names/initials. Trust built fast.
6. **How it works** — a 3-step process (consult → prenatal visits → birth &
   postpartum). This calms people down more than anything else on the page.
7. **FAQ teaser or resource/lead magnet**.
8. **Closing CTA** — repeat the consultation booking.

The repetition of the CTA matters. "Sharing great content but giving no
pathway to work with you" is named as one of the biggest marketing mistakes.

---

## 4. The conversion path

Everything funnels to **one action: booking a free consultation** (variously
"consult," "meet & greet," "connection call"). Two accepted mechanics:

- **Direct calendar embed** (Calendly or similar). Lowest friction, highest
  volume, more unqualified calls.
- **Form first**, then she emails to schedule. Higher friction, but explicitly
  recommended by some as a filter — "weeds out some people who might not be a
  good fit."

**Recommendation for a solo doula:** form-first, but a *short* form (name,
due date, birth location, what you're looking for, how you found me). Due date
is the key field — availability around a due date is the whole ballgame, which
is exactly what DoulaMatch is built around. A solo practitioner has finite
capacity and a full calendar is a real constraint, so light qualification is
worth the friction. Keep the form on its own page *and* embedded at the bottom
of every service page.

Also standard: a lead magnet tied to an email list (birth plan worksheet,
hospital bag checklist, "questions to ask your provider" PDF). Most families
interview more than one doula and take weeks to decide — email is how you stay
present during that window.

---

## 5. FAQ does real sales work

Families arrive with a specific, well-documented list of questions. Multiple
"questions to ask before hiring a doula" guides converge on:

- What's your philosophy of support? How do you advocate without overstepping
  with medical staff?
- What comfort techniques do you use (positioning, counterpressure, breathing,
  visualization)?
- What happens if labor goes differently than planned — interventions,
  transfer, cesarean?
- What's your **backup** arrangement if you're unavailable or at another birth?
- Training, certification, specialized skills (VBAC, hypnobirthing, twins,
  high-risk)?
- What exactly is included, and what does it cost?
- How many clients do you take per month?
- When do you go "on call" for me?

Answering these on the site does two things: it pre-qualifies people so the
consultation is about *fit* rather than logistics, and it ranks — these are
literal search queries. The backup-doula question in particular is one nearly
every serious client asks and comparatively few sites answer up front.

---

## 6. Pricing: put it on the site

This is contested in the industry but the weight of advice leans clearly one
way: **publish pricing.**

The arguments that recur:
- Families of childbearing age expect to see prices and resent having to call
  or email to get them. "Not enough information about services… including your
  price" is listed among the top website mistakes.
- It saves both sides from consultations that die on budget.
- It reads as professional and confident.

The counter-argument (fewer sources, still real) is that value is easier to
convey in conversation and a number out of context loses people.

**Practical middle path used by good sites:** show package tiers with a clear
"starting at" or full price, itemize what's included so the number has
context, and immediately follow it with payment-access options (§12). If she's
still certifying or building a client base, the recommended play is to list
the price she wants to be charging within a year and offer a discount off it,
rather than anchoring low permanently.

---

## 7. Visual design: what "modern and homey" means concretely

Second-hand (I could not view these sites directly), but consistent across
branding sources:

- **Palettes:** muted/earthy — clay, terracotta, warm sand, muted sage or
  agave green, cream, soft ivory, with an occasional deep grounding tone
  (indigo, deep green). Trauma-informed practices skew to soft pinks, beige,
  mossy tones to signal emotional safety.
- **Type:** the current pairing is a warm **serif** for headings (reads as
  traditional, trustworthy, lineage-of-knowledge) with a clean, friendly
  **sans-serif** for body (approachable, contemporary). Airy scripts show up
  in logos but are a readability problem in body copy — avoid.
- **Photography is the single biggest lever.** Real photographs of her, and
  real (permissioned) client/birth photography, beat any amount of design
  polish. Stock photos of generic smiling pregnant women actively hurt — they
  signal that there's nothing real to show.
- **Generous whitespace, soft rounded corners, gentle imagery.** "Homey" here
  means warm and unhurried, not cluttered or country-cute.

One counter-current worth knowing: broader 2026 design commentary notes a
shift away from very muted palettes toward more confident, higher-contrast
color. My read is that the birth-work space is a warmth-and-safety category
and the muted direction remains correct — but a site can be warm *and* have
real contrast. Washed-out, low-contrast text is both an aesthetic problem and
an accessibility failure.

**Performance is part of design here:** ~40% of visitors abandon a page that
takes over 3 seconds. Big unoptimized hero photography is the usual culprit on
doula sites. This argues for a hand-built static site with properly sized,
modern-format images.

---

## 8. Trust signals

In rough order of how much they matter:

1. **Testimonials from real families**, with at least first names, ideally
   birth context ("first baby, hospital VBAC"). Distributed across pages, not
   quarantined on one.
2. **Photographs of her.** Face, more than once.
3. **Certification** — DONA International and CAPPA are the most recognized;
   DoulaMatch even displays verified certification images. Name the
   certifying body, not just "certified."
4. **Specialized training** — VBAC, hypnobirthing, twins, trauma-informed,
   lactation. These are search terms as well as trust signals.
5. **Backup doula arrangement**, stated plainly.
6. **Google reviews.** Doubles as the strongest local-SEO signal (§10).
7. **Clear service area**, named by city/region.

---

## 9. Inclusive and affirming language

A visible, well-established standard in this field, not a niche. Expected
practice: gender-affirming language, respect for chosen names and pronouns,
acknowledgment of non-traditional family structures, and a trauma-informed
posture. LGBTQ+-affirming care is a searched-for specialty with its own
directories (Queer Doula Network, OutCare), and several site-strategy sources
recommend content targeting specific communities — LGBTQIA+ families, BIPOC
families, high-risk pregnancies, VBAC, water birth.

Practical note: she should decide how she wants to handle this, since it's her
voice and her practice. Common approach is inclusive-by-default language
("birthing people" / "families" alongside "mothers" rather than replacing it)
plus an explicit welcome statement. It shouldn't be bolted on as a badge.

---

## 10. Local SEO is the highest-leverage channel

For a solo doula, this is where clients come from. The signals that matter:

- **A complete Google Business Profile** — name, service area, hours,
  description, photos, and a post or photo added monthly to signal activity.
  This is probably the single highest-ROI hour she can spend.
- **Steady review generation.** Reviews rank *and* convert.
- **City/region named naturally across the whole site** — in the hero, in
  service pages, in blog posts — not buried in the footer.
- **A page per service, each targeting its own query** (§2).
- **Location-qualified content**: "What to look for when hiring a doula in
  [City]", "[City] hospital birth guide", "Birth centers near [City]".

Also worth doing: profiles on **DoulaMatch** (4,000+ doulas, 30,000+
testimonials, organized around due-date availability and travel radius) and
similar directories. They rank well, and they send referral traffic to her
site. The site and the directory profile reinforce each other.

---

## 11. Blog strategy

The blog is not a diary; it's the local-search surface area. What's recommended:

- **Local resource posts** — featuring local midwives, birth centers, prenatal
  yoga, pediatricians, parent meetups. Ranks locally, builds referral
  relationships with the businesses you mention.
- **Client birth stories** (with permission). Highest emotional conversion of
  any content type.
- **Practical downloads** — birth plan templates, checklists, prenatal-visit
  question lists. These double as lead magnets.
- **Direct answers to real queries** — mine Google autocomplete and "People
  also ask" for "when I'm pregnant…", "postpartum recovery…".

Realistic expectation: a post every 2–4 weeks compounds. Sporadic bursts don't.
Better to ship the site with 3–5 genuinely useful posts than an empty blog.

---

## 12. Payment & access — an underused differentiator

Most doula sites handle this badly or not at all, and it's a recurring
objection that kills deals.

- **Medicaid:** as of March 2026, reportedly 26 states + DC cover doula
  services, with ~7 more implementing. Labor/delivery support reimburses
  roughly $459–$1,500 depending on state. **Verify her state directly** — this
  landscape changes fast and the details (visit counts, enrollment
  requirements) vary a lot.
- **HSA/FSA:** generally usable for doula care; often needs a letter of
  medical necessity from a primary-care provider. She needs to be able to
  issue a receipt or superbill.
- **Private insurance:** mostly not covered. Only Louisiana and Rhode Island
  required private-insurer coverage as of April 2025.
- **Payment plans** — widely offered, rarely advertised. Worth stating.

A clear, honest "How to pay for doula care" page is a genuine competitive
advantage and strong SEO. Most sites don't have one.

---

## 13. Common mistakes to avoid

Compiled from the "mistakes" sources:

1. Not stating location / service area.
2. Vague service descriptions — "parents are searching for clarity."
3. No pricing at all.
4. No clear call to action, or CTAs buried.
5. One catch-all Services page.
6. Slow-loading pages (oversized images).
7. Generic messaging that doesn't speak to a specific ideal client.
8. Stock photography instead of real photos.
9. Hard-to-navigate structure.
10. An abandoned blog with three posts from 2022 — worse than no blog.

---

## 14. Platform recommendation

Industry consensus for non-technical doulas: Squarespace (design quality, easy),
Showit (maximum visual freedom, popular with photography-heavy birth brands),
WordPress (most room to grow), Wix (easiest, least headroom). There's a healthy
market in Squarespace 7.1 doula templates.

**For this project I'd recommend a hand-built static site** (clean HTML/CSS
with a light build step, deployed to Netlify/Cloudflare Pages/GitHub Pages),
because:

- It's dramatically faster than any builder — directly addresses the 3-second
  abandonment problem.
- Full design control, so "modern and homey" can be exactly her brand rather
  than a template everyone else is also using.
- Effectively free hosting vs. ~$200+/year.
- Clean, correct SEO markup and local business schema.

The honest tradeoff: **she can't edit it herself without help.** If she wants
to write blog posts independently, we should either pair the static site with a
git-based CMS (Decap/Sveltia — free, gives her a real admin UI), or accept that
Squarespace's self-editability is worth its performance and cost penalties.
This is a decision worth making before I build, not after.

---

## 15. Proposed sitemap

```
/                        Home
/about                   Her story, philosophy, certifications, photos
/services                Overview + routing
  /services/birth-doula        Birth support package
  /services/postpartum-doula   Postpartum support
  /services/[additional]       Whatever else she offers
/pricing                 Packages, what's included, payment options
/how-to-pay              Medicaid / HSA / FSA / payment plans
/testimonials            Client stories
/faq                     The question list from §5
/blog                    Local resources, birth stories, guides
/contact                 Consultation request form
```

Plus: mobile-first responsive, WCAG-AA contrast, LocalBusiness schema markup,
Google Business Profile linked, and real page titles/meta descriptions with
her city in them.

---

## 16. What I need before building

1. **Business name**, and whether there's an existing logo/colors from the
   Facebook page.
2. **City / service radius.** This drives the entire SEO strategy.
3. **Services offered**, and which she wants to lead with.
4. **Certifications** and specialized training, with certifying bodies.
5. **Pricing** — and whether she's willing to publish it.
6. **Photos.** Professional photos of her are the highest-impact asset. If
   there aren't any, a photo session is the best money she can spend on this.
7. **Testimonials** — anything from the Facebook page we can carry over.
8. **Her voice.** A paragraph in her own words about why she does this work
   is worth more than anything I'd write for her.
9. **Domain name** — registered or not?
10. **Does she want to edit it herself?** (See §14.)

---

## Sources

- [10 Essential Elements For A Successful Doula Agency Website — The Look & The Feel](https://www.thelookandthefeel.com/blog/10-essential-elements-for-a-successful-doula-agency-website)
- [The Ultimate Doula Website Guide — The Website Doula](https://thewebsitedoula.com/the-ultimate-doula-website-guide/)
- [Expert tips for your doula website About Page — The Website Doula](https://thewebsitedoula.com/about-page-doula-website/)
- [Doula Cost: Should I include my doula fees on my website? — The Website Doula](https://thewebsitedoula.com/include-doula-cost-on-your-website/)
- [Doula Keywords for SEO — The Website Doula](https://thewebsitedoula.com/seo-for-doulas-keyword-guide/)
- [Google Business Profile for your Doula business — The Website Doula](https://thewebsitedoula.com/doula-google-business-page/)
- [10 Mistakes Doulas Make on Their Websites — Doula Business](https://doulabusiness.com/10-mistakes-doulas-make-on-their-websites/)
- [How to Accept HSA and FSA Funds as a Doula — Doula Business](https://doulabusiness.com/accepting-hsa-and-fsa-funds-as-a-doula/)
- [The Most Common Doula Marketing Mistakes — The Booked Out Doula](https://thebookedoutdoula.com/the-most-common-doula-marketing-mistakes-and-how-to-overcome-them/)
- [A Doula's Guide to SEO — Birthworker.com](https://www.birthworker.com/blog/a-doulas-guide-to-seo-5-easy-tips-to-find-more-doula-clients-through-your-website)
- [How to Price Your Doula Packages — Birthworker.com](https://www.birthworker.com/blog/how-to-price-your-doula-packages-and-pay-yourself-what-youre-worth)
- [How to Onboard Your Doula Clients from Consultation to Contract — Birthworker.com](https://www.birthworker.com/blog/how-to-onboard-your-doula-clients-from-consultation-to-contract)
- [A Doula's Guide to SEO — Bornbir](https://www.bornbir.com/blog/seo-doula)
- [What States Cover Doula Care Through Medicaid in 2026? — Bornbir](https://www.bornbir.com/blog/medicaid-coverage-of-doula-care)
- [Top 7 Doula Listing Sites Comparison — Bornbir](https://www.bornbir.com/blog/top-7-doula-lists-sites)
- [State Trends in Medicaid Coverage of Doula Services — NASHP](https://nashp.org/state-trends-in-medicaid-coverage-of-doula-services/)
- [Doula Medicaid Reimbursement by State — Georgetown CCF](https://ccf.georgetown.edu/2025/06/03/doula-medicaid-reimbursement-rates-by-state/)
- [30 Blog Ideas for Doulas — Bebo Mia](https://bebomia.com/blogging_for_doulas/)
- [Doula Blog Ideas — Bloom Birth Studio](https://bloombirthstudio.com/doula-blog-ideas)
- [Questions To Ask A Doula Before Hiring — Boober](https://getboober.com/blog/the-boob-1/questions-to-ask-a-doula-and-yourself-before-hiring-932)
- [The Best Questions to Ask When You Interview a Doula — Pittsburgh Birth Services](https://www.pittsburghbirthservices.com/blog/questions-to-ask-in-a-doula-interview)
- [DoulaMatch.net](https://doulamatch.net/)
- [Discover Doulas](https://www.discoverdoulas.com/)
- [DONA International](https://dona.org/)
- [CAPPA](https://www.cappa.net/)
- [Gender Affirming Practices — Birthing Advocacy Doula Trainings](https://www.badoulatrainings.org/blog/gender-affirming-practices)
- [The LGBTQ+ Community Deserves Access to Inclusive and Affirming Doula Care — National Health Law Program](https://healthlaw.org/the-lgbtq-community-deserves-access-to-inclusive-and-affirming-doula-care/)
- [The Ultimate Guide to Doula Branding — Mukt Design Studio](https://www.mukt.ca/blogs/why-doulas-need-a-brand)
- [Graphic Design Trends 2026 — Hemisphere](https://www.hemispheredm.com/graphic-design-trends-2026)
- [Considering Wix for your Birth Practice Website? — The Website Doula](https://thewebsitedoula.com/wix-birth-website/)
- [Chicago Family Doulas](https://chicagofamilydoulas.com/), [Birthways](https://birthwaysinc.com/), [Windy City Doulas](http://www.windycitydoulas.com/), [Chicagoland Doulas](https://www.chicagolanddoulas.com/) — agency structure examples
