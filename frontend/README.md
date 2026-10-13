# Code Scapex Academy Website

Responsive institutional training website built with **React, Vite, Tailwind CSS, and Lucide icons**.

## Features
- Premium navy, white, and cyan visual identity
- Responsive mobile and desktop navigation
- Program cards and institutional training information
- About and training experience section
- How-we-work process section
- Expandable FAQ
- Institutional enquiry form with client-side validation
- Enquiry form connected to a Google Apps Script web app endpoint

## Requirements
- Node.js 20+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The optimized website is generated in `dist/`.

## Before publishing
1. Replace placeholder contact details and service area.
2. Verify all institutional experience claims and obtain permission for any logos, photos, or testimonials.
3. Verify the Apps Script deployment uses spreadsheet ID `1bXf4l1MUMJ-8V5c0QPgskmW3HRjdMyN2fNfvS6og39U`, sheet tab `Enquiries`, and notification email `codescapex@gmail.com`.
4. Test an enquiry and confirm that a row appears in Google Sheets and the notification email arrives. The frontend uses `no-cors`, so it cannot confirm server-side success; check the sheet and Apps Script Executions.
5. Add spam protection/rate limiting and a privacy notice before public launch. The Apps Script URL is visible in frontend code and can be abused if left unprotected.
6. Review mobile layouts and accessibility on real devices.

## Deploy
The built `dist/` folder can be deployed to a static hosting provider such as Netlify, Vercel, or Cloudflare Pages. Configure the build command as `npm run build` and output directory as `dist`.
