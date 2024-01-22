
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'

import FormButton from "@/components/homepage/auth/formButton"

test("button renders content passed in as a prop", () => {
    render(<FormButton content="Create account" loading={false} />)

    const element = screen.getByText("Create account")

    expect(element).toBeInTheDocument()
})

test('displays loader and disables button in loading state', () => {
    render(<FormButton content="Create account" loading={true} />);
    const buttonElement = screen.getByTestId('form-button');
    const loaderElement = screen.getByAltText('The spinner to indicate an action');
    
    expect(buttonElement).toBeDisabled();
    expect(loaderElement).toBeInTheDocument();
});