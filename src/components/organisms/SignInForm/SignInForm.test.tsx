import {
	fireEvent,
	render,
	screen,
	within,
} from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignInForm } from './SignInForm';

import type { Props } from './SignInForm';

describe('SignInForm', () => {
	const mockOnRestorePassword = jest.fn<Props['onRestorePassword'], []>();
	const mockOnSubmitSignInForm = jest.fn<
		Props['onSubmitSignInForm'],
		[{ email: string; password: string; persistPassword: boolean }]
	>();

	const props: Props = {
		onRestorePassword: mockOnRestorePassword,
		onSubmitSignInForm: mockOnSubmitSignInForm,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<SignInForm {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render email, password input fields and submit button', () => {
		render(<SignInForm {...props} />);

		const emailInput = screen.getByTestId('sign-in-form-email-input-test-id');
		const passwordInput = screen.getByTestId(
			'sign-in-form-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		expect(emailInput).not.toBeNull();
		expect(passwordInput).not.toBeNull();
		expect(submitBtn).toHaveTextContent('Sign In');
	});

	it('should render remember password checkbox, initially unchecked', () => {
		render(<SignInForm {...props} />);

		const checkbox = screen.getByTestId('sign-in-form-checkbox-test-id');
		const checkIcon = within(checkbox).queryByTestId('check-icon-test-id');
		const checkboxLabel = screen.getByText('Remember me');

		expect(checkbox).not.toBeNull();
		expect(checkIcon).toBeNull();
		expect(checkboxLabel).not.toBeNull();
	});

	it('should render restore password button', () => {
		render(<SignInForm {...props} />);

		const linkBtn = screen.getByTestId(
			'sign-in-form-restore-password-link-test-id'
		);

		expect(linkBtn).toHaveTextContent('Lost your password?');
	});

	it('should handle press events on restore password button', () => {
		render(<SignInForm {...props} />);

		const linkBtn = screen.getByTestId(
			'sign-in-form-restore-password-link-test-id'
		);

		fireEvent.press(linkBtn);

		expect(mockOnRestorePassword).toHaveBeenCalledTimes(1);
	});

	it('should render with initially filled input fields', () => {
		render(<SignInForm {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-in-form-email-input-test-id'
		);
		const passwordInputField = screen.getByTestId(
			'input-field-sign-in-form-password-input-test-id'
		);

		expect(emailInputField.props).toHaveProperty('value', 'test@test.com');
		expect(passwordInputField.props).toHaveProperty('value', 'password');
	});

	it('should submit form when input fields are filled and email is valid', () => {
		render(<SignInForm {...props} />);

		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(mockOnSubmitSignInForm).toHaveBeenCalledWith(
			expect.objectContaining({ email: 'test@test.com', password: 'password' })
		);
		expect(mockOnSubmitSignInForm).toHaveBeenCalledTimes(1);
	});

	it('should submit form with checkbox unchecked', () => {
		render(<SignInForm {...props} />);

		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(mockOnSubmitSignInForm).toHaveBeenCalledWith(
			expect.objectContaining({ persistPassword: false })
		);
		expect(mockOnSubmitSignInForm).toHaveBeenCalledTimes(1);
	});

	it('should submit form with checkbox checked', () => {
		render(<SignInForm {...props} />);

		const checkbox = screen.getByTestId('sign-in-form-checkbox-test-id');
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(checkbox);
		fireEvent.press(submitBtn);

		expect(mockOnSubmitSignInForm).toHaveBeenCalledWith(
			expect.objectContaining({ persistPassword: true })
		);
		expect(mockOnSubmitSignInForm).toHaveBeenCalledTimes(1);
	});

	it("shouldn't submit form when one or more input fields are empty", () => {
		render(<SignInForm {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-in-form-email-input-test-id'
		);
		const passwordInputField = screen.getByTestId(
			'input-field-sign-in-form-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, '');
		fireEvent.press(submitBtn);

		expect(mockOnSubmitSignInForm).not.toHaveBeenCalled();

		fireEvent.changeText(passwordInputField, '');
		fireEvent.press(submitBtn);

		expect(mockOnSubmitSignInForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form when input fields are filled and email is not valid", () => {
		render(<SignInForm {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-in-form-email-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, 'invalidmail');
		fireEvent.press(submitBtn);

		expect(mockOnSubmitSignInForm).not.toHaveBeenCalled();
	});
});
