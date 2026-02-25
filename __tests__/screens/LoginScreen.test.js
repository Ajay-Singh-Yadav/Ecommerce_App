import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import LoginScreen from '../../src/screens/profile/components/LoginScreen';
jest.spyOn(Alert, 'alert');

const fillLoginForm = (getByPlaceholderText, email, password) => {
  fireEvent.changeText(getByPlaceholderText('Email'), email);
  fireEvent.changeText(getByPlaceholderText('Password'), password);
};

describe('LoginScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  it('renders all input fields', () => {
    const { getByPlaceholderText } = render(
      <LoginScreen navigation={mockNavigation} />,
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  it('shows validation errors when submitting empty form', async () => {
    const { getByTestId, getByText } = render(<LoginScreen />);

    fireEvent.press(getByTestId('login-button'));

    await waitFor(() => {
      expect(getByText(/email is required/i)).toBeTruthy();
      expect(getByText(/password is required/i)).toBeTruthy();
    });
  });

  it('submits form with valid data and shows alert', async () => {
    const { getByPlaceholderText, getByTestId } = render(<LoginScreen />);

    fillLoginForm(getByPlaceholderText, 'john123@test.com', 'Abc@1234');

    fireEvent.press(getByTestId('login-button'));

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Login Success',
        expect.anything(),
      );
    });
  });
});
