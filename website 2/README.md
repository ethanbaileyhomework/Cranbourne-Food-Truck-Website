# Cranbourne Food Truck Website

A modern, community-driven, easy-to-edit site for Cranbourne Food Truck.

---

## 🟠 Features

- **Next.js 14 + TypeScript + App Router**
- **Tailwind CSS** design system (warm red, deep charcoal, soft neutrals)
- **Decap CMS** (Netlify CMS) – edit all content at `/admin`
- **Netlify deploy** (free, includes previews, forms, and free custom domain)
- **Stats**: Live counters from Google Sheets, Looker Studio dashboard embed
- **Donations**: Bank details, PayPal, Stripe (editable in CMS)
- **Volunteer**: Tally.so form embed (editable in CMS)
- **Sponsors & Partners**: Grid w/ logos, links, blurbs from CMS
- **Accessibility**: Keyboard nav, focus styles, alt text
- **SEO**: Metadata, OG/Twitter cards, robots.txt, sitemap, JSON-LD

---

## 🟢 Quick Start

### 1. **Install dependencies**

```bash
npm install
```

### 2. **Run locally**

```bash
npm run dev
```

---

## ✏️ **Editing Content**

### **Decap CMS (Netlify CMS)**

- Visit `/admin` while logged in with your GitHub account (Netlify Identity will prompt for access).
- All content—site settings, home, team, stories, partners, stats settings—is editable in the CMS UI.
- **Images:** Upload under "Media" or add new for team/partners/cards.

### **What can I edit in the CMS?**

- **Site details:** name, logo, contact info, bank details, donation links, social media, map URL, Looker dashboard URL.
- **Home:** hero text/image, what-we-do cards, testimonials.
- **Stats page:** Looker dashboard URL, Sheet ID (see below).
- **Team, stories, partners:** Add, remove, or edit via CMS collections.

---

## 📈 **Connecting Google Sheets for Live Stats**

1. **Prepare your Google Sheet**
   - Columns: `date`, `meals`, `guests`, `volunteers`, `groceries`, `notes`
   - Example:  
     `2024-05-20, 85, 52, 9, 18, ""`
2. **Publish to the web:**
   - File → Share → Publish to web → Entire sheet as CSV.
   - Copy the public CSV URL.
3. **Paste your CSV URL:**
   - In CMS, go to Site Settings → "Google Sheet CSV URL" (or update `.env` with `SHEET_CSV_URL`).
   - Save and publish.

---

## 📊 **Looker Studio Dashboard**

- In CMS, paste your Looker Studio dashboard URL in the "Looker Studio URL" field (Site Settings or Stats Settings).

---

## 🗺️ **Google Map Location**

- Paste your Google Maps embed URL in the "Google Map Embed URL" field in CMS.

---

## 💸 **Donation Buttons**

- Edit bank details, PayPal link, Stripe link in Site Settings in CMS.

---

## 🤝 **Sponsors & Partners**

- Add/edit partners in the CMS for the grid on the Sponsors page.

---

## 🟣 **Deployment & Domain (Netlify)**

1. **Push to GitHub**
   - Connect your repo to [Netlify](https://app.netlify.com/).
2. **Set build command:**  
   `npm run build`
3. **Set publish directory:**  
   `.next`
4. **Enable Identity & Git Gateway** in Netlify for CMS login.
5. **Add custom domain:**  
   - Go to "Domain management" in Netlify, add `cranbournefoodtruck.com`, and follow DNS instructions.

---

## 🛡️ **Accessibility & SEO**

- All headings, images, nav, and buttons are WCAG 2.1 AA compliant.
- Semantic HTML, focus outlines, screen reader labels, and alt text included.
- SEO meta tags and Open Graph/Twitter cards per page.

---

## 🖼️ **Update Placeholders**

Replace images in `/public`:

- `/placeholder-logo.png` (logo)
- `/placeholder-hero.jpg` (hero/banner)
- `/placeholder-meal.jpg`, `/placeholder-groceries.jpg`, `/placeholder-care.jpg` (home cards)
- `/placeholder-headshot.png` (team/testimonials)
- Partner logos in `/uploads` via CMS.

---

## ⚙️ **Settings & Integrations**

- **Analytics (Google Analytics v4):** Paste your GA ID in CMS Site Settings.
- **Netlify Forms:** If needed, add a form with `name="netlify"` for fallback.

---

## 🧑‍💻 **Maintaining the Site**

- All text/images editable in `/admin`
- All stats auto-update from your Sheet
- All donations/volunteer forms are just links to change in CMS

---

**Need help?**  
You can always ask your Copilot Space for step-by-step instructions or troubleshooting!
