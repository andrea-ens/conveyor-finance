# Conveyor — corporate website

Professional company site for **[conveyor.finance](https://conveyor.finance)**.

This repository is the **corporate website** in the three-part Conveyor stack:

| Surface | Role | Reference |
|---|---|---|
| Corporate website | This app | Crypgo shadcn landing page |
| Application / dashboard | DeFi portfolio, LP, P&L | defi-dashboard |
| Trading functionality | Charts, watchlists, alerts, backtests | CryptoTraderPro |

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Domain

Point `conveyor.finance` (and `www`) at the Vercel/Netlify project that builds this directory. Set `metadataBase` is already `https://conveyor.finance`.

## License

Website UI originates from the MIT/open Crypgo template; Conveyor branding and product copy are original to this project.
