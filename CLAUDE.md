# CLAUDE.md

This file provides guidance for Claude Code when working in this repository.

## Repository Overview

This is a **Next.js SaaS Starter Template** - a production-ready foundation for building SaaS applications.

## Technology Stack

### Core Framework
- **Next.js 16** with App Router
- **React 19**
- **TypeScript** (strict mode)
- **pnpm** package manager

### Styling & UI
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **lucide-react** - Icon library

### State Management
- **Zustand** - Client state (UI state, user preferences)
- **TanStack Query** - Server state (API caching, data fetching)

### Data Layer
- **Drizzle ORM** - Type-safe ORM
- **Turso + libSQL** - Edge database (SQLite-compatible)
- **Zod** - Schema validation

### Internationalization
- **next-intl** - i18n with App Router support
- Routes: `/[locale]/...` (e.g., `/en/...`, `/zh/...`)
- Translations: `messages/{locale}.json`

### Testing
- **Vitest** - Unit testing (components, utilities)
- **React Testing Library** - Component testing
- **Playwright** - E2E testing
- Test organization: **Colocated** (`.test.tsx` files next to components)

### Code Quality
- **Biome** - Linter and formatter (replaces ESLint + Prettier)
- **Husky + lint-staged** - Git hooks for automatic formatting

## Project Structure

\`\`\`
app/
├── [locale]/              # Internationalized routes
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   └── components/        # Colocated components + tests
components/
└── ui/                    # Reusable UI components (shadcn/ui)
lib/
├── db/                    # Database (Drizzle + Turso)
├── query/                 # TanStack Query setup
├── store/                 # Zustand stores
└── utils/                 # Utility functions
e2e/                       # E2E tests (Playwright)
messages/                  # i18n translations
\`\`\`

## Development Guidelines

### Adding New Components

1. Create component in appropriate directory:
   - Shared components → `components/ui/`
   - Page-specific → `app/[locale]/components/`

2. Always include a test file (colocated):
   \`\`\`
   button.tsx
   button.test.tsx  ← Same directory
   \`\`\`

3. Use shadcn/ui patterns:
   \`\`\`typescript
   import { cn } from '@/lib/utils'
   // Use cn() for className merging
   \`\`\`

### Database Changes

1. Update schema in `lib/db/schema.ts`
2. Push changes: `pnpm db:push`
3. Generate migrations if needed: `pnpm db:generate`

### Adding Translations

1. Add keys to `messages/en.json` and `messages/zh.json`
2. Use in components:
   \`\`\`typescript
   const t = useTranslations('Namespace')
   return <h1>{t('key')}</h1>
   \`\`\`

### State Management

**Client State (Zustand)**:
- UI state (modals, theme, etc.)
- User preferences
- Temporary local data

**Server State (TanStack Query)**:
- API data fetching
- Caching and synchronization
- Server data mutations

### Testing

**Unit Tests (Vitest)**:
- Components, utilities, stores
- Run: `pnpm test`

**E2E Tests (Playwright)**:
- User flows, navigation
- Run: `pnpm test:e2e`

### Code Quality

Before committing:
- Tests run automatically via Husky pre-commit hook
- Code is auto-formatted with Biome
- Manual check: `pnpm lint`

## Common Tasks

### Create New Page

\`\`\`bash
# Create page in app/[locale]/
touch app/[locale]/about/page.tsx
\`\`\`

### Add Database Table

\`\`\`typescript
// lib/db/schema.ts
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  // ...
})
\`\`\`

### Add Zustand Store

\`\`\`typescript
// lib/store/example-store.ts
import { create } from 'zustand'

interface ExampleState {
  value: number
  increment: () => void
}

export const useExampleStore = create<ExampleState>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
}))
\`\`\`

### Add API Route

\`\`\`typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello' })
}
\`\`\`

## Environment Variables

Required variables (see `.env.example`):

\`\`\`bash
# Database (Turso)
TURSO_DATABASE_URL=     # Optional: Uses file:local.db if not set
TURSO_AUTH_TOKEN=       # Optional: Only needed for Turso
\`\`\`

## Important Notes

1. **Always use TypeScript strict mode**
2. **Colocate tests with components** (`.test.tsx`)
3. **Use Biome for linting/formatting** (not ESLint/Prettier)
4. **Translations required** for all user-facing text
5. **TanStack Query for server data** (not useState + useEffect)
6. **Validate data with Zod** before database operations

## Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Check code with Biome |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm test` | Run unit tests |
| `pnpm test:e2e` | Run E2E tests |
| `pnpm db:push` | Push schema to database |
| `pnpm db:studio` | Open Drizzle Studio |

## When Creating New Features

1. ✅ Create component with TypeScript types
2. ✅ Add colocated test (`.test.tsx`)
3. ✅ Add translations if user-facing
4. ✅ Validate input with Zod if handling data
5. ✅ Use TanStack Query for server data
6. ✅ Write E2E test for critical user flows
7. ✅ Run `pnpm lint:fix` before committing
