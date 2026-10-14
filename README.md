# NonProfitAI

AI-powered software and intelligence platform designed specifically for nonprofit organizations.

## Features

- **Nonprofit Board Governance**: 10 specialized AI agents assisting board operations, compliance, fiduciary oversight, and decision-making.
- **Control Tower**: Operational intelligence and analytics dashboard integrating nonprofit toolsets (donor management, accounting, CRM, and communication platforms).
- **Executive Sales Decks & Interactive Presentations**: Built-in interactive presentations for board members and leadership.
- **Lead Magnet & Checklists**: Curated board governance audit checklists and readiness assessments.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Routing**: [React Router](https://reactrouter.com/) (v6) with GitHub Pages SPA routing
- **Backend / Database**: [Supabase](https://supabase.com/)
- **Hosting & CI/CD**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or bun

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Annyxtopheles/nonprofit-software.git
   cd nonprofit-software
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Configure your Supabase credentials in `.env`.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is configured to automatically deploy to GitHub Pages via GitHub Actions on every push to the `main` branch.
