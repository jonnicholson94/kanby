
import { screen, render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'

import AuthInput from "@/components/homepage/auth/authInput"

test('renders AuthInput component', () => {
    render(<AuthInput label="Email" type="email" state="" setState={() => {}} placeholder="Enter your email" />);

    const label = screen.getByText("Email")
    const input = screen.getByPlaceholderText('Enter your email')

    expect(label).toBeDefined()
    expect(input).toBeDefined()

  });
  
test('updates state on input change', () => {

    const mockSetState = jest.fn();

    render(<AuthInput label="Email" type="email" state="" setState={mockSetState} placeholder="Enter your email" />);

    const input = screen.getByPlaceholderText('Enter your email')

    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(mockSetState).toHaveBeenCalledWith('test@example.com');

  });

test('displays error message for invalid email', () => {

    const mockSetState = jest.fn()
    
    render(<AuthInput label="Email" type="email" state="" setState={mockSetState} placeholder="Enter your email" />);

    const input = screen.getByPlaceholderText('Enter your email')

    fireEvent.change(input, { target: { value: 'example' } });

    const element = screen.getByText("Please enter a valid email address")

    expect(element).toBeInTheDocument()
});

test('does not display error message for valid email', () => {

  const mockSetState = jest.fn()
  
  render(<AuthInput label="Email" type="email" state="" setState={mockSetState} placeholder="Enter your email" />);

  const input = screen.getByPlaceholderText('Enter your email')

  fireEvent.change(input, { target: { value: 'jon.nicholson@gmail.com' } });

  const element = screen.queryByText("Please enter a valid email address")

  expect(element).toBeNull()
});

test('displays error message for invalid password', () => {

  const mockSetState = jest.fn()
  
  render(<AuthInput label="Password" type="password" state="" setState={mockSetState} placeholder="Enter your password" />);

  const input = screen.getByPlaceholderText('Enter your password')

  fireEvent.change(input, { target: { value: '123' } });

  const element = screen.getByText("Your password needs to be at least 6 characters long")

  expect(element).toBeInTheDocument()
});

test('does not display error message for valid password', () => {

  const mockSetState = jest.fn()
  
  render(<AuthInput label="Password" type="password" state="" setState={mockSetState} placeholder="Enter your password" />);

  const input = screen.getByPlaceholderText('Enter your password')

  fireEvent.change(input, { target: { value: '123456' } });

  const element = screen.queryByText("Your password needs to be at least 6 characters long")

  expect(element).toBeNull()
});

test("doesn't display error when no change has occurred", () => {
    
    render(<AuthInput label="Email" type="email" state="" setState={() => {}} placeholder="Enter your email" />);

    const element = screen.queryByRole('img');

    expect(element).toBeNull()

})

test('applies correct input type', () => {

    render(<AuthInput label="Password" type="password" state="" setState={() => {}} placeholder="Enter your password" />);

    const inputElement = screen.getByPlaceholderText("Enter your password")

    expect(inputElement).toHaveAttribute("type", "password")

});
  