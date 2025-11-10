import "../globals.css";
import { routing } from "@/i18n/routing";
import { QueryProvider } from "@/lib/query/query-provider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Next.js SaaS Starter",
  description: "A production-ready Next.js SaaS starter template",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "zh")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
