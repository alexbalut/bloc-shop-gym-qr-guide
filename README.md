# Bloc Shop Gym QR Guide (unofficial demo)

**QR machine-instruction app skinned for a Bloc Shop club demo.** Members scan a QR on a machine → bilingual (EN/FR) how-to guide. Staff manage machines, download QRs, print floor sheets, and review ROI insights.

> **Unofficial demo mockup for pitching only.** Not affiliated with Bloc Shop or any parent company. Does **not** use official logo image assets — text wordmark only. Brand colors (`#00A3E0` / `#101820`) are approximate pitch tokens.

Seeded demo gym: **Bloc Shop Chabanel**. `/` is the **demo-ready member product UI** — not a marketing landing page.

Sibling (generic GymQR Guide): [gym-machine-qr-guide](https://github.com/alexbalut/gym-machine-qr-guide)

## Disclaimer

This repository is an **unofficial product demo**. Bloc Shop® and related marks belong to their respective owners. Do not represent this app as an official Bloc Shop product. No official logos are bundled.

## Quick start

```bash
cd bloc-shop-gym-qr-guide
cp .env.example .env
npm install
npx prisma db push
npm run seed
npm run dev
```

Or one-shot setup:

```bash
npm install && npm run setup && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — member gym home for **Bloc Shop Chabanel** (Machines / Workout / Progress / Scan).

## Demo credentials

| Field    | Value                    |
|----------|--------------------------|
| Email    | `admin@bloc-shop.demo`        |
| Password | `demo1234`             |
| Gym      | Bloc Shop Chabanel                |
| Slug     | `bloc-shop`           |

Seed creates **10 bilingual machines**, sample view counts, and a few open/resolved issues.

## Branding notes

- Surfaces use secondary `#101820` with primary accent **`#00A3E0`**
- Text wordmark **Bloc Shop** — no trademarked logo files
- Tagline: “Climbing community”

## Key routes

| Route | Description |
|-------|-------------|
| `/` | Gym member home |
| `/scan` | Camera QR scan |
| `/q/[token]` | Machine guide |
| `/m/bloc-shop/[machineSlug]` | Friendly slug URL |
| `/admin/login` | Staff login |
| `/admin/insights` | Owner ROI dashboard |

## Caveats

- Auth is simple credential + JWT cookie — fine for demo; harden for production.
- SQLite at `prisma/dev.db` — don’t commit it.
- Member workout/progress is browser localStorage only (`bloc-shop-workout:v1:<slug>`).
- Unofficial branding — do not ship as an official Bloc Shop app.

## Photo credits

Demo photos under `public/machines/` are from Unsplash — see [CREDITS.md](./CREDITS.md). Not official Bloc Shop assets.

## License / affiliation

This repository is an **unofficial product demo mockup** for pitch purposes. Bloc Shop® and related marks belong to their respective owners. Do not represent this app as an official Bloc Shop product.

## Repo

https://github.com/alexbalut/bloc-shop-gym-qr-guide
