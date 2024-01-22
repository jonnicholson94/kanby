
import { screen, render, fireEvent, waitFor} from "@testing-library/react"
import "@testing-library/jest-dom"

import { api } from "@/lib/api";

import RegisterForm from "@/components/homepage/auth/registerForm";

const useRouter = jest.spyOn(require("next/router"), "useRouter")

test('renders RegisterForm component', () => {
    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)
    render(<RegisterForm setActive={() => {}} />);
    expect(screen.getByTestId("auth-form")).toBeInTheDocument()
    expect(screen.getByText('Create your Kanby account')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Create account')).toBeInTheDocument();
    expect(screen.getByText('Already got an account?')).toBeInTheDocument();
});

test('user can enter email and password', () => {

  useRouter.mockImplementationOnce(() => {})

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    render(<RegisterForm setActive={() => {}} />);
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
  render(<RegisterForm setActive={() => {}} />);
  const createAccountButton = screen.getByText('Create account');

  // Mock the successful API response
  jest.spyOn(api, 'register').mockResolvedValueOnce({ data: 'success', error: null });

  fireEvent.click(createAccountButton);

  await waitFor(() => {
    expect(api.register).toHaveBeenCalled();
  });
});