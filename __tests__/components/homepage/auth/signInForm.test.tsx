
import { screen, render, fireEvent, waitFor} from "@testing-library/react"
import "@testing-library/jest-dom"

import { api } from "@/lib/api";

import SignInForm from "@/components/homepage/auth/signInForm";

const useRouter = jest.spyOn(require("next/router"), "useRouter")

test('renders SignIn component', () => {
    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)
    render(<SignInForm setActive={() => {}} />);
    expect(screen.getByTestId("auth-form")).toBeInTheDocument()
    expect(screen.getByText('Sign in to your Kanby account')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Not got an account?')).toBeInTheDocument();
    expect(screen.getByText('Forgotten your password?')).toBeInTheDocument();
});

test('user can enter email and password', () => {

  useRouter.mockImplementationOnce(() => {})

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<SignInForm setActive={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
});

test('handles form submit, and calls api function', async () => {

  const router = { push: jest.fn() }
  useRouter.mockReturnValue(router)
  render(<SignInForm setActive={() => {}} />);
  const signInButton = screen.getByText('Sign in');

  // Mock the successful API response
  jest.spyOn(api, 'signIn').mockResolvedValueOnce({ data: 'success', error: null });

  fireEvent.click(signInButton);

  await waitFor(() => {
    expect(api.signIn).toHaveBeenCalled();
  });
});