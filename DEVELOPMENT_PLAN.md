# AutoXpert Group — Development & Delivery Plan

**Document purpose:** A client-ready walkthrough of phases, features, technical approach (including Google Calendar booking), timelines, dependencies, and handover.  
**Design baseline:** Your [Lovable preview](https://id-preview--c631e0e3-1717-4a97-8856-3ca8ed82609a.lovable.app/) (dark theme, red accent, “workshop precision / mobile convenience” narrative).  
**Content reference:** [Mobile AutoCare](https://mobileautocare.com.au/) — service breadth, trust signals, and “we come to you” positioning (superset captured on the marketing site; pricing and legal copy remain yours).

---

## Executive summary

We will deliver a **premium, motion-forward** public website for **AutoXpert Group**, with **mobile mechanic** as the hero proposition, **full mobile responsiveness**, and a **booking system** that integrates with **Google Calendar** on **Google Workspace Business Standard** (with reschedule/cancel rules and notifications).  

This repository includes a **Vite + React + Tailwind v4 + Framer Motion** starter that matches your palette and elevates animation/micro-interaction; you can either **continue in Lovable** (design iteration) or **develop here** and deploy to Vercel/Netlify/Cloudflare Pages.

---

## How to get your Lovable project code

Lovable projects are standard **React + TypeScript + Tailwind** (often with shadcn/ui). Recommended path:

1. In Lovable: open **Project settings** → **Integrations** → **GitHub** → **Connect GitHub** and create or select a repository.  
2. After sync, **clone** the repo to your machine (`git clone …`).  
3. **Secrets** (API keys, OAuth client secrets) are **not** exported; configure them only in your host’s environment variables.

Official guidance: [Lovable — Code export & GitHub](https://lovable.dev/faq/code-export) and [Connect project to GitHub](https://docs.lovable.dev/integrations/github).

If GitHub is not an option, use Lovable support for export alternatives: [Export / download code FAQ](https://lovable.dev/faq/code-export/export-download-code).

---

## Product goals

| Goal | Success criteria |
|------|------------------|
| Premium brand feel | Dark base, chrome/silver highlights, red accent, restrained typography, subtle grille/honeycomb textures, polished motion |
| Mobile-first | Readable tap targets, performant hero, stacked layouts, tested on iOS Safari / Chrome Android |
| Core story | “24/7 mobile mechanic” and “we come to you” above the fold; workshop escalation clearly explained |
| Services | All reference-site categories **plus** expanded diagnostics, batteries, engine, fleet, EV/hybrid |
| Booking | Customer can book/reschedule/cancel within policy; events sync to **Google Calendar**; confirmations/reminders |
| Trust & conversion | Clear phone CTA, optional live chat later, testimonials, service area, transparent process |

---

## Service catalogue (marketing site)

**From Mobile AutoCare (covered on site):** mobile car servicing (minor, tune-ups, handbook/logbook, aircon, transmission), EV & hybrid servicing/repairs, mobile repairs (brakes, clutches, timing belts, water pumps, aircon), fleet maintenance, workshop for larger jobs, inspections (pre-purchase, warranty, lease, pre-sale), diesel & 4WD, caravan & trailer mechanical/electrical.

**From your Lovable direction (emphasis):** logbook servicing, diagnostics, brakes & batteries, fleet care, “we come to you” rolling workshop story.

**Enhancements beyond reference:** structured **diagnostics & electrical** pillar, explicit **engine repairs** path (on-site vs workshop), **compliance-oriented fleet** wording, clearer **EV/hybrid** safety messaging (high-voltage aware).

---

## Phased plan (recommended)

### Phase 0 — Discovery & assets (3–7 days)

- **Brand:** Final logo lockups, exact red hex, legal entity name for footer.  
- **Photography:** Branded ute hero + gallery (place `public/images/ute-hero.jpg` in this repo).  
- **Copy:** Service area suburbs, hours, warranty statement, payment methods, pricing disclaimers (avoid copying competitor numbers verbatim).  
- **Domains & email:** Confirm domain registrar; Workspace admin access.

**Deliverables:** Content doc, image set, sitemap approval.

---

### Phase 1 — Design system & UI shell (1–2 weeks)

- **Tokens:** Colors, type scale, spacing, radii, elevation, focus rings (accessibility).  
- **Components:** Header, hero, stats, service cards, process, testimonials, footer, CTA strip.  
- **Motion:** Scroll reveals, reduced-motion support, button shimmer, marquee discipline (pause on hover optional).  
- **Responsive:** Breakpoints, nav (mobile drawer if needed).

**Deliverables:** Figma or in-code design system, static pages in staging.

---

### Phase 2 — Marketing pages & SEO (1–2 weeks)

- **Pages:** Home, Services (hub + optional detail pages), About, Contact/areas, FAQ, Privacy, Terms.  
- **SEO:** Meta titles/descriptions, Open Graph, JSON-LD (`LocalBusiness` / `AutomotiveRepair`), sitemap, `robots.txt`.  
- **Performance:** Image formats (WebP/AVIF), lazy loading, font subsetting.

**Deliverables:** Lighthouse baseline report, live staging URLs.

---

### Phase 3 — Booking UX (1 week, parallel with Phase 4 backend)

- **Flow:** Service type → vehicle → location → time slot → contact → confirmation.  
- **Policy UI:** Cancellation window, reschedule rules, SMS opt-in.  
- **Admin:** Internal view of bookings (could be Google Calendar only at MVP).

**Deliverables:** Clickable prototype + API contract for backend.

---

### Phase 4 — Google Calendar integration (2–4 weeks)

**Objective:** Bookings create/update/delete **Google Calendar** events on a dedicated calendar (or resource) in the client’s **Google Workspace** domain, with **customer notifications**.

**Recommended architecture (robust, auditable):**

1. **Backend** (Node on Cloud Run, Fly.io, Railway, or Vercel serverless with careful timeout limits):  
   - Stores bookings in a **database** (Postgres) as source of truth.  
   - Uses **Google Calendar API** with a **Workspace service account** + **domain-wide delegation** to impersonate `bookings@autoxpertgroup.com.au` (example), **or** OAuth 2.0 refresh token for a dedicated “robot” user calendar.  
   - On create/update/cancel: call Calendar API (`events.insert`, `events.patch`, `events.delete`) and persist `googleEventId`.

2. **Why not “browser-only” Google sync?**  
   Exposing calendar write access from the browser is unsafe; OAuth secrets must live server-side.

3. **“Real-time” interpretation:**  
   - **Near real-time:** Webhook is not native to Calendar for all changes; use **polling** (e.g. every 1–5 minutes) or **push notifications** via Google Calendar API **watch** channels (more complex, higher ops). For SMB booking, **DB-first + Calendar sync** is standard: user sees confirmed slots from DB; calendar reflects within seconds of API success.

4. **Reschedule / cancel:**  
   - Customer link with signed token (JWT) or magic link email → backend validates policy → updates DB + Calendar.

5. **Notifications:**  
   - **Email:** Transactional provider (Resend, SendGrid, Postmark) — booking confirmed, changed, cancelled, reminder T-24h / T-1h.  
   - **Calendar invites:** Add customer email as **attendee** on the event (they get native Google invite).  
   - **SMS (optional):** Twilio/MessageMedia — opt-in only.

**Workspace prerequisites:** Google Cloud project, Calendar API enabled, consent screen (internal if Workspace-only), admin approval for scopes.

**Deliverables:** Working staging booking → event visible in Google Calendar; runbook for rotating credentials.

---

### Phase 5 — Hardening & launch (1 week)

- **Security:** Rate limits, CAPTCHA on form, audit logs, PII handling.  
- **Monitoring:** Uptime, error tracking (Sentry).  
- **Legal:** Privacy policy for booking data and email storage.

**Deliverables:** Production deploy, DNS, SSL, handover session.

---

### Phase 6 — Post-launch (optional)

- **Reviews:** Google Business Profile review link / schema.  
- **Paid ads** landing variants.  
- **Fleet portal** (login) for larger clients.

---

## Delivery timeline (indicative)

| Phase | Duration | Depends on |
|-------|----------|------------|
| 0 | 3–7 days | Client assets & copy |
| 1 | 1–2 weeks | Design sign-off |
| 2 | 1–2 weeks | Copy finalisation |
| 3 | ~1 week | UX approval |
| 4 | 2–4 weeks | Google Cloud + Workspace admin access |
| 5 | ~1 week | DNS + final QA |

**Total (typical):** ~8–12 weeks end-to-end with calendar integration; **4–6 weeks** for marketing site only (Phases 0–2 + partial 5).

---

## Roles & responsibilities

| Area | Owner |
|------|--------|
| Copy, pricing, legal | Client |
| Brand assets | Client |
| Workspace / Google Cloud admin | Client (with IT vendor assist) |
| Design & frontend | Dev team |
| Backend & Calendar API | Dev team |
| DNS / domain | Client or agency |

---

## Risk register (short)

- **Calendar complexity:** Domain-wide delegation requires Workspace **Super Admin** cooperation.  
- **Scope creep:** Treat SMS, multi-technician routing, and inventory as later phases.  
- **Third-party “booking widgets”:** Calendly/Cal.com can sync to Google faster but offer less custom UX; hybrid possible.

---

## Current codebase in this folder

- **Stack:** Lovable export — **TanStack Start** + **TanStack Router**, React 19, TypeScript, **Tailwind CSS v4**, **shadcn/ui** (Radix), Framer Motion, `@lovable.dev/vite-tanstack-config`, optional Cloudflare (`wrangler.jsonc`).  
- **Run locally:** from the repo root, `npm install` then `npm run dev` (see `package.json` scripts).  
- **Hero image:** add `public/images/ute-hero.jpg` when ready (see `public/images/README.txt` if present).

---

## References

- [Mobile AutoCare](https://mobileautocare.com.au/) — competitor / reference services and tone.  
- [Lovable preview (your template)](https://id-preview--c631e0e3-1717-4a97-8856-3ca8ed82609a.lovable.app/) — layout and narrative baseline.  
- [Google Calendar API — Overview](https://developers.google.com/calendar/api/guides/overview)  
- [Lovable — GitHub integration](https://docs.lovable.dev/integrations/github)
