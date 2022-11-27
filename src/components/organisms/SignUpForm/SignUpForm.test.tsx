import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignUpForm } from './SignUpForm';

import type { Props } from './SignUpForm';

describe('SignUpForm', () => {
	const onSubmitSignUpForm = jest.fn<
		Props['onSubmitSignUpForm'],
		[{ name: string; email: string; password: string }]
	>();

	const props: Props = {
		onSubmitSignUpForm,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<SignUpForm {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render name, email, password, confirm password input fields and submit button', () => {
		render(<SignUpForm {...props} />);

		const nameInput = screen.getByTestId('sign-up-form-name-input-test-id');
		const emailInput = screen.getByTestId('sign-up-form-email-input-test-id');
		const passwordInput = screen.getByTestId(
			'sign-up-form-password-input-test-id'
		);
		const confirmPasswordInput = screen.getByTestId(
			'sign-up-form-confirm-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		expect(nameInput).not.toBeNull();
		expect(emailInput).not.toBeNull();
		expect(passwordInput).not.toBeNull();
		expect(confirmPasswordInput).not.toBeNull();
		expect(submitBtn).toHaveTextContent('Sign Up');
	});

	it('should render with initially filled input fields', () => {
		render(<SignUpForm {...props} />);

		const nameInputField = screen.getByTestId(
			'input-field-sign-up-form-name-input-test-id'
		);
		const emailInputField = screen.getByTestId(
			'input-field-sign-up-form-email-input-test-id'
		);
		const passwordInputField = screen.getByTestId(
			'input-field-sign-up-form-password-input-test-id'
		);
		const confirmPasswordInputField = screen.getByTestId(
			'input-field-sign-up-form-confirm-password-input-test-id'
		);

		expect(nameInputField.props).toHaveProperty('value', 'John Smith');
		expect(emailInputField.props).toHaveProperty('value', 'test@test.com');
		expect(passwordInputField.props).toHaveProperty('value', 'password');
		expect(confirmPasswordInputField.props).toHaveProperty('value', 'password');
	});

	it('should submit form when input fields are filled and email is valid and passwords match', () => {
		render(<SignUpForm {...props} />);

		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'John Smith',
				email: 'test@test.com',
				password: 'password',
			})
		);
		expect(onSubmitSignUpForm).toHaveBeenCalledTimes(1);
	});

	it("shouldn't submit form with empty inputs", () => {
		render(<SignUpForm {...props} />);

		const nameInputField = screen.getByTestId(
			'input-field-sign-up-form-name-input-test-id'
		);
		const emailInputField = screen.getByTestId(
			'input-field-sign-up-form-email-input-test-id'
		);
		const passwordInputField = screen.getByTestId(
			'input-field-sign-up-form-password-input-test-id'
		);
		const confirmPasswordInputField = screen.getByTestId(
			'input-field-sign-up-form-confirm-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(nameInputField, '');
		fireEvent.changeText(emailInputField, '');
		fireEvent.changeText(passwordInputField, '');
		fireEvent.changeText(confirmPasswordInputField, '');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form when input fields are filled and email is not valid", () => {
		render(<SignUpForm {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-up-form-email-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, 'invalidmail');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form when input fields are filled and passwords don't match", () => {
		render(<SignUpForm {...props} />);

		const passwordInputField = screen.getByTestId(
			'input-field-sign-up-form-password-input-test-id'
		);
		const confirmPasswordInputField = screen.getByTestId(
			'input-field-sign-up-form-confirm-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(passwordInputField, 'password');
		fireEvent.changeText(confirmPasswordInputField, 'drowssap');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});
});
