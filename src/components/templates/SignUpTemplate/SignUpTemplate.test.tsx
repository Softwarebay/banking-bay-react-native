import { fireEvent, render, screen } from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignUpTemplate } from './SignUpTemplate';

import type { Props } from './SignUpTemplate';

describe('SignUpTemplate', () => {
	const onSubmitSignUpForm = jest.fn<
		Props['onSubmitSignUpForm'],
		[{ name: string; email: string; password: string }]
	>();
	const onPressFooterLink = jest.fn<Props['onPressFooterLink'], []>();
	const onPressFacebook = jest.fn<Props['onPressFacebook'], []>();
	const onPressGooglePlus = jest.fn<Props['onPressGooglePlus'], []>();
	const onPressTwitter = jest.fn<Props['onPressTwitter'], []>();

	const props: Props = {
		footerText: 'Footer Text',
		footerLinkText: 'Footer Link',
		headingText: 'Heading',
		onSubmitSignUpForm,
		onPressFooterLink,
		onPressFacebook,
		onPressGooglePlus,
		onPressTwitter,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<SignUpTemplate {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render sign in heading', () => {
		render(<SignUpTemplate {...props} />);

		const heading = screen.getByTestId('sign-up-heading-test-id');

		expect(heading).toHaveTextContent('Heading');
	});

	it('should render sign up form', () => {
		render(<SignUpTemplate {...props} />);

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
		render(<SignUpTemplate {...props} />);

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
		render(<SignUpTemplate {...props} />);

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

	it("shouldn't submit form with empty name input", () => {
		render(<SignUpTemplate {...props} />);

		const nameInputField = screen.getByTestId(
			'input-field-sign-up-form-name-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(nameInputField, '');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form with empty email input", () => {
		render(<SignUpTemplate {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-up-form-email-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, '');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form with invalid email input", () => {
		render(<SignUpTemplate {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-up-form-email-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, 'invalidemail');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form with empty password inputs", () => {
		render(<SignUpTemplate {...props} />);

		const passwordInputField = screen.getByTestId(
			'input-field-sign-up-form-password-input-test-id'
		);
		const confirmPasswordInputField = screen.getByTestId(
			'input-field-sign-up-form-confirm-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-up-form-submit-button-test-id');

		fireEvent.changeText(passwordInputField, '');
		fireEvent.changeText(confirmPasswordInputField, '');
		fireEvent.press(submitBtn);

		expect(onSubmitSignUpForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form with mismatched passwords", () => {
		render(<SignUpTemplate {...props} />);

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

	it('should display form footer text, form footer link', () => {
		render(<SignUpTemplate {...props} />);

		const footerText = screen.getByTestId('sign-up-footer-text-test-id');
		const footerLink = screen.getByTestId('sign-up-footer-link-test-id');

		expect(footerText).toHaveTextContent('Footer Text');
		expect(footerLink).toHaveTextContent('Footer Link');
	});

	it('should handle press events on footer link button', () => {
		render(<SignUpTemplate {...props} />);

		const footerLink = screen.getByTestId('sign-up-footer-link-test-id');

		fireEvent.press(footerLink);

		expect(onPressFooterLink).toHaveBeenCalledTimes(1);
	});

	it('should render 3 icon buttons to authenticate with social media', () => {
		render(<SignUpTemplate {...props} />);

		const authButtons = screen.getAllByTestId(
			/(facebook|twitter|googlePlus)-icon-btn-test-id/gi
		);

		expect(authButtons).toHaveLength(3);
	});

	it('should handle press events on Facebook icon', () => {
		render(<SignUpTemplate {...props} />);

		const facebookIconBtn = screen.getByTestId(/facebook-icon-btn-test-id/i);

		fireEvent.press(facebookIconBtn);

		expect(onPressFacebook).toHaveBeenCalledTimes(1);
		expect(onPressGooglePlus).not.toHaveBeenCalled();
		expect(onPressTwitter).not.toHaveBeenCalled();
	});

	it('should handle press events on Google+ icon', () => {
		render(<SignUpTemplate {...props} />);

		const googlePlusIconBtn = screen.getByTestId(
			/googlePlus-icon-btn-test-id/i
		);

		fireEvent.press(googlePlusIconBtn);

		expect(onPressGooglePlus).toHaveBeenCalledTimes(1);
		expect(onPressFacebook).not.toHaveBeenCalled();
		expect(onPressTwitter).not.toHaveBeenCalled();
	});

	it('should handle press events on Twitter icon', () => {
		render(<SignUpTemplate {...props} />);

		const twitterIconBtn = screen.getByTestId(/twitter-icon-btn-test-id/i);

		fireEvent.press(twitterIconBtn);

		expect(onPressTwitter).toHaveBeenCalledTimes(1);
		expect(onPressFacebook).not.toHaveBeenCalled();
		expect(onPressGooglePlus).not.toHaveBeenCalled();
	});
});
