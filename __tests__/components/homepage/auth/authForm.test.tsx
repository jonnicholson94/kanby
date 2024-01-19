
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

import AuthForm from "@/components/homepage/auth/authForm";

test('renders AuthForm component with children', () => {
  render(<AuthForm handleSubmit={() => {}}><p>Test Children</p></AuthForm>);
  expect(screen.getByText('Test Children')).toBeInTheDocument();
});

test('form submission triggers handleSubmit', () => {
    const handleSubmitMock = jest.fn();
    render(<AuthForm handleSubmit={handleSubmitMock}>Test Children</AuthForm>);
    const formElement = screen.getByTestId('auth-form');
    fireEvent.submit(formElement);
    expect(handleSubmitMock).toHaveBeenCalled();
  });