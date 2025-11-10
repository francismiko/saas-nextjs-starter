import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { useCounterStore } from "./counter-store";

describe("Counter Store", () => {
  // Reset store after each test
  afterEach(() => {
    const { result } = renderHook(() => useCounterStore());
    act(() => {
      result.current.reset();
    });
  });

  it("should have initial count of 0", () => {
    const { result } = renderHook(() => useCounterStore());
    expect(result.current.count).toBe(0);
  });

  it("should increment count", () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should decrement count", () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.decrement();
    });

    expect(result.current.count).toBe(1);
  });

  it("should allow negative counts", () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.decrement();
      result.current.decrement();
    });

    expect(result.current.count).toBe(-2);
  });

  it("should reset count to 0", () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });

  it("should handle multiple increments", () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      for (let i = 0; i < 10; i++) {
        result.current.increment();
      }
    });

    expect(result.current.count).toBe(10);
  });

  it("should handle mixed operations", () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment(); // 1
      result.current.increment(); // 2
      result.current.decrement(); // 1
      result.current.increment(); // 2
      result.current.increment(); // 3
      result.current.decrement(); // 2
    });

    expect(result.current.count).toBe(2);
  });
});
