# 青葉 Aoba Systems — Return-to-Office Transition Hub

> **Course exercise built for the Nitobe College Pre-program Courses**
> Hokkaido University · Nitobe College

---

## About this project

This web application was developed as a **practical exercise** in the **Nitobe College Pre-program Courses** at Hokkaido University. It is a fictional internal HR tool for a made-up company, *Aoba Systems*, and is intended purely for educational purposes.

The exercise uses a realistic workplace scenario — a company-wide return-to-office mandate — to explore how digital tools can be designed to communicate policy changes clearly, support affected employees, and give staff a voice in organizational decisions.

---

## Scenario

**Aoba Systems** is a fictional mid-sized technology company with 400 employees. During the COVID-19 pandemic, it introduced a hybrid working policy allowing staff to work from home up to three days a week. On **June 9, 2026**, senior management announced that all staff must return to full-time office work by **July 7, 2026** — giving employees four weeks to adjust.

Many employees had built their lives around hybrid work: caregivers relying on flexible childcare arrangements, staff who relocated farther from the office for more space, and employees with disabilities who adapted their home environments. This application is designed to support them through the transition.

---

## What the app does

The application has four tabs:

| Tab | Purpose |
|---|---|
| **Announcement** | Official communication explaining the policy change, the rationale, and the timeline |
| **Support & FAQ** | Tailored FAQs and resource listings for three affected groups: childcare, relocation, and accessibility |
| **My Checklist** | A personalized to-do list for an employee affected by all three situations, with tasks grouped by category and priority |
| **Share Feedback** | A structured form for employees to submit their opinions directly to executive leadership, with an anonymous submission option |

---

## Design notes

The visual identity is built around **青葉** (aoba — *young green leaves*), which is the company name. The color palette uses layered leaf greens, a deep ink-green for backgrounds, and a warm gold accent meant to evoke morning light through foliage. The header includes a hand-drawn SVG leaf mark and the kanji 青葉 alongside the wordmark.

**Stack:** Next.js 15 (App Router) · TypeScript · CSS custom properties · No external UI libraries

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset **Next.js** is auto-detected.
4. Click **Deploy** — no environment variables required.

---

## Academic context

**Institution:** Hokkaido University  
**College:** Nitobe College  
**Program:** Pre-program Courses  
**Exercise type:** Application design & development  
**Tools used:** Next.js, TypeScript, Claude (AI-assisted development)

---

*Aoba Systems and all individuals, scenarios, companies, and contact details referenced within the application are entirely fictional and created for educational purposes only.*
