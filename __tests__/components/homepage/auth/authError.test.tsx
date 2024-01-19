
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'

import AuthError from "@/components/homepage/auth/authError"

test("renders passed in error prop", () => {
    render(<AuthError message="Example error" />)

    const element = screen.getByText("Example error")

    expect(element).toBeInTheDocument()
})

test('renders AuthError component with an image', () => {

    render(<AuthError message="Example error" />);
  
    const errorImage = screen.getByRole('img');

    expect(errorImage).toBeInTheDocument();

});