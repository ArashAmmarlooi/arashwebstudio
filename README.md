# Arash Web Studio — Website

Award-style 3-page website for a web/mobile/software design studio, built with
Next.js, Tailwind CSS and Framer Motion.

**Pages:** Landing (`/`) · About (`/about`) · Contact (`/contact`) with a
working email contact form.

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
   `RESEND_API_KEY` with your key, then redeploy.

You get a free `your-site.vercel.app` URL immediately. You can attach a custom
domain later (the domain itself costs ~$10/year, but hosting stays free).

## Tech stack

- [Next.js 14](https://nextjs.org) — React framework + API route for email
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Resend](https://resend.com) — email delivery
