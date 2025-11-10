# Next.js SaaS Starter

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/francismiko/saas-nextjs-starter)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/francismiko/saas-nextjs-starter)

[![Use this template](https://img.shields.io/badge/Use_this_template-2ea44f?style=flat-square&logo=github)](https://github.com/francismiko/saas-nextjs-starter/generate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

A production-ready SaaS starter template built with Next.js 16, TypeScript, and modern web technologies.

## ✨ Features

- ⚡ **Next.js 16** - App Router, Server Components, Server Actions
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautifully designed components
- 🌍 **next-intl** - Internationalization (i18n) support
- 🤖 **AI SDK** - Build AI-powered features with ease
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

This starter includes comprehensive testing setup:

- **Unit Tests**: Vitest + React Testing Library
- **E2E Tests**: Playwright
- **22 unit tests** + **9 E2E tests** included as examples

Run `pnpm test` for unit tests or `pnpm test:e2e` for E2E tests.

## 🗄️ Database

Uses **Turso** (edge database) with **Drizzle ORM** for type-safe database operations.

- **Local**: SQLite file (`local.db`)
- **Production**: Connect to [Turso](https://turso.tech) by setting `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`

## 🌍 Internationalization

The app supports multiple languages out of the box (English and Chinese).

- Add translations in `messages/{locale}.json`
- Configure locales in `i18n/routing.ts`
- Access translations with `useTranslations()` hook

## 🤖 AI Chat (AI SDK)

This starter includes AI chat functionality powered by [Vercel AI SDK](https://sdk.vercel.ai/).

### Setup

1. Get an API key from [OpenRouter](https://openrouter.ai/keys)
2. Add to `.env.local`:
   ```env
   OPENROUTER_API_KEY=your_api_key_here
   ```

### Usage

Visit `/en/chat` or `/zh/chat` to try the AI chat demo.

### API Endpoint

```typescript
// app/api/chat/route.ts
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openrouter("gpt-3.5-turbo"),
    messages,
  });
  return result.toDataStreamResponse();
}
```

### Client Component

```typescript
"use client";
import { useChat } from "ai/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  // ... render chat UI
}
```

### Customization

- **Change model**: Update the model in `app/api/chat/route.ts`
- **Add tools**: Use AI SDK's `tools` parameter for function calling
- **Custom providers**: Replace OpenRouter with OpenAI, Anthropic, etc.

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built accessible components
- **CSS Variables** for theming (light/dark mode ready)

## 📝 Code Quality

Automated code quality with **Biome** (lint & format) and **Husky** (pre-commit hooks).

All code is automatically checked and formatted on commit.

## 🚢 Deployment

Click the **Deploy with Vercel** button at the top of this README for one-click deployment.

Or manually:
1. Push your code to GitHub
2. Import repository to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Drizzle ORM](https://orm.drizzle.team)
- [Turso](https://docs.turso.tech)
- [TanStack Query](https://tanstack.com/query)
- [next-intl](https://next-intl.dev)

## 📄 License

MIT
