
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'

import InputError from "@/components/ui/inputError"

test("renders passed in error prop", () => {
    render(<InputError message="Example error" />)

    const element = screen.getByText("Example error")

    expect(element).toBeInTheDocument()
})

test('renders AuthError component with an image', () => {

    render(<InputError message="Example error" />);
  
    const errorImage = screen.getByRole('img');

    expect(errorImage).toBeInTheDocument();

});