# Next.js SaaS Starter

A production-ready SaaS starter template built with Next.js 16, TypeScript, and modern web technologies.

## ✨ Features

- ⚡ **Next.js 16** - App Router, Server Components, Server Actions
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautifully designed components
- 🌍 **next-intl** - Internationalization (i18n) support
- 🗃️ **Drizzle ORM** - Type-safe database toolkit
- 🚀 **Turso** - Edge database powered by libSQL
- 📝 **Zod** - TypeScript-first schema validation
- 🔄 **TanStack Query** - Server state management
- 🏪 **Zustand** - Client state management
- 🧪 **Vitest** - Unit testing framework
- 🎭 **Playwright** - End-to-end testing
- 🔍 **Biome** - Fast linter and formatter
- 🪝 **Husky** - Git hooks for code quality

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

\`\`\`bash
git clone <your-repo-url> my-saas-app
cd my-saas-app
\`\`\`

2. **Install dependencies**

\`\`\`bash
pnpm install
\`\`\`

3. **Set up environment variables**

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` and add your environment variables.

4. **Run the development server**

\`\`\`bash
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📁 Project Structure

\`\`\`
├── app/
│   └── [locale]/        # Internationalized routes
│       ├── layout.tsx   # Root layout with providers
│       ├── page.tsx     # Homepage
│       └── components/  # Page-specific components
├── components/
│   └── ui/              # Reusable UI components
├── e2e/                 # E2E tests with Playwright
├── i18n/                # i18n configuration
├── lib/
│   ├── db/              # Database client and schema
│   ├── query/           # TanStack Query setup
│   ├── store/           # Zustand stores
│   └── utils/           # Utility functions
├── messages/            # Translation files
└── public/              # Static assets
\`\`\`

## 🧪 Testing

### Unit Tests

\`\`\`bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test:run

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm test:coverage
\`\`\`

### E2E Tests

\`\`\`bash
# Run E2E tests
pnpm test:e2e

# Run E2E tests with UI
pnpm test:e2e:ui
\`\`\`

## 🗄️ Database

This starter uses **Turso** (edge database) with **Drizzle ORM**.

### Local Development

By default, the app uses a local SQLite database (`local.db`).

### Push schema to database

\`\`\`bash
pnpm db:push
\`\`\`

### Open Drizzle Studio

\`\`\`bash
pnpm db:studio
\`\`\`

### Using Turso (Production)

1. Create a Turso database: [https://turso.tech](https://turso.tech)
2. Add `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` to `.env.local`
3. Push your schema: `pnpm db:push`

## 🌍 Internationalization

The app supports multiple languages out of the box (English and Chinese).

- Add translations in `messages/{locale}.json`
- Configure locales in `i18n/routing.ts`
- Access translations with `useTranslations()` hook

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built accessible components
- **CSS Variables** for theming (light/dark mode ready)

## 📝 Code Quality

### Linting & Formatting

\`\`\`bash
# Check code
pnpm lint

# Fix issues
pnpm lint:fix

# Format code
pnpm format
\`\`\`

### Git Hooks

Pre-commit hooks automatically format and lint your code using Husky and lint-staged.

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables
4. Deploy!

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [Turso](https://docs.turso.tech)
- [TanStack Query](https://tanstack.com/query)
- [next-intl](https://next-intl.dev)

## 📄 License

MIT
