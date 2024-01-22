
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import Home from "@/pages"

const useRouter = jest.spyOn(require("next/router"), "useRouter")

test("displays header on page", () => {

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<Home />)

    const element = screen.getByTestId("homepage-header")

    expect(element).toBeInTheDocument()
})

test("displays top heading on page", () => {

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<Home />)
    const element = screen.getByText("Manage your tasks without the fuss")
    expect(element).toBeInTheDocument()
})

test("shows create account form by default", () => {

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<Home />)
    expect(screen.getByTestId("auth-form")).toBeInTheDocument()
    expect(screen.getByText('Create your Kanby account')).toBeInTheDocument();
})

test("shows sign in form when form link on create is clicked", () => {

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<Home />)
    const formLink = screen.getByText("Already got an account?")
    fireEvent.click(formLink)
    expect(screen.getByText("Sign in to your Kanby account")).toBeInTheDocument()
})

test("shows request reset form when 'forgotten your password' link is clicked", () => {

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<Home />)
    const signInLink = screen.getByText("Already got an account?")
    fireEvent.click(signInLink)
    const forgotPasswordLink = screen.getByText("Forgotten your password?")
    fireEvent.click(forgotPasswordLink)
    expect(screen.getByText("Request a password reset")).toBeInTheDocument()
})