# Day 17 — Mow N Go Garden & Landscape Services

An **independent, unofficial frontend design concept** for a real business in Droylsden, Manchester. No business relationship, endorsement or permission is implied.

## Run and deploy

Open `index.html` in a browser, or run VS Code Live Server. Upload the contents of this directory to the root of an appropriately named GitHub repository and enable GitHub Pages from the main branch / root. All assets are relative; there is no build step, package manager, external font, JavaScript framework, backend, paid API or externally hosted image dependency.

> IMPORTANT: This is a prospecting demo, **not a publish-ready official customer website**. Discuss the design with the owner, obtain permission to use the brand, and replace artwork with the business's own approved photography before offering it as their actual portfolio. `noindex, nofollow` is intentional for the demo and should be reconsidered only with the owner's approval.

## Visual assets and intellectual honesty

The hero and garden inspiration section use **three locally hosted Pexels reference photographs**, downloaded and optimized to WebP. They show design possibilities only and are **not Mow N Go projects**. The before/after comparison retains the original `garden-before.svg` and `garden-after.svg` concept illustrations; it is not a documented customer transformation. No completed project, photograph, transformation or staff portrait is claimed as Mow N Go's work. Replace reference imagery with owner-provided, approved project photographs before any real client launch.

Reference image sources (Pexels License; please retain these credits for provenance):
- `assets/images/garden-hero-reference.webp`: https://www.pexels.com/photo/residential-house-with-a-patio-in-the-backyard-17240696/
- `assets/images/patio-reference.webp`: https://www.pexels.com/photo/patio-with-seats-and-potted-plants-14517007/
- `assets/images/lawn-reference.webp`: https://www.pexels.com/photo/green-grass-in-the-garden-lawn-14399431/

The standalone `garden-paving-reference.webp` is an additional optional image sourced from https://www.pexels.com/photo/sunny-garden-patio-with-stone-pathway-in-bahia-36394729/; it is not used as proof of work or in the comparison slider. The photo files are embedded in GitHub; the website does not hotlink an image service.

Photography to request from the owner: 1 hero landscape photograph of an attractive completed UK garden; 1 legitimate pair of *the same project* before/after from comparable angles; at least 4 landscape photos of independently identifiable real projects; 1 genuine team/work photo if available. Ask for publishing permission. Save optimized WebP/AVIF/JPEG copies to `assets/images/` and update the local paths and truthful alt text in `index.html`.

## Verified business information

Public business references, reviewed 25 September 2026:

- Business name and location, direct WhatsApp/Instagram/Facebook links: https://linktr.ee/mowngogardenservices
- Contact telephone **07460 284744**, free quote offered, domestic and commercial services, industry experience and listed services: https://www.yell.com/biz/mow-n-go-garden-and-landscape-services-manchester-901760574/
- A separate directory lists the business in Droylsden: https://www.spadeshire.co.uk/gardeners/manchester/mow-n-go-garden-landscape-services

The site does not publish inferred coverage areas beyond its Manchester base, invented prices, customer/project counts, unsourced testimonials or unverified accreditation. Phone and WhatsApp should be confirmed with owner before an official launch. Direct phone is `tel:+447460284744`; WhatsApp is `https://wa.me/447460284744`.

## Interaction overview

- Mobile full-screen navigation with focus handling, Escape close, body scroll lock and responsive breakpoint reset.
- Reveal-on-scroll sections using IntersectionObserver; no-JavaScript and prefers-reduced-motion fallbacks.
- Hover motion, original graphic services, accessible anchor navigation and a mobile quote bar that hides while the quote form is visible.
- Keyboard- and touch-operable before/after concept illustration range input.
- Service selection prefill; required name, UK-postcode and service validation; user-driven WhatsApp deep link. **The form does not send, store or collect submissions itself.** The visitor must send the message in WhatsApp.

## Known limitations / launch checklist

- This design concept intentionally uses illustration, not authentic completed-project photos. The real before/after photo feature must not be represented as proof until owner-supplied photos are approved.
- The heading typeface uses locally available system sans-serif plus Georgia italics; optional licensed brand fonts can be added with suitable rights at owner launch.
- The project has no backend or analytics; no actual delivery of the WhatsApp message can be guaranteed before the visitor presses Send.
- Check owner permission, review wording, actual service coverage and business contact numbers before official launch.
- Test on current mobile devices, desktop browsers and real WhatsApp installation; the automated local browser QA only verifies rendering/interaction of the frontend, not third-party delivery.
- Public frontend code/assets cannot be made uncopyable. Control GitHub write access and keep secrets off the client; there are no secrets in this project.
