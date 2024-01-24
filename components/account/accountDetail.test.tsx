
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import AccountDetail from "./accountDetail"

test("renders the passed in property prop correctly", () => {

    render(<AccountDetail property="Email" value="hello" />)

    expect(screen.getByText("Email")).toBeInTheDocument()

})

test("renders the passed in value prop correctly", () => {

    render(<AccountDetail property="Email" value="hello" />)

    expect(screen.getByText("hello")).toBeInTheDocument()

})