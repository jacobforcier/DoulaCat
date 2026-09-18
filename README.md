# Doula Catherine Forcier — website

A hand-built static site for Catherine Forcier, DONA-certified birth doula in
Manchester, New Hampshire. No build step, no dependencies: the `.html` files
are the source of truth and deploy as-is.

Research behind the design decisions is in [`docs/research.md`](docs/research.md).

## Structure

```
index.html            Home
about.html            Her story, credentials, experience
services.html         Services overview
birth-doula.html      The main service page ($1,200)
pricing.html          Pricing + how families pay (HSA/FSA, NH Medicaid, insurance)
testimonials.html     The five Facebook recommendations, in full
faq.html              Questions families actually ask
contact.html          Consultation request form
assets/css/style.css  Whole design system — colors, type, components
assets/js/main.js     Mobile nav toggle (the only JS on the site)
assets/img/           Optimized photos (JPEG + WebP, two sizes each)
robots.txt, sitemap.xml
```

## Running it locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Before it goes live

Every unresolved item is marked on-page with a yellow dashed **TODO** box so
nothing ships half-finished. Find them all with:

```sh
grep -rn 'class="todo"' *.html
```

### Blocking — the site can't launch without these

1. **Contact form endpoint.** `contact.html` posts to a placeholder Formspree
   URL. Either create a free Formspree form and paste the ID, or deploy to
   Netlify and swap to `data-netlify="true"` (no third party, submissions get
   emailed).
2. **Email address and real Facebook URL.** Both are placeholders in the footer
   of every page.
3. **Domain.** URLs currently point at the GitHub Pages address (see below).
   When a real domain is registered, update the canonical and Open Graph tags in
   `index.html`, plus `robots.txt` and `sitemap.xml`.

### Content Catherine needs to supply

4. **Backup doula arrangement** — what happens if she's at another birth or
   unwell. Nearly every serious client asks; very few doula sites answer it up
   front, so answering it is a real advantage. Currently a soft placeholder in
   the FAQ.
5. **On-call window** — 36 weeks? 38?
6. **Number of prenatal visits included**, and whether the postpartum follow-up
   is a visit, a call, or the client's choice.
7. **Client load** — how many births per month she takes.
8. **Payment plans** and the cancellation/refund policy.
9. **Travel radius**, and whether the fee changes outside it. The footer
   currently names Manchester, Bedford, Goffstown, Hooksett, Concord and Nashua
   — correct or adjust.
10. **Births attended** — a rough number, if she's comfortable naming one.
11. **Whether "VBAC-friendly" is accurate** (it's currently listed on the About
    page as a specialty tag).

### Judgment calls for the two of you

- **Bob Jones University** is named on the About page because it's in her public
  Facebook post and the BSN is a real credential. It's worth a conscious
  decision whether to name the school or just list the degree — the association
  cuts differently with different clients.
- **Testimonial attribution** is first name + last initial. These were public
  Facebook recommendations so republishing is reasonable, but a quick message
  asking each person is courteous, and lets you ask whether they'd rather appear
  under their full name.
- **Additional services.** The site currently sells one thing. If Catherine also
  does postpartum visits, lactation support, childbirth education or placenta
  encapsulation, each should get its own page — separate pages rank for separate
  searches.

## After launch — the things that actually bring clients

In rough order of return on effort:

1. **Google Business Profile.** Complete it fully, add photos, post monthly.
   This is the single highest-value hour available for a local solo doula.
2. **Ask past clients for Google reviews.** The five Facebook recommendations
   already written would do just as much good on Google, where they also feed
   local search ranking.
3. **DoulaMatch profile.** Families search it by due date and travel radius.
   It ranks well and sends referral traffic here.
4. **NH state doula certification.** New Hampshire authorized Medicaid coverage
   for doula care in its 2023 budget and SB 337 (July 2024) created a voluntary
   certification, but implementation was still in progress as of 2026. Getting
   certified as soon as it opens means billing Medicaid from day one. Confirm
   current status with NH DHHS.
5. **A blog, eventually.** Not yet — an abandoned blog is worse than none. But
   local resource posts ("birth centers near Manchester", "questions to ask your
   NH provider") are the best long-term local SEO there is. Three or four
   genuinely useful posts beat twenty thin ones.

## Deploying

### Quickest: GitHub Pages (free, this repo is public)

Settings -> Pages -> under "Build and deployment" set Source to *Deploy from a
branch*, branch `claude/doula-website-research-s9w6rm` (the default branch),
folder `/ (root)`. Save. It goes live in a minute or two at:

<https://jacobforcier.github.io/DoulaCat/>

All paths in the site are relative, so it works correctly under the `/DoulaCat/`
subpath. `.nojekyll` is present so Pages serves the files as-is.

Caveat: this is a public URL. Fine for showing Catherine and getting feedback,
but it's her real name, photos and client reviews on the open web — so treat it
as a preview, and don't link it anywhere until the TODO items are resolved.

### For the real launch

Netlify or Cloudflare Pages, pointed at this repo. No build command, publish
directory is the repo root. Both are free at this size, both attach a custom
domain in a few clicks, and Netlify can handle the contact form natively.

## Design notes

- Palette and type are defined as custom properties at the top of
  `assets/css/style.css`. Change them there and the whole site follows.
- Fonts are Fraunces (headings) and Inter (body), loaded from Google Fonts. The
  site degrades gracefully to Georgia and system sans if they fail.
- Images are served as WebP with JPEG fallback at two widths each. If you add
  photos, match that pattern — page weight is the main thing that makes doula
  sites feel slow, and ~40% of visitors leave a page that takes over 3 seconds.
- All text/background pairs meet WCAG AA contrast. Keep that true if you change
  the palette.
- Professional photographs of Catherine would lift this site more than any code
  change. The two current photos are real and warm, which already beats stock —
  but a proper session is the best money available here.
