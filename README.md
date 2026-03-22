# Eligent AI — Website

Premium AI startup portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations & transitions
- **Lucide Icons**
- **Google Fonts** — Syne (display) + DM Sans (body)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com).

```bash
npm install -g vercel
vercel
```

## Project Structure

```
Eligent-ai/
├── app/
│   ├── globals.css       # Global styles, CSS variables, utilities
│   ├── layout.tsx        # Root layout with SEO metadata + fonts
│   └── page.tsx          # Main page composition
├── components/
│   ├── Navigation.tsx    # Sticky navbar with scroll detection
│   ├── Hero.tsx          # Hero section with animated headline
│   ├── Services.tsx      # AI services grid with hover cards
│   ├── Projects.tsx      # Project showcase cards
│   ├── CaseStudies.tsx   # Problem → Solution → Architecture breakdown
│   ├── Technology.tsx    # Tech stack badges grid
│   ├── Process.tsx       # Animated development process timeline
│   ├── About.tsx         # Studio description + values
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Navigation + links + copyright
├── lib/
│   └── utils.ts          # cn() utility for class merging
├── tailwind.config.ts    # Custom colors, fonts, animations
└── package.json
```

## Design System

**Colors:**
- Background: `#04040A`
- Surface: `#0A0A14`
- Accent / Mint: `#16A34A`
- Electric Blue: `#4D6EFF`
- Text Primary: `#EEEEFF`
- Text Secondary: `#8080A0`

**Typography:**
- Display: Syne (headings, logo, CTAs)
- Body: DM Sans (paragraphs, UI text)

## Customization

- Update social links in `Contact.tsx` and `Footer.tsx`
- Swap placeholder screenshots in `Projects.tsx` when ready
- Add real email form handler in `Contact.tsx` (currently simulated)
- Update SEO metadata in `app/layout.tsx`
