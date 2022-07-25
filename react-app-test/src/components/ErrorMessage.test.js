import { render, screen } from "@testing-library/react";
import React from "react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("should render a test message", () => {
    render(<ErrorMessage errorMessage="There was an error" />);

    const el = screen.getByText(/There was an error/i);
    expect(el).toBeInTheDocument();
  });
});
