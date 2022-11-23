import {
	fireEvent,
	render,
	screen,
	within,
} from '@testing-library/react-native';
import testRenderer from 'react-test-renderer';

import { SignInTemplate } from './SignInTemplate';

import type { Props } from './SignInTemplate';

describe('SignInTemplate', () => {
	const onSubmitSignInForm = jest.fn<
		Props['onSubmitSignInForm'],
		[{ email: string; password: string; persistPassword: boolean }]
	>();
	const onRestorePassword = jest.fn<Props['onRestorePassword'], []>();
	const onPressFooterLink = jest.fn<Props['onPressFooterLink'], []>();
	const onPressFacebook = jest.fn<Props['onPressFacebook'], []>();
	const onPressGooglePlus = jest.fn<Props['onPressGooglePlus'], []>();
	const onPressTwitter = jest.fn<Props['onPressTwitter'], []>();

	const props: Props = {
		footerText: 'Footer Text',
		footerLinkText: 'Footer Link',
		headingText: 'Heading',
		onSubmitSignInForm,
		onRestorePassword,
		onPressFooterLink,
		onPressFacebook,
		onPressGooglePlus,
		onPressTwitter,
	};

	it('should match snapshot', () => {
		const tree = testRenderer.create(<SignInTemplate {...props} />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render sign in heading', () => {
		render(<SignInTemplate {...props} />);

		const heading = screen.getByTestId('sign-in-heading-test-id');

		expect(heading).toHaveTextContent('Heading');
	});

	it('should render email, password input fields and submit button', () => {
		render(<SignInTemplate {...props} />);

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
		render(<SignInTemplate {...props} />);

		const checkbox = screen.getByTestId('sign-in-form-checkbox-test-id');
		const checkIcon = within(checkbox).queryByTestId('check-icon-test-id');
		const checkboxLabel = screen.getByText('Remember me');

		expect(checkbox).not.toBeNull();
		expect(checkIcon).toBeNull();
		expect(checkboxLabel).not.toBeNull();
	});

	it('should render restore password button', () => {
		render(<SignInTemplate {...props} />);

		const linkBtn = screen.getByTestId(
			'sign-in-form-restore-password-link-test-id'
		);

		expect(linkBtn).toHaveTextContent('Lost your password?');
	});

	it('should handle press events on restore password button', () => {
		render(<SignInTemplate {...props} />);

		const linkBtn = screen.getByTestId(
			'sign-in-form-restore-password-link-test-id'
		);

		fireEvent.press(linkBtn);

		expect(onRestorePassword).toHaveBeenCalledTimes(1);
	});

	it('should render with initially filled input fields', () => {
		render(<SignInTemplate {...props} />);

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
		render(<SignInTemplate {...props} />);

		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(onSubmitSignInForm).toHaveBeenCalledWith(
			expect.objectContaining({ email: 'test@test.com', password: 'password' })
		);
		expect(onSubmitSignInForm).toHaveBeenCalledTimes(1);
	});

	it('should submit form with checkbox unchecked', () => {
		render(<SignInTemplate {...props} />);

		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(submitBtn);

		expect(onSubmitSignInForm).toHaveBeenCalledWith(
			expect.objectContaining({ persistPassword: false })
		);
		expect(onSubmitSignInForm).toHaveBeenCalledTimes(1);
	});

	it('should submit form with checkbox checked', () => {
		render(<SignInTemplate {...props} />);

		const checkbox = screen.getByTestId('sign-in-form-checkbox-test-id');
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.press(checkbox);
		fireEvent.press(submitBtn);

		expect(onSubmitSignInForm).toHaveBeenCalledWith(
			expect.objectContaining({ persistPassword: true })
		);
		expect(onSubmitSignInForm).toHaveBeenCalledTimes(1);
	});

	it("shouldn't submit form when one or more input fields are empty", () => {
		render(<SignInTemplate {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-in-form-email-input-test-id'
		);
		const passwordInputField = screen.getByTestId(
			'input-field-sign-in-form-password-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, '');
		fireEvent.press(submitBtn);

		expect(onSubmitSignInForm).not.toHaveBeenCalled();

		fireEvent.changeText(passwordInputField, '');
		fireEvent.press(submitBtn);

		expect(onSubmitSignInForm).not.toHaveBeenCalled();
	});

	it("shouldn't submit form when input fields are filled and email is not valid", () => {
		render(<SignInTemplate {...props} />);

		const emailInputField = screen.getByTestId(
			'input-field-sign-in-form-email-input-test-id'
		);
		const submitBtn = screen.getByTestId('sign-in-form-submit-button-test-id');

		fireEvent.changeText(emailInputField, 'invalidmail');
		fireEvent.press(submitBtn);

		expect(onSubmitSignInForm).not.toHaveBeenCalled();
	});

	it('should display form footer text, form footer link', () => {
		render(<SignInTemplate {...props} />);

		const footerText = screen.getByTestId('sign-in-footer-text-test-id');
		const footerLink = screen.getByTestId('sign-in-footer-link-test-id');

		expect(footerText).toHaveTextContent('Footer Text');
		expect(footerLink).toHaveTextContent('Footer Link');
	});

	it('should handle press events on footer link button', () => {
		render(<SignInTemplate {...props} />);

		const footerLink = screen.getByTestId('sign-in-footer-link-test-id');

		fireEvent.press(footerLink);

		expect(onPressFooterLink).toHaveBeenCalledTimes(1);
	});

	it('should render 3 icon buttons to authenticate with social media', () => {
		render(<SignInTemplate {...props} />);

		const authButtons = screen.getAllByTestId(
			/(facebook|twitter|googlePlus)-icon-btn-test-id/gi
		);

		expect(authButtons).toHaveLength(3);
	});

	it('should handle press events on Facebook icon', () => {
		render(<SignInTemplate {...props} />);

		const facebookIconBtn = screen.getByTestId(/facebook-icon-btn-test-id/i);

		fireEvent.press(facebookIconBtn);

		expect(onPressFacebook).toHaveBeenCalledTimes(1);
		expect(onPressGooglePlus).not.toHaveBeenCalled();
		expect(onPressTwitter).not.toHaveBeenCalled();
	});

	it('should handle press events on Google+ icon', () => {
		render(<SignInTemplate {...props} />);

		const googlePlusIconBtn = screen.getByTestId(
			/googlePlus-icon-btn-test-id/i
		);

		fireEvent.press(googlePlusIconBtn);

		expect(onPressGooglePlus).toHaveBeenCalledTimes(1);
		expect(onPressFacebook).not.toHaveBeenCalled();
		expect(onPressTwitter).not.toHaveBeenCalled();
	});

	it('should handle press events on Twitter icon', () => {
		render(<SignInTemplate {...props} />);

		const twitterIconBtn = screen.getByTestId(/twitter-icon-btn-test-id/i);

		fireEvent.press(twitterIconBtn);

		expect(onPressTwitter).toHaveBeenCalledTimes(1);
		expect(onPressFacebook).not.toHaveBeenCalled();
		expect(onPressGooglePlus).not.toHaveBeenCalled();
	});
});
