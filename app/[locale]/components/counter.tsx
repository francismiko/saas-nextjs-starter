"use client";

import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/lib/store/counter-store";

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <Button onClick={decrement} variant="outline">
          -
        </Button>
        <Button onClick={increment}>+</Button>
        <Button onClick={reset} variant="destructive">
          Reset
        </Button>
      </div>
    </div>
  );
}
