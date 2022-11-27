import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { ChangePasswordScreen } from './ChangePasswordScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('ChangePasswordScreen', () => {
	it('should match snapshot', () => {
		const tree = testRenderer.create(<ChangePasswordScreen />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it("should render 'Enter new password and confirm.' as header", () => {
		render(<ChangePasswordScreen />);

		const headerText = screen.getByTestId(
			'change-password-template-header-test-id'
		);

		expect(headerText).toHaveTextContent('Enter new password and confirm.');
	});

	it("should render 'Enter your password' as password input placeholder", () => {
		render(<ChangePasswordScreen />);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);

		expect(enterPasswordInputField.props).toHaveProperty(
			'placeholder',
			'Enter your password'
		);
	});

	it("should render 'Confirm your password' as password input placeholder", () => {
		render(<ChangePasswordScreen />);

		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		expect(confirmPasswordInputField.props).toHaveProperty(
			'placeholder',
			'Confirm your password'
		);
	});

	it("should log 'onChangePassword' and new password value after successful form submit", () => {
		render(<ChangePasswordScreen />);
		console.log = jest.fn();

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);
		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		fireEvent.changeText(enterPasswordInputField, 'password');
		fireEvent.changeText(confirmPasswordInputField, 'password');

		const btn = screen.getByTestId('change-password-template-button-test-id');

		fireEvent.press(btn);

		expect(console.log).toHaveBeenCalledWith('onChangePassword', 'password');
	});

	it('should navigate to DashboardScreen after successful form submit', () => {
		render(<ChangePasswordScreen />);

		const enterPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-password-input-test-id'
		);
		const confirmPasswordInputField = screen.getByTestId(
			'input-field-change-password-template-confirm-password-input-test-id'
		);

		fireEvent.changeText(enterPasswordInputField, 'password');
		fireEvent.changeText(confirmPasswordInputField, 'password');

		const btn = screen.getByTestId('change-password-template-button-test-id');

		fireEvent.press(btn);

		expect(mockNavigate).toHaveBeenCalledWith('Root');
	});
});
