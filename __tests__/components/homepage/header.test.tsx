
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Header from "@/components/homepage/header"

test("displays anchor link in heading", () => {

    render(<Header />)

    const element = screen.getByText("Kanby")

    expect(element).toBeInTheDocument()

})