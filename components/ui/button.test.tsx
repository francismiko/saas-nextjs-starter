import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies default variant", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-primary");
  });

  it("applies destructive variant", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-destructive");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
