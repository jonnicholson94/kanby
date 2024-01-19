
import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'

import FormLink from "@/components/homepage/auth/formLink"

test('renders FormLink component with content', () => {

    const content = 

    render(<FormLink content="Already got an account?" toggle="register" setState={() => {}} />);

    const linkButton = screen.getByText("Already got an account?");

    expect(linkButton).toBeInTheDocument();

});

test('clicking the button triggers state change', () => {

    const setStateMock = jest.fn();

    render(<FormLink content="Back to sign in" toggle="register" setState={setStateMock} />);

    const linkButton = screen.getByText("Back to sign in");

    fireEvent.click(linkButton);

    expect(setStateMock).toHaveBeenCalledWith('register');

});