import { useCounterStore } from "@/lib/store/counter-store";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Counter } from "./counter";

describe("Counter", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("renders initial count", () => {
    render(<Counter />);
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
  });

  it("increments count", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Counter: 1/)).toBeInTheDocument();
  });

  it("decrements count", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Counter: -1/)).toBeInTheDocument();
  });

  it("resets count", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Counter: 2/)).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(screen.getByText(/Counter: 0/)).toBeInTheDocument();
  });
});
