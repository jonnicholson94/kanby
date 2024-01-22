import { render, screen } from "@testing-library/react"

import SubHeading from "@/components/homepage/subHeading"

test("heading renders with correct content", () => {

    render(<SubHeading />)
    
    const content = screen.getByText("Track, view and manage your tasks, all in one simple interface. No complicated setup, just add tasks and go.")

    expect(content).toBeDefined()
})