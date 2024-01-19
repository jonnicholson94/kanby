
import { render, screen } from "@testing-library/react"

import FormTitle from "@/components/homepage/auth/formTitle"

// Test if passed in prop renders correctly

test("Tests if passed in title prop renders correctly", () => {

    render(<FormTitle title="Sign in to your account" />)

    const element = screen.getByText("Sign in to your account")

    expect(element).toBeDefined()

})