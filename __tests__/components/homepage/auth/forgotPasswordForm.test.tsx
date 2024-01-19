
import { screen, render, fireEvent, waitFor} from "@testing-library/react"
import "@testing-library/jest-dom"

import { api } from "@/lib/api";

import ForgotPasswordForm from "@/components/homepage/auth/forgotPasswordForm";

const useRouter = jest.spyOn(require("next/router"), "useRouter")

test('renders ForgotPasswordForm component', () => {
    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)
    render(<ForgotPasswordForm setActive={() => {}} />);
    expect(screen.getByTestId("auth-form")).toBeInTheDocument()
    expect(screen.getByText('Request a password reset')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Request reset')).toBeInTheDocument();
    expect(screen.getByText('Back to sign in')).toBeInTheDocument();
});

test('user can enter email', () => {

  useRouter.mockImplementationOnce(() => {})

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<ForgotPasswordForm setActive={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
});

test('handles form submit, and calls api function', async () => {

  const router = { push: jest.fn() }
  useRouter.mockReturnValue(router)
  render(<ForgotPasswordForm setActive={() => {}} />);
  const resetButton = screen.getByText('Request reset');

  // Mock the successful API response
  jest.spyOn(api, 'requestPasswordReset').mockResolvedValueOnce({ data: 'success', error: null });

  fireEvent.click(resetButton);

  await waitFor(() => {
    expect(api.requestPasswordReset).toHaveBeenCalled();
  });
});