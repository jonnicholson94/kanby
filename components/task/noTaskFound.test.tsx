
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"

import NoTaskFound from "./noTaskFound";

import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("renders expected content", () => {
    render(<NoTaskFound />);
    const warningIcon = screen.getByAltText("A warning to indicate an element hasn't been found");
    const heading = screen.getByText("No task with this ID has been found");
    const paragraph = screen.getByText("Maybe you clicked on a broken link, or typed the URL in wrong.");
    const backButton = screen.getByText("Back to dashboard");

    expect(warningIcon).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
});

test("navigates to the correct URL when 'Back to dashboard' is clicked", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(<NoTaskFound />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/dashboard")
  });
