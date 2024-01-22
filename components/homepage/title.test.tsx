
import { render, screen } from "@testing-library/react"

import Title from "./title"

test("heading renders with correct content", () => {
    render(<Title />)
    const heading = screen.getByRole("heading", { name: "Manage your tasks without the fuss"} )

    expect(heading).toBeDefined()
})