
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

import DashboardFilter from "./dashboardFilter";

test("clicking on a filter button changes the active filter", () => {
  const setActiveMock = jest.fn();
  render(<DashboardFilter active="All" setActive={setActiveMock} />);

  const backlogButton = screen.getByText("Backlog");

  fireEvent.click(backlogButton);

  expect(setActiveMock).toHaveBeenCalledWith("Backlog");
});

test("correct filter button is highlighted when it is active", () => {
  render(<DashboardFilter active="Backlog" setActive={() => {}} />);

  const backlogButton = screen.getByText("Backlog");

  expect(backlogButton).toHaveClass("bg-primaryCta text-ctaText");
});

test("correct filter button is not highlighted when it is not active", () => {
  render(<DashboardFilter active="In progress" setActive={() => {}} />);

  const backlogButton = screen.getByText("Backlog");

  expect(backlogButton).not.toHaveClass("bg-primaryCta text-ctaText");
});