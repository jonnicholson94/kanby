
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import AccountHeader from "./accountHeader"

test("renders back to dashboard link", () => {
    render(<AccountHeader />)

    expect(screen.getByRole("link")).toHaveAttribute("href", "/dashboard")
})