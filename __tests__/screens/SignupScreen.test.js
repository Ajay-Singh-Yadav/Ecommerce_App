import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import SignupScreen from '../../src/screens/profile/components/SignupScreen';

jest.spyOn(Alert, 'alert');

describe('SignupScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  it('renders all input fields', () => {
    const { getByPlaceholderText } = render(
      <SignupScreen navigation={mockNavigation} />,
    );
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(getByPlaceholderText('Last Name')).toBeTruthy();
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Phone Number')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('shows validation errors when submitting empty form', async () => {
    const { getByText } = render(<SignupScreen navigation={mockNavigation} />);

    fireEvent.press(getByText(/submit/i));

    await waitFor(() => {
      expect(getByText(/first name is required/i)).toBeTruthy();
      expect(getByText(/last name is required/i)).toBeTruthy();
      expect(getByText(/email is required/i)).toBeTruthy();
      expect(getByText(/phone number is required/i)).toBeTruthy();
      expect(getByText(/password is required/i)).toBeTruthy();
    });
  });

  it('shows error for all invalid email formats', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignupScreen navigation={mockNavigation} />,
    );

    const invalidEmails = [
      'userdomain.com',
      'user@',
      '@domain.com',
      'user@@domain.com',
      'user@domaincom',
      'user!#@domain.com',
      '',
    ];

    const emailInput = getByPlaceholderText('Email');

    for (const email of invalidEmails) {
      fireEvent.changeText(emailInput, email);
      fireEvent.press(getByText(/submit/i));

      await waitFor(() => {
        expect(getByText(/email must/i)).toBeTruthy();
      });
    }
  });

  it('shows error for invalid  phone', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignupScreen navigation={mockNavigation} />,
    );

    fireEvent.changeText(getByPlaceholderText('Phone Number'), '1234');

    fireEvent.press(getByText(/submit/i));

    await waitFor(() => {
      expect(getByText(/phone number must be exactly 10 digits/i)).toBeTruthy();
    });
  });

  it('shows error for weak password', async () => {
    const { getByPlaceholderText, getByText } = render(
      <SignupScreen navigation={mockNavigation} />,
    );

    fireEvent.changeText(getByPlaceholderText('Password'), 'abc123');

    fireEvent.press(getByText(/submit/i));

    await waitFor(() => {
      expect(getByText(/password must contain 8 characters/i)).toBeTruthy();
    });
  });

  it('submits form with valid data and shows alert', async () => {
    const { getByPlaceholderText, getByText } = render(<SignupScreen />);

    fireEvent.changeText(getByPlaceholderText('First Name'), 'John');
    fireEvent.changeText(getByPlaceholderText('Last Name'), 'Doe');
    fireEvent.changeText(getByPlaceholderText('Email'), 'john123@test.com');
    fireEvent.changeText(getByPlaceholderText('Phone Number'), '9876543210');
    fireEvent.changeText(getByPlaceholderText('Password'), 'Abc@1234');
    fireEvent.press(getByText('Female'));

    fireEvent.press(getByText(/submit/i));

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Success', expect.anything());
    });
  });
});
