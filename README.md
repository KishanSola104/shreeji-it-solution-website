# Shreeji IT Solution Pvt. Ltd. — Official Website

Modern, responsive, professional business website for **Shreeji IT Solution Pvt. Ltd.**, an IT solutions provider based in Vasad, Anand, Gujarat founded in 2025 by Kishan Solanki.

---

## 🌟 Tech Stack

- **Framework**: React.js (Vite) — JSX only
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Email Service**: Frontend-only integration via FormSubmit.co AJAX endpoint with automatic `mailto:` fallback (No Node.js, Express, or backend server required)
- **WhatsApp Integration**: Direct encoded dynamic links to `+91 96623 47518`

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Contact Form Setup (Frontend-Only & Zero Backend)
The contact form uses **FormSubmit.co** (`https://formsubmit.co/ajax/shreejiitsolution120@gmail.com`) to send emails directly from the browser to `shreejiitsolution120@gmail.com` via `fetch()`.

- **Zero Server Setup**: No Node.js backend, PHP mailer, or serverless function is needed. Works on static hosts like Vercel, Netlify, and GitHub Pages.
- **First-Time Activation**: The very first time a form is submitted to `shreejiitsolution120@gmail.com`, FormSubmit sends a one-time activation email with a confirmation link to `shreejiitsolution120@gmail.com`. Simply click **"Activate Form"** once, and all future submissions will be routed directly to your inbox with a clean HTML table!
- **Spam Protection**: Configured with a hidden honeypot field (`_honey`) to prevent automated bot spam.
- **In-Place Feedback**: Submissions happen asynchronously via AJAX without redirecting the user to a third-party page. The user remains on the site and sees: *"Thank you! Your message has been submitted successfully. We will get back to you soon."* only upon genuine server confirmation.

### 4. Run Development Server
```bash
npm run dev
```
The site runs locally at `http://localhost:3000`.

### 5. Production Build
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
shreeji-it-sol-website/
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── Founder_Photo.png
│   │   └── logo/
│   │       └── logo.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ServiceModal.jsx
│   │   ├── PricingSection.jsx
│   │   ├── PricingCard.jsx
│   │   ├── FAQSection.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── SectionHeading.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── FounderProfile.jsx
│   │   ├── LetsTalk.jsx
│   │   ├── TermsAndConditions.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── pricing.js
│   │   ├── faqs.js
│   │   ├── navigation.js
│   │   └── timeline.js
│   ├── utils/
│   │   ├── whatsapp.js
│   │   └── email.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🌐 Routes & Pages

- `/` — Homepage (Hero, About, Services with interactive modals, Pricing, Why Us / FAQs, How It Works, Contact, Floating WhatsApp CTA)
- `/about-us` — Dedicated About Us page with narrative, vision, mission, services summary, and approach
- `/founder-profile` — Dedicated Founder Profile for Kishan Solanki with bio, LinkedIn connection, and official photo
- `/lets-talk` — Dedicated Contact & Project Inquiry page
- `/terms-and-conditions` — Comprehensive 22-section standard business terms & conditions template
- `*` — 404 Page Not Found

---

## 🚢 Deployment

### Deploy to Vercel
1. Push repository to GitHub.
2. Import repository in [Vercel](https://vercel.com).
3. Framework Preset: `Vite`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add environment variables if using EmailJS.

### Deploy to Netlify
1. Connect repository in [Netlify](https://www.netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add a `public/_redirects` file with `/* /index.html 200` for client-side SPA routing if needed.

---

## 📞 Company Contact Details

- **Company**: Shreeji IT Solution Pvt. Ltd.
- **Founder**: Kishan Solanki
- **Location**: Vasad, Anand, Gujarat – 388305
- **Phone**: +91 96623 47518
- **Email**: shreejiitsolution120@gmail.com
- **LinkedIn**: [Company Profile](https://www.linkedin.com/company/shreeji-it-solution-pvt-ltd/?viewAsMember=true) &bull; [Founder Profile](https://www.linkedin.com/in/kishankumar-solanki-01691835/)
