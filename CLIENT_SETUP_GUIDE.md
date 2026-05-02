# Client guide — Google Workspace (Business Standard) & Google Business Profile

**Who this is for:** Business owners setting up **AutoXpert Group** online presence without an IT background.  
**What you will have at the end:** A professional **@yourdomain.com.au** email on **Google Workspace Business Standard**, and a **Google Business Profile** (the listing that appears on Google Search and Maps) pointed at the right phone number, service area, and website.

> **Important:** Steps and menu names can change slightly when Google updates its screens. If something does not match word-for-word, use the search box inside the Google Admin console or call Google Workspace support (included with paid plans).

---

## Part A — Before you start (15 minutes)

1. **Decide your domain name** (example: `autoxpertgroup.com.au`). Purchase it from a registrar (Porkbun, VentraIP, GoDaddy, etc.) if you do not already own it.  
2. **Have a payment method** ready for Google Workspace (per user, per month).  
3. **Use a computer** (easier than phone for DNS verification).  
4. **Pick one “main” Google account** you will use to own the Workspace — ideally a personal Gmail you already control; you will become the first admin.

---

## Part B — Google Workspace Business Standard (step by step)

### Step 1 — Start Workspace signup

1. Open [https://workspace.google.com/](https://workspace.google.com/) in your browser.  
2. Click **Get started** (or similar).  
3. Enter your **business name** (AutoXpert Group) and **number of employees** (even “just me” is fine).  
4. Enter **your name** and **current email** (this can be a personal Gmail).

### Step 2 — Choose your domain

1. When asked for a domain, choose **“Yes, I have one I can use”** and type your domain (example: `autoxpertgroup.com.au`).  
2. Google will ask you to **prove you own the domain** using DNS records. **Keep this browser tab open.**

### Step 3 — Prove domain ownership (DNS)

You must add a **TXT verification record** where you bought the domain.

1. Log in to your **domain registrar** (where you bought `.com.au`).  
2. Find **DNS settings** or **DNS management** for your domain.  
3. Add a new record of type **TXT** exactly as Google shows you (Host/name might be `@` or blank — follow Google’s exact field names).  
4. Save. **Wait 10–60 minutes** (sometimes up to a few hours), then click **Verify** in Google’s wizard.

**If verification fails:** Double-check you did not add extra spaces; confirm you edited the correct domain.

### Step 4 — Create your first business email

1. Finish the Workspace wizard and create something like:  
   - `hello@autoxpertgroup.com.au` (public enquiries)  
   - or `bookings@autoxpertgroup.com.au` (if your developer sets calendar sync on this mailbox)

2. **Write down** the admin password in a **password manager** (Bitwarden, 1Password, Apple Passwords). Do not email passwords.

### Step 5 — Open Google Admin (control panel for your business)

1. Go to [https://admin.google.com/](https://admin.google.com/)  
2. Sign in with your new **admin** Workspace account.  
3. You are now in **Google Admin console** — this is where you add staff mailboxes later.

### Step 6 — Turn on Google Calendar for everyone (usually already on)

1. In Admin console, open **Apps** → **Google Workspace** → **Calendar**.  
2. Ensure Calendar is **ON** for the right organisational unit (often “everyone”).  
3. Ask your developer which mailbox will **own the booking calendar** so you do not delete that user later by mistake.

### Step 7 — Optional but recommended — security basics

1. In Admin console: **Security** → **Authentication** — consider **2-Step Verification** required for all users.  
2. Add a **recovery phone** and **recovery email** for the admin account.

---

## Part C — Google Business Profile (Maps / Search listing)

This is the public listing customers see when they search “mobile mechanic near me.”

### Step 1 — Start a Business Profile

1. Go to [https://business.google.com/](https://business.google.com/)  
2. Click **Manage now** or **Add business**.  
3. Sign in with a Google account. **Tip:** Use the same brand Google account you use day-to-day for the business, or your new Workspace user — pick one and stay consistent.

### Step 2 — Enter accurate business details

1. **Business name:** Use your registered trading name (AutoXpert Group) — avoid keyword stuffing (Google may suspend listings that look spammy).  
2. **Category:** Start with **Auto repair shop** and/or **Mobile mechanic** (choose the closest options Google offers). You can add secondary categories later.  
3. **Service area:** If you do not want your **home address** public, choose **service area business** and list suburbs/regions you cover.  
4. **Phone:** Use the number you answer — ideally the same number on your website.  
5. **Website:** Add your site URL when it is live (you can update this later).

### Step 3 — Verification

Google will require **verification** (often **postcard to address**, **phone**, or **email** depending on region and business type).

1. Follow the on-screen method **exactly**.  
2. If postcard: when it arrives, enter the code in Google Business Profile.  
3. Do **not** create duplicate listings for the same business — that hurts ranking and can cause suspensions.

### Step 4 — Finish the profile like a pro

Add:

- **Hours** (and special hours for public holidays).  
- **Services** list (mobile servicing, diagnostics, brakes, etc.).  
- **Photos:** logo, branded ute, team (with permission), before/after (if appropriate).  
- **Short description** in plain language (what you do, where you go, why you’re different).

### Step 5 — Reviews (ongoing)

After jobs, politely ask happy customers to leave a **Google review**. Reply to reviews briefly and professionally.

---

## Part D — What your web developer needs from you

Checklist you can email them:

- [ ] Domain registrar login (or DNS access)  
- [ ] Google Workspace **Super Admin** access (or invite their technical contact)  
- [ ] Which mailbox owns bookings (`bookings@…` recommended)  
- [ ] Google Business Profile **manager** invite (optional but helpful)  
- [ ] Logo files (PNG/SVG), ute photos, final phone numbers

---

## Part E — If you get stuck

- **Workspace billing or login:** [Google Workspace support](https://support.google.com/a/) (from Admin console → **?** → **Help**).  
- **Domain DNS:** Your registrar’s support chat — say “I need to add a Google Workspace verification TXT record.”  
- **Business Profile verification:** Use the **Help** panel inside Business Profile while logged in.

---

## Disclaimer

This guide is general information for AutoXpert Group’s project setup — not legal or tax advice. For **.com.au** domains, normal Australian eligibility rules apply through your registrar.
