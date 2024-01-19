
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'

import FormButton from "@/components/homepage/auth/formButton"

test("button renders content passed in as a prop", () => {
    render(<FormButton content="Create account" />)

    const element = screen.getByText("Create account")

    expect(element).toBeInTheDocument()
})