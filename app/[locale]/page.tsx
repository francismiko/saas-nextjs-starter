import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Counter } from "./components/counter";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="z-10 max-w-5xl w-full items-center justify-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
        <p className="text-lg text-muted-foreground text-center">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold">Component Examples</h2>
        <Counter />
        <div className="flex gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </main>
  );
}
