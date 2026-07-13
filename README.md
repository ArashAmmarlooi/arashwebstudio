# Arash Web Studio — Website

Multilingual marketing website for a web/mobile/software design studio, built
with Next.js, Tailwind CSS and Framer Motion.

**Pages:** Landing · About · Services overview and six service pages · Contact
with a working email form · Blog with three practical guides.

English uses unprefixed URLs. French, Spanish, German, Italian, Portuguese and
Simplified Chinese use `/fr`, `/es`, `/de`, `/it`, `/pt` and `/zh`. Every
localized page includes a self-canonical URL and reciprocal hreflang links.

When publishing translated marketing copy, have a fluent speaker review tone,
terminology and regional phrasing before promoting that language.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Set up email sending (free)

The contact form sends inquiries to **arashammarlooi@hotmail.com** using
[Resend](https://resend.com) (free plan: 100 emails/day, 3,000/month).

1. Sign up at https://resend.com (free, no credit card).
2. Go to **API Keys → Create API Key** and copy the key.
3. In this folder, copy `.env.example` to a new file named `.env.local`
   and paste your key:

   ```
   RESEND_API_KEY=re_your_key_here
   ```

4. Restart the dev server. The contact form now delivers emails.

Until the key is set, form submissions show a friendly message asking visitors
to email directly, so nothing breaks.

## Production URL and Google SEO

Copy the values from `.env.example` into `.env.local` for local testing and add
the same variables in Vercel under **Settings → Environment Variables**:

```bash
NEXT_PUBLIC_SITE_URL=https://www.arashwebstudio.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-search-console-code
```

`NEXT_PUBLIC_SITE_URL` must match the final public version of the site. It is
used for canonical URLs, the sitemap and structured data. After deployment:

1. Add and verify the domain in [Google Search Console](https://search.google.com/search-console).
2. Submit `https://www.arashwebstudio.com/sitemap.xml`.
3. Inspect the home page URL and request indexing.
4. Create appropriate business profiles for any markets the studio actively serves.
5. Replace the Hotmail address with a domain email in `lib/site.ts` when ready.
6. Keep the studio name, contact details and service information consistent
   anywhere the business is listed online.
7. Add genuine portfolio work, client testimonials and links to real social
   profiles. Do not publish invented reviews or project claims.

Technical SEO helps Google understand the site, but rankings also depend on
useful content, reputable links, genuine reviews and competition.

## Deploy for free (Vercel)

[Vercel](https://vercel.com) hosts Next.js sites for free (Hobby plan) —
including the email API route. No server to pay for.

1. Push this project to a GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Arash Web Studio website"
   ```

   Then create a repo on https://github.com/new and push.

2. Go to https://vercel.com, sign up with your GitHub account.
3. Click **Add New → Project**, import your repo, and click **Deploy**.
4. In the Vercel project: **Settings → Environment Variables**, add
   `RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL` and (after Search Console setup)
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then redeploy.

You get a free `your-site.vercel.app` URL immediately. You can attach a custom
domain later (the domain itself costs ~$10/year, but hosting stays free).

## Tech stack

- [Next.js 14](https://nextjs.org) — React framework + API route for email
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Resend](https://resend.com) — email delivery
