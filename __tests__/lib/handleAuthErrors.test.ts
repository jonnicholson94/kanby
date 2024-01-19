
import { handleEmailValidation, handlePasswordValidation } from "@/lib/handleAuthErrors"; // Replace with the correct path

describe('handleEmailValidation', () => {
  test('returns empty string for valid email', () => {
    const validEmail = 'test@example.com';
    const result = handleEmailValidation(validEmail);
    expect(result).toBe('');
  });

  test('returns error message for invalid email', () => {
    const invalidEmail = 'invalid-email';
    const result = handleEmailValidation(invalidEmail);
    expect(result).toBe('Please enter a valid email address');
  });
});

describe('handlePasswordValidation', () => {
  test('returns empty string for valid password', () => {
    const validPassword = 'securepassword';
    const result = handlePasswordValidation(validPassword);
    expect(result).toBe('');
  });

  test('returns error message for invalid password', () => {
    const invalidPassword = 'short';
    const result = handlePasswordValidation(invalidPassword);
    expect(result).toBe('Your password needs to be at least 6 characters long');
  });
});
